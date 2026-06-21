import { useState } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  {
    src: "https://i.postimg.cc/mrvxBBQ4/dx4-ru-collage-1920x1080-(5).png",
    alt: "Стикерпак — слайд 1",
    fit: "object-contain",
  },
  {
    src: "https://i.postimg.cc/YqNRnkn2/05313e2f-c052-408b-8164-d9fef8740ecc.png",
    alt: "Стикерпак — слайд 2",
    fit: "object-cover",
  },
];

export default function Promo() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-900 select-none">
      {SLIDES.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full ${slide.fit} transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
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