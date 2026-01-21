import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const Results = () => {

    const numbersRef = useRef<HTMLSpanElement[]>([]);

    const containerVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 72,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };


    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 32,
            scale: 0.96,
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const cards = [
        { value: 120, suffix: "+", label: "Hours Trained" },
        { value: 15, suffix: "%", label: "Body Fat Reduced" },
        { value: 50, suffix: "+", label: "Clients Transformed" },
    ];

    useGSAP(() => {
        numbersRef.current.forEach((el) => {
            const endValue = Number(el.dataset.value);

            gsap.fromTo(
                el,
                { innerText: 0 },
                {
                    innerText: endValue,
                    duration: 1.6,
                    ease: "power3.out",
                    snap: { innerText: 1 }, //elimina decimales
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        });
    }, []);


    return (

        <section className="bg-gradient-to-b from-black via-[#0E1412] to-surface px-6 md:px-20 py-8 md:py-20 flex flex-col items-center">
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
                    <motion.div
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                        className="flex flex-col items-center justify-center p-10 bg-white/5 backdrop-blur-sm  bg-white/5 border border-white/10 rounded-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] rounded-xl font-body">
                        <div className="flex items-end ">
                            <span ref={(el) => { if (el) numbersRef.current[i] = el; }} data-value={card.value} className="text-5xl font-bold tracking-tight">
                                0
                            </span>
                            <span className="text-3xl font-bold">{card.suffix}</span>
                        </div>
                        <span className="mt-3 text-xs uppercase tracking-widest text-text-secondary/80">
                            {card.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
