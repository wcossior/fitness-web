import { motion } from "framer-motion"
import { Button } from "../Buttons/Button"


export const FinalCTA = () => {
    const scrollToPlans = () => {
        const element = document.getElementById('plans-section');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section className="py-16 lg:py-32 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="relative z-10 max-w-4xl mx-auto">

                <motion.span
                    initial={{ opacity: 0, letterSpacing: "0.1em" }}
                    whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-primary font-medium uppercase text-xs font-heading block"
                >
                    Final Protocol
                </motion.span>


                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 mb-6 text-4xl sm:text-5xl md:text-7xl font-heading font-black uppercase italic leading-none"
                >
                    Build a Physique That <br />
                    <span className="text-primary">Commands Respect.</span>
                </motion.h2>


                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mb-10 text-text-secondary font-body max-w-xl mx-auto sm:text-lg"
                >
                    The difference between a plateau and a breakthrough is structure. Your new starting point is one click away.
                </motion.p>


                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button
                        title="View Plans"
                        className="bg-primary text-black px-10 py-4 font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(34,229,138,0.4)] transition-all"
                        onClick={scrollToPlans}
                    />
                    <Button
                        title="Contact via WhatsApp"
                        variant="ghost"
                        className="border border-white/20 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
                        onClick={() => window.open('https://wa.me/tunumero', '_blank')}
                    />
                </motion.div>
            </div>
        </section>
    )
}