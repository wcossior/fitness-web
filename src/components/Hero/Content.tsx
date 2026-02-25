import { motion } from "framer-motion"

type contentProps = {
    eyebrow: string,
    headline: React.ReactNode,
    suportText: string,
    className?: string,
}

export const Content = ({ eyebrow, headline, suportText, className }: contentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`space-y-3 flex flex-col items-center lg:items-start h-full ${className} text-center lg:text-start`}
        >
            <span className="text-xs sm:text-sm uppercase tracking-widest text-primary/80 font-body">
                {eyebrow}
            </span>
            <h1 className="font-black uppercase text-[8vw] sm:text-5xl xl:text-6xl leading-tight tracking-wide text-text-primary font-heading sm:max-w-xl xl:max-w-3xl relative -z-7">
                {headline}
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-text-secondary font-body max-w-xl relative z-20">
                {suportText}
            </p>

        </motion.div>
    )
}
