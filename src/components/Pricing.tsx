export default function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-900 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-3">Стоимость</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
          Простые цены — никаких скрытых платежей
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 flex flex-col gap-4 relative" style={{ border: "1px solid transparent", backgroundImage: "linear-gradient(#171717, #171717), linear-gradient(135deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #8b00ff)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}>
            <p className="uppercase text-xs tracking-wide text-[#1A9494]">Популярное</p>
            <h3 className="text-2xl font-bold text-white">Телеграм-стикеры</h3>
            <p className="text-neutral-400 text-sm leading-relaxed flex-1">
              Загрузите своё фото — получите уникальный стикерпак с вашим персонажем и разными эмоциями. Готово к публикации в Telegram.
            </p>
            <div className="border-t border-neutral-700 pt-4 flex items-end gap-3">
              <span className="text-5xl font-bold text-white">149</span>
              <span className="text-neutral-400 mb-2">₽</span>
              <span className="text-neutral-500 line-through mb-2 text-lg">249₽</span>
              <span className="mb-2 text-sm font-semibold text-green-400">−40%</span>
            </div>
            <a
              href="#order"
              className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wide text-center transition-all duration-300 hover:bg-neutral-200"
            >
              Заказать стикеры
            </a>
          </div>

          <div className="border border-neutral-700 p-8 flex flex-col gap-4 hover:border-white transition-colors duration-300">
            <p className="uppercase text-xs tracking-wide text-neutral-500">Услуга</p>
            <h3 className="text-2xl font-bold text-white">Эмодзи</h3>
            <p className="text-neutral-400 text-sm leading-relaxed flex-1">
              Загрузите своё фото — получите набор уникальных эмодзи с вашим персонажем. Используйте их на своих трансляциях и в чатах, чтобы выразить эмоции по-настоящему узнаваемо.
            </p>
            <div className="border-t border-neutral-700 pt-4 flex items-end gap-3">
              <span className="text-5xl font-bold text-white">99</span>
              <span className="text-neutral-400 mb-2">₽</span>
              <span className="text-neutral-500 line-through mb-2 text-lg">199₽</span>
              <span className="mb-2 text-sm font-semibold text-green-400">−50%</span>
            </div>
            <a
              href="#order"
              className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wide text-center transition-all duration-300 hover:bg-neutral-200"
            >
              Заказать эмодзи
            </a>
          </div>

          <div className="border border-neutral-700 p-8 flex flex-col gap-4 hover:border-white transition-colors duration-300">
            <p className="uppercase text-xs tracking-wide text-neutral-500">Услуга</p>
            <h3 className="text-2xl font-bold text-white">AI Фотосессия</h3>
            <p className="text-neutral-400 text-sm leading-relaxed flex-1">
              Профессиональные портреты в любом стиле — деловые, креативные, атмосферные. Без студии и фотографа, результат за несколько минут.
            </p>
            <div className="border-t border-neutral-700 pt-4 flex items-end gap-2">
              <span className="text-2xl font-bold text-[#1A9494]">———</span>
            </div>
            <span className="bg-neutral-700 text-neutral-400 px-6 py-3 text-sm uppercase tracking-wide text-center cursor-default">
              Скоро
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}