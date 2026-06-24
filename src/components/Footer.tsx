export default function Footer() {
  return (
    <div
      className="relative h-[280px] sm:h-[360px] lg:h-[440px] max-h-[440px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+280px)] sm:h-[calc(100vh+360px)] lg:h-[calc(100vh+440px)] -top-[100vh]">
        <div className="h-[280px] sm:h-[360px] lg:h-[440px] sticky top-[calc(100vh-280px)] sm:top-[calc(100vh-360px)] lg:top-[calc(100vh-440px)]">
          <div className="bg-neutral-900 py-4 sm:py-5 lg:py-6 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 justify-end gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 items-end">
                <h3 className="mb-1 uppercase text-neutral-400 text-xs">Услуги</h3>
                <a href="#pricing" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Телеграм-стикеры</a>
                <a href="#pricing" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Эмодзи</a>
                <a href="#pricing" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">AI-фотосессия</a>
                <a href="#order" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Оставить заявку</a>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <h3 className="mb-1 uppercase text-neutral-400 text-xs">Контакты</h3>
                <a href="#telegram" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Telegram</a>
                <a href="#examples" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Примеры работ</a>
                <a href="#faq" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Вопросы</a>
                <a href="#about" className="text-white hover:text-neutral-400 transition-colors duration-300 text-xs sm:text-sm">Как это работает</a>
              </div>
            </div>
            <div className="flex flex-row justify-between items-end">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] text-white font-bold tracking-tight">
                bediff
              </h1>
              <div className="flex flex-col items-end gap-1">
                <p className="text-white text-xs sm:text-sm">{new Date().getFullYear()} bediff</p>
                <a href="/oferta" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-xs">Публичная оферта</a>
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-xs">Политика конфиденциальности</a>
                <a href="/cookies" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-xs">Соглашение о cookie</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}