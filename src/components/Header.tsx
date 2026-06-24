interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/projects/14864d04-7967-4329-83a1-be36c986c09f/files/favicon-1781892824246.png"
            alt="bediff logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-[#1A9494] text-xl uppercase tracking-wide font-semibold">bediff</span>
        </a>
        <nav className="flex flex-col gap-2 items-end md:flex-row md:gap-8 md:items-center self-end md:self-auto">
          <a
            href="#pricing"
            className="text-[#1A9494] hover:text-[#2ABFBF] transition-colors duration-300 uppercase text-sm font-semibold"
          >
            Заказать
          </a>
          <a
            href="#faq"
            className="text-[#1A9494] hover:text-[#2ABFBF] transition-colors duration-300 uppercase text-sm font-semibold"
          >
            FAQ
          </a>
          <a
            href="#about"
            className="text-[#1A9494] hover:text-[#2ABFBF] transition-colors duration-300 uppercase text-sm font-semibold"
          >
            Как это работает
          </a>
        </nav>
      </div>
    </header>
  );
}