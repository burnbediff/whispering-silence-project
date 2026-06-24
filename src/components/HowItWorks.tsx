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
    <section id="about" className="bg-white px-6 py-20">
      <div className="max-w-xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-3">⚙️ Как это работает?</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10 leading-tight">Пошагово</h2>

        <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {STEPS.map((step, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="flex items-center gap-4">
                  <span className="text-xs font-mono text-neutral-400 w-6 shrink-0">{step.num}</span>
                  <span className="text-base font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {step.title}
                  </span>
                </span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="shrink-0 text-neutral-400 transition-transform duration-200"
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-neutral-600 leading-relaxed pl-10">
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
