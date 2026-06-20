interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-[#C8A96E] text-sm uppercase tracking-wide">bediff</div>
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-[#C8A96E] hover:text-[#e0c898] transition-colors duration-300 uppercase text-sm"
          >
            Как это работает
          </a>
          <a
            href="#contact"
            className="text-[#C8A96E] hover:text-[#e0c898] transition-colors duration-300 uppercase text-sm"
          >
            Заказать
          </a>
        </nav>
      </div>
    </header>
  );
}