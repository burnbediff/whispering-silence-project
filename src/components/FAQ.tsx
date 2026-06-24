import { useState } from "react";
import Icon from "@/components/ui/icon";

const ITEMS = [
  {
    emoji: "📸",
    question: "Можно ли использовать для стикеров любое фото?",
    answer:
      "Да, подойдёт любой снимок. Главное условие — лицо должно быть чётко видно и хорошо освещено. Это гарантирует, что персонаж получится максимально похожим и узнаваемым.",
  },
  {
    emoji: "⏳",
    question: "Сколько времени ждать готовый результат?",
    answer:
      "Срок зависит от текущей загрузки. Обычно мы укладываемся в срок от нескольких часов до 1 суток. Точное время мы сообщим сразу после получения заявки.",
  },
  {
    emoji: "✏️",
    question: "Могу ли я повлиять на дизайн или добавить свои идеи?",
    answer:
      "Обязательно! Для этого в форме заявки есть специальное поле «Пожелания». Пишите всё, что придумаете: от цвета фона до конкретных аксессуаров для персонажа.",
  },
  {
    emoji: "💸",
    question: "Дополнительные правки и идеи — это платно?",
    answer:
      "Это зависит от сложности ваших пожеланий. Мы свяжемся с вами по контактам из заявки, обсудим детали, оценим объём работы и согласуем финальную стоимость, если она будет отличаться от базовой.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-neutral-50 px-6 py-20">
      <div className="max-w-xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-3">❓ Часто задаваемые вопросы</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10 leading-tight">FAQ</h2>

        <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
              >
                <span className="flex items-start gap-3">
                  <span className="text-xl leading-none mt-0.5">{item.emoji}</span>
                  <span className="text-base font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {i + 1}. {item.question}
                  </span>
                </span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="shrink-0 text-neutral-400 mt-0.5 transition-transform duration-200"
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm text-neutral-600 leading-relaxed pl-9">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
