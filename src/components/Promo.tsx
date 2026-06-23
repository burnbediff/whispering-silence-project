import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  {
    src: "https://i.postimg.cc/mrvxBBQ4/dx4-ru-collage-1920x1080-(5).png",
    alt: "Стикерпак — слайд 1",
    text: "Забудьте о скучных смайлах! В одном моём стикер-паке вы найдете целую гамму чувств: от искренней радости и саркастичной ухмылки до уморительного стыда и бурного восторга. Теперь ваше сообщение заговорит ярче любых слов.",
  },
  {
    src: "https://i.postimg.cc/9MhxLMdf/dx4-ru-collage-1920x1080-(4).png",
    alt: "Стикерпак — слайд 2",
    text: "Каждая линия и каждая тень в этих стикерах — результат кропотливого ручного труда и моего дотошного внимания к деталям. Я прорабатываю текстуры и мимику так, чтобы персонажи выглядели живыми и осязаемыми.",
  },
  {
    src: "https://i.postimg.cc/1X4DBhjK/dx4-ru-collage-1920x1080-(6).png",
    alt: "Стикерпак — слайд 3",
    text: "Я не просто делаю стикеры, я собираю для вас инструмент общения: вы сами определяете нужный набор эмоций и их количество для вашего пака. Это значит, что в вашем арсенале будут только те реакции, которые действительно нужны, и ни одной лишней.",
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
    <div className="relative w-full overflow-hidden bg-neutral-900 select-none" style={{ height: "100svh" }}>
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-neutral-900 flex items-center transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col md:flex-row w-full h-full">
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-8 md:px-12">
              <p className="text-white text-lg md:text-xl leading-relaxed text-center md:text-left">
                {slide.text}
              </p>
            </div>
          </div>
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
