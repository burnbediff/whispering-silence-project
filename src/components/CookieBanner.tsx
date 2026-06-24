import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem("cookie_accepted"));

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("cookie_accepted", "1");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-800 border-t border-neutral-700 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <p className="text-sm text-neutral-300 leading-relaxed">
        Мы используем файлы cookie для улучшения работы сайта. Продолжая, вы соглашаетесь с нашей{" "}
        <a href="/privacy" className="underline text-white hover:text-neutral-300 transition-colors">
          политикой конфиденциальности
        </a>.
      </p>
      <button
        onClick={accept}
        className="shrink-0 bg-white text-black text-sm uppercase tracking-wide px-5 py-2 hover:bg-neutral-200 transition-colors"
      >
        Принять
      </button>
    </div>
  );
}
