import json
import os
import base64
import boto3
import psycopg2


def handler(event: dict, context) -> dict:
    """Принимает заявку с лендинга, сохраняет в БД и загружает фото. Письмо отправляется после оплаты."""

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    service = body.get('service', '').strip()
    wish = body.get('wish', '').strip()
    photo_base64 = body.get('photo', None)
    photo_name = body.get('photo_name', 'photo.jpg')

    if not name or not contact:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Имя и контакт обязательны'})
        }

    photo_url = None
    if photo_base64:
        s3 = boto3.client(
            's3',
            endpoint_url='https://bucket.poehali.dev',
            aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
            aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
        )
        photo_data = base64.b64decode(photo_base64)
        key = f"orders/{contact.replace('@', '_')}_{photo_name}"
        s3.put_object(Bucket='files', Key=key, Body=photo_data, ContentType='image/jpeg')
        photo_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        f"INSERT INTO {schema}.orders (name, contact, service, wish, photo_url) VALUES (%s, %s, %s, %s, %s) RETURNING id",
        (name, contact, service, wish or None, photo_url)
    )
    order_id = str(cur.fetchone()[0])
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'ok': True, 'order_id': order_id})
    }
