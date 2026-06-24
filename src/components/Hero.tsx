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
          src="https://cdn.poehali.dev/projects/14864d04-7967-4329-83a1-be36c986c09f/bucket/48485f41-d23d-4afa-8c8a-7c4cf48efbc8.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 text-[#126f6f] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] drop-shadow-[0_6px_20px_rgba(0,0,0,1)] drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]" style={{ fontFamily: "'Cormorant Garamond', serif", WebkitTextStroke: '0.3px rgba(0,0,0,0.6)' }}>
          Стикеры и эмодзи
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Превращаем ваши фото в уникальные стикеры и эмодзи с характером, прорабатывая каждую деталь.
        </p>
      </div>
    </div>
  );
}