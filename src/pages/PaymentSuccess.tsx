import { useEffect, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const CHECK_PAYMENT_URL = "https://functions.poehali.dev/7167e88b-419f-4e71-b89c-3432add19f3c";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  const navigate = useNavigate();
  const [status, setStatus] = useState<"checking" | "paid" | "not_paid">("checking");

  useEffect(() => {
    const paymentId = localStorage.getItem("pendingPaymentId");
    if (!paymentId) {
      navigate("/", { replace: true });
      return;
    }

    fetch(`${CHECK_PAYMENT_URL}?payment_id=${paymentId}`)
      .then(r => r.json())
      .then(data => {
        if (data.paid === true || data.status === "succeeded") {
          localStorage.removeItem("pendingPaymentId");
          setStatus("paid");
        } else {
          navigate("/", { replace: true });
        }
      })
      .catch(() => navigate("/", { replace: true }));
  }, [navigate]);

  if (status === "checking") {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <Icon name="Loader2" size={32} className="text-neutral-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center px-6 text-center">
      <div className="flex flex-col items-center gap-6 max-w-md">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
          <Icon name="CheckCheck" size={40} className="text-neutral-900" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Оплата прошла!
        </h1>

        <p className="text-neutral-400 text-lg leading-relaxed">
          Спасибо за заказ. Мы уже получили твою заявку и&nbsp;скоро напишем тебе в&nbsp;Telegram или позвоним.
        </p>

        <div className="w-full border border-neutral-700 rounded-sm px-6 py-5 text-left flex flex-col gap-2">
          <p className="text-neutral-500 text-xs uppercase tracking-wide">Что дальше</p>
          <ul className="flex flex-col gap-3 mt-1">
            <li className="flex items-start gap-3">
              <span className="text-white font-bold text-sm shrink-0 mt-0.5">1.</span>
              <span className="text-neutral-300 text-sm">Мы свяжемся с тобой в течение нескольких часов</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white font-bold text-sm shrink-0 mt-0.5">2.</span>
              <span className="text-neutral-300 text-sm">Обсудим детали и приступим к&nbsp;работе</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white font-bold text-sm shrink-0 mt-0.5">3.</span>
              <span className="text-neutral-300 text-sm">Получишь готовые стикеры или эмодзи</span>
            </li>
          </ul>
        </div>

        {orderId && (
          <p className="text-neutral-600 text-xs">Номер заказа: {orderId}</p>
        )}

        <Link
          to="/"
          className="mt-2 text-white border border-neutral-700 px-8 py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
