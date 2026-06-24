import { useState } from "react";
import Icon from "@/components/ui/icon";

const STEPS = [
  {
    num: "01",
    title: "Оставляете заявку",
    text: "Заполняете короткую форму: прикрепляете фото, выбираете эмоции и указываете пожелания.",
  },
  {
    num: "02",
    title: "Согласовываем детали",
    text: "Я связываюсь с вами для уточнения нюансов (сроки, сложность, цветовая гамма), чтобы мы были на одной волне.",
  },
  {
    num: "03",
    title: "Я рисую",
    text: "Погружаюсь в процесс: от эскиза до финальной отрисовки каждого стикера с учётом всех оговорённых моментов.",
  },
  {
    num: "04",
    title: "Вы получаете готовый пак",
    text: "Отправляю вам готовые стикеры в нужном формате (для Telegram, WhatsApp или другого мессенджера). При необходимости вношу финальные правки.",
  },
];

export default function HowItWorks() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="about" className="bg-neutral-900 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-300 mb-3">⚙️ Как это работает?</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">Пошагово</h2>

        <div className="flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="border border-neutral-700 hover:border-neutral-500 transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left group"
              >
                <span className="flex items-center gap-4">
                  <span className="text-xs font-mono text-[#1A9494] shrink-0">{step.num}</span>
                  <span className="text-lg font-semibold text-white group-hover:text-neutral-300 transition-colors">
                    {step.title}
                  </span>
                </span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="shrink-0 text-neutral-500"
                />
              </button>
              {open === i && (
                <p className="px-6 pb-6 text-base text-neutral-300 leading-relaxed pl-16">
                  {step.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}