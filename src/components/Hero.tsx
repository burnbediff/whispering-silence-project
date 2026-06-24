import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://i.ibb.co/Hfq5W0wb/mountain-landscape-jpg.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight mb-6 text-[#126f6f] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Стикеры и эмодзи
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Превращаем ваши фото в уникальные стикеры и эмодзи с характером, прорабатывая каждую деталь.
        </p>
      </div>
    </div>
  );
}