export default function Cookies() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Политика использования файлов Cookie</h1>
      <p className="text-neutral-500 mb-8 text-sm">Редакция от 24 июня 2026 г.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Что такое cookie</h2>
        <p>
          Cookie — это небольшие текстовые файлы, которые сайт сохраняет на вашем устройстве при посещении.
          Они помогают сайту запоминать ваши предпочтения и улучшать работу сервиса.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Какие cookie мы используем</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li>
            <strong>Технические (необходимые)</strong> — обеспечивают базовую работу сайта:
            сохранение согласия на использование cookie, сессии пользователя.
          </li>
          <li>
            <strong>Аналитические</strong> — помогают нам понимать, как пользователи взаимодействуют
            с сайтом, чтобы улучшать его. Данные собираются в обезличенном виде.
          </li>
          <li>
            <strong>Функциональные</strong> — запоминают ваши настройки и предпочтения для
            более удобной работы с сайтом.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Хранение данных cookie</h2>
        <p className="mb-3">
          Технические cookie хранятся в локальном хранилище браузера (localStorage) и не передаются
          на сервер. Они необходимы для корректной работы сайта и не могут быть отключены.
        </p>
        <p>
          Срок хранения cookie — до момента очистки данных браузера или отзыва согласия.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Передача данных третьим лицам</h2>
        <p>
          Данные, собранные через cookie, не передаются и не продаются третьим лицам в коммерческих
          целях. Обезличенные аналитические данные могут обрабатываться сервисами веб-аналитики
          для улучшения работы сайта.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Управление cookie</h2>
        <p className="mb-3">
          Вы можете в любой момент отозвать согласие на использование cookie, очистив данные сайта
          в настройках вашего браузера. Обратите внимание: отключение cookie может повлиять на
          корректность работы некоторых функций сайта.
        </p>
        <p>
          Большинство браузеров позволяют управлять cookie через настройки приватности.
          Подробнее — в справке вашего браузера.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Согласие</h2>
        <p>
          Продолжая использование сайта <strong>bediff</strong> после принятия уведомления,
          вы соглашаетесь с использованием cookie в соответствии с настоящей политикой.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Оператор</h2>
        <p className="mb-1">Самозанятый: <strong>Казаков Владислав Павлович</strong></p>
        <p className="mb-1">ИНН: <strong>525010074293</strong></p>
        <p>Связь: через Telegram на сайте bediff</p>
      </section>

      <div className="mt-12 border-t pt-6">
        <a href="/" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
          ← Вернуться на главную
        </a>
      </div>
    </div>
  );
}
