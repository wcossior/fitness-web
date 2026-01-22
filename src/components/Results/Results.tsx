import { motion, type Variants } from "framer-motion";
import { CardResult } from "./CardResult";

export const Results = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 72 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
  };

  const cards = [
    { value: 120, suffix: "+", label: "Hours Trained" },
    { value: 15, suffix: "%", label: "Body Fat Reduced" },
    { value: 50, suffix: "+", label: "Clients Transformed" },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-[#0E1412] to-surface px-6 md:px-12 py-12 flex flex-col items-center relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
        className="flex flex-col items-center"
      >
        <h2 className="font-heading uppercase text-center tracking-widest">
          <span className="text-4xl font-semibold">Results You Can</span>{" "}
          <span className="text-4xl font-black text-primary/90">Measure</span>
        </h2>
        <p className="max-w-2xl mt-4 text-center text-text-secondary font-body">
          Track your progress, see your gains, and measure your transformation with clear metrics.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <CardResult key={i} {...card} index={i} />//...card desempaqueta las propiedades asi value={120} suffix="+" label="Hours
        ))}
      </div>
    </section>
  );
};
