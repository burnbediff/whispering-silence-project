import json
import os
import uuid
import urllib.request
import urllib.parse
import base64


def handler(event: dict, context) -> dict:
    """Создаёт платёж в ЮКассе и возвращает ссылку на оплату."""

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    service = body.get('service', '').strip()
    order_id = body.get('order_id', str(uuid.uuid4()))

    prices = {
        'Телеграм-стикеры': '149.00',
        'Эмодзи': '99.00',
    }

    amount = prices.get(service)
    if not amount:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Неизвестный тип услуги'})
        }

    shop_id = os.environ['YOOKASSA_SHOP_ID']
    secret_key = os.environ['YOOKASSA_SECRET_KEY']

    credentials = base64.b64encode(f'{shop_id}:{secret_key}'.encode()).decode()

    payload = {
        'amount': {'value': amount, 'currency': 'RUB'},
        'confirmation': {
            'type': 'redirect',
            'return_url': 'https://bediff.ru/?payment=success',
        },
        'capture': True,
        'description': f'Заказ bediff: {service}',
        'metadata': {'order_id': order_id},
    }

    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        'https://api.yookassa.ru/v3/payments',
        data=data,
        headers={
            'Authorization': f'Basic {credentials}',
            'Content-Type': 'application/json',
            'Idempotence-Key': order_id,
        },
        method='POST',
    )

    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode())

    confirmation_url = result['confirmation']['confirmation_url']

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'payment_url': confirmation_url, 'payment_id': result['id']})
    }
