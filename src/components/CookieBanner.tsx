import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem("cookie_accepted"));

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("cookie_accepted", "1");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/50 rounded-2xl px-5 py-3 flex items-center justify-between gap-4">
      <p className="text-xs text-neutral-500 leading-relaxed">
        Используем cookie.{" "}
        <a href="/cookies" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-300 transition-colors">
          Подробнее
        </a>
      </p>
      <button
        onClick={accept}
        className="shrink-0 bg-neutral-800 text-[#1A9494] text-xs uppercase tracking-wide px-4 py-1.5 rounded-full border border-neutral-700 hover:border-[#1A9494] transition-colors"
      >
        Принять
      </button>
    </div>
  );
}