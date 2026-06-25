import json
import os
import smtplib
import psycopg2
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def send_email(name, contact, service, wish, photo_url):
    gmail_user = 'burntime.dota@gmail.com'
    gmail_password = os.environ['GMAIL_APP_PASSWORD'].replace(' ', '')

    if photo_url:
        photo_html = f'''
        <tr>
          <td colspan="2" style="padding: 16px 0 8px 0; color: #666;">Фото клиента</td>
        </tr>
        <tr>
          <td colspan="2" style="padding-bottom: 16px;">
            <a href="{photo_url}">
              <img src="{photo_url}" alt="Фото клиента" style="max-width: 400px; width: 100%; border-radius: 4px; display: block;" />
            </a>
          </td>
        </tr>'''
    else:
        photo_html = '<tr><td style="padding: 8px 0; color: #666;">Фото</td><td style="padding: 8px 0;">—</td></tr>'

    html = f"""
    <html><body style="font-family: Arial, sans-serif; color: #222; max-width: 600px;">
      <h2 style="border-bottom: 2px solid #000; padding-bottom: 8px;">✅ Новая оплаченная заявка — bediff</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #666; width: 140px;">Имя</td><td style="padding: 8px 0;"><b>{name}</b></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Контакт</td><td style="padding: 8px 0;"><b>{contact}</b></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Услуга</td><td style="padding: 8px 0;"><b>{service}</b></td></tr>
        <tr><td style="padding: 8px 0; color: #666;">Пожелание</td><td style="padding: 8px 0;">{wish if wish else '—'}</td></tr>
        {photo_html}
      </table>
    </body></html>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'✅ Оплаченная заявка от {name} — bediff'
    msg['From'] = gmail_user
    msg['To'] = gmail_user
    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, gmail_user, msg.as_string())


def handler(event: dict, context) -> dict:
    """Вебхук от ЮКассы: при успешной оплате отправляет письмо с заявкой."""

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    event_type = body.get('event', '')

    if event_type != 'payment.succeeded':
        return {'statusCode': 200, 'headers': cors_headers, 'body': json.dumps({'ok': True})}

    payment = body.get('object', {})
    payment_id = payment.get('id')
    metadata = payment.get('metadata', {})
    order_id = metadata.get('order_id')

    if not order_id:
        return {'statusCode': 200, 'headers': cors_headers, 'body': json.dumps({'ok': True})}

    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    cur.execute(
        f"UPDATE {schema}.orders SET paid = TRUE, payment_id = %s WHERE id = %s AND paid = FALSE RETURNING name, contact, service, wish, photo_url",
        (payment_id, order_id)
    )
    row = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()

    if row:
        name, contact, service, wish, photo_url = row
        send_email(name, contact, service, wish, photo_url)

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': True})
    }
