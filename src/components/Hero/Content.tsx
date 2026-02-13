import { motion } from "framer-motion"
import { Button } from "../Buttons/NormalButton"
import { BorderButton } from "../Buttons/BorderButton"

type contentProps = {
    eyebrow:string,
    headline:string,
    suportText:string,
}

export const Content = ({eyebrow,headline,suportText}:contentProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-3 flex flex-col justify-center h-full"
        >
            <span className="inline-block text-base uppercase tracking-widest text-primary/80 font-body">
                {eyebrow}
            </span>
            <h1 className="uppercase text-[9.4vw] sm:text-5xl lg:text-6xl leading-tight md:tracking-wide text-text-primary font-heading drop-shadow-[0_0_16px_rgba(34,229,138,0.35)] max-w-xl lg:max-w-3xl">
                {headline}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-body max-w-xl relative z-20">
                {suportText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 font-body relative z-20">
                <Button title="Start Your Transformation" icon className="text-sm lg:text-lg" />
                <Button title="Explore the Method" className="text-sm lg:text-lg" variant="ghost"></Button>
            </div>
        </motion.div>
    )
}
