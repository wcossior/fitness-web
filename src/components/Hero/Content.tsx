import { motion } from "framer-motion"
import { contentSection_containerVariants, contentSection_itemVariants } from "./FramerVariants";

type contentProps = {
    eyebrow: string,
    headline: React.ReactNode,
    suportText: string,
    className?: string,
}

export const Content = ({ eyebrow, headline, suportText, className }: contentProps) => {

    return (
        <motion.div
            variants={contentSection_containerVariants}
            initial="hidden"
            animate="visible"
            className={`space-y-3 flex flex-col items-center lg:items-start h-full ${className} text-center lg:text-start`}
        >
            <motion.span variants={contentSection_itemVariants} className="text-xs sm:text-sm uppercase tracking-widest text-primary/80 font-body">
                {eyebrow}
            </motion.span>

            <motion.h1 variants={contentSection_itemVariants} className="font-black uppercase text-[8vw] sm:text-5xl xl:text-6xl leading-tight tracking-wide text-text-primary font-heading sm:max-w-xl xl:max-w-3xl relative">
                {headline}
            </motion.h1>

            <motion.p variants={contentSection_itemVariants} className="text-sm sm:text-lg lg:text-xl text-text-secondary font-body max-w-xl relative z-20">
                {suportText}
            </motion.p>
        </motion.div>
    );
};
