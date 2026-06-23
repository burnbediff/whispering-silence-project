import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  {
    src: "https://cdn.poehali.dev/projects/14864d04-7967-4329-83a1-be36c986c09f/bucket/12b0bed6-140f-4d24-a054-9821f6b4906b.png",
    alt: "Стикерпак — слайд 1",
    title: "Палитра эмоций",
    text: "Забудьте о скучных смайлах! В одном моём стикер-паке вы найдете целую гамму чувств: от искренней радости и саркастичной ухмылки до уморительного стыда и бурного восторга. Теперь ваше сообщение заговорит ярче любых слов.",
  },
  {
    src: "https://cdn.poehali.dev/projects/14864d04-7967-4329-83a1-be36c986c09f/bucket/49c9bb71-35b9-4890-865d-a3486f59111d.png",
    alt: "Стикерпак — слайд 2",
    title: "Внимательность к деталям",
    text: "Каждая линия и каждая тень в этих стикерах — результат кропотливого ручного труда и моего дотошного внимания к деталям. Я прорабатываю текстуры и мимику так, чтобы персонажи выглядели живыми и осязаемыми.",
  },
  {
    src: "https://cdn.poehali.dev/projects/14864d04-7967-4329-83a1-be36c986c09f/bucket/8d3cfe16-9aeb-4402-9a1d-bc9de3c263d3.png",
    alt: "Стикерпак — слайд 3",
    title: "Только нужное",
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
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain"
              />
              {/* fade right */}
              <div className="absolute inset-y-0 right-0 hidden md:block" style={{ width: "60px", background: "linear-gradient(to right, transparent, #171717)" }} />
              {/* fade left */}
              <div className="absolute inset-y-0 left-0 hidden md:block" style={{ width: "60px", background: "linear-gradient(to left, transparent, #171717)" }} />
              {/* fade top */}
              <div className="absolute inset-x-0 top-0" style={{ height: "60px", background: "linear-gradient(to top, transparent, #171717)" }} />
              {/* fade bottom */}
              <div className="absolute inset-x-0 bottom-0" style={{ height: "60px", background: "linear-gradient(to bottom, transparent, #171717)" }} />
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center px-8 md:px-16">
              <div className="max-w-md">
                <div className="w-10 h-px bg-[#1A9494] mb-6" />
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-4 text-center md:text-left">
                  {slide.title}
                </h2>
                <p className="text-neutral-400 text-base md:text-lg leading-loose tracking-wide text-center md:text-left">
                  {slide.text}
                </p>
              </div>
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