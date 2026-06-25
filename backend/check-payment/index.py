import json
import os
import base64
import urllib.request


def handler(event: dict, context) -> dict:
    """Проверяет статус платежа в ЮКассе по payment_id."""

    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    params = event.get('queryStringParameters') or {}
    payment_id = params.get('payment_id', '').strip()

    if not payment_id:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'payment_id обязателен'})
        }

    shop_id = os.environ['YOOKASSA_SHOP_ID']
    secret_key = os.environ['YOOKASSA_SECRET_KEY']
    credentials = base64.b64encode(f'{shop_id}:{secret_key}'.encode()).decode()

    req = urllib.request.Request(
        f'https://api.yookassa.ru/v3/payments/{payment_id}',
        headers={
            'Authorization': f'Basic {credentials}',
            'Content-Type': 'application/json',
        },
        method='GET',
    )

    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode())

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'status': result.get('status'), 'paid': result.get('paid', False)})
    }
