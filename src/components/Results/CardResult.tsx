import { motion, type Variants } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardResultProps {
  value: number;
  suffix: string;
  label: string;
  index: number; // para delay
}

export const CardResult = ({ value, suffix, label, index }: CardResultProps) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!numberRef.current) return;
    gsap.fromTo(
      numberRef.current,
      { innerText: 0 },
      {
        innerText: value,
        duration: 1.6,
        ease: "power3.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      className="flex flex-col items-center justify-center p-6 sm:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] font-body"
    >
      <div className="flex items-end">
        <span ref={numberRef} className="text-4xl sm:text-5xl font-bold tracking-tight">
          0
        </span>
        <span className="text-2xl sm:text-3xl font-bold">{suffix}</span>
      </div>
      <span className="mt-3 text-xs uppercase tracking-widest text-text-secondary/80">
        {label}
      </span>
    </motion.div>
  );
};
