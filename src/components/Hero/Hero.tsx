import { motion } from "framer-motion"
import { Content } from "./Content"
import heroBg from "../../assets/images/couple.webp"
import { Button } from "../Buttons/Button"
import { Background } from "./Background"

export const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id="hero-section" className="relative lg:min-h-[768px] overflow-hidden px-6 md:px-12 lg:px-20 py-32 pb-16 lg:py-32">
            <Background></Background>
            <Content
                eyebrow="Online Performance Coaching for Intermediate Lifters"
                headline={<>Build a <span className="text-primary/90 text-glow">Physique</span> That Commands Respect.</>}
                suportText={"Personalized programming. Data-driven progression.Build visible muscle and real strength — with a system designed to evolve as you do."}
            />

            <div className="lg:hidden flex justify-center relative h-[220px] sm:h-[480px]">
                <motion.img
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="max-h-[430px] max-w-[430px] sm:max-h-[630px] sm:max-w-[630px] object-contain absolute -bottom-55 sm:-bottom-35 -z-6"
                    src={heroBg}
                    alt="hero-img"
                />
            </div>
            <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4 font-body relative z-1 sm:justify-center lg:justify-start sm:relative absolute -bottom-12 sm:bottom-0 -z-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <Button onClick={() => scrollToSection("plans-section")} title="Start training" icon className="text-sm lg:text-lg" />
                <Button onClick={() => scrollToSection("methodology-section")} title="Review Protocol" className="text-text-primary text-sm lg:text-lg" variant="ghost"></Button>
            </motion.div>
        </section>

    )
}
