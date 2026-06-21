import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  {
    src: "https://i.postimg.cc/mrvxBBQ4/dx4-ru-collage-1920x1080-(5).png",
    alt: "Стикерпак — слайд 1",
    fit: "object-contain",
  },
  {
    src: "https://i.postimg.cc/9MhxLMdf/dx4-ru-collage-1920x1080-(4).png",
    alt: "Стикерпак — слайд 2",
    fit: "object-contain",
  },
  {
    src: "https://i.postimg.cc/d169n9tQ/dx4-ru-collage-1920x1080-(7).png",
    alt: "Стикерпак — слайд 3",
    fit: "object-contain",
  },
  {
    src: "https://i.postimg.cc/1X4DBhjK/dx4-ru-collage-1920x1080-(6).png",
    alt: "Стикерпак — слайд 4",
    fit: "object-contain",
  },
];

export default function Promo() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-black transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className={`w-full h-full ${slide.fit}`}

          />
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white p-3 transition-colors"
        aria-label="Предыдущий"
      >
        <Icon name="ChevronLeft" size={28} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white p-3 transition-colors"
        aria-label="Следующий"
      >
        <Icon name="ChevronRight" size={28} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}