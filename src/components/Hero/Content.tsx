import { motion } from "framer-motion"
import { NormalButton } from "../Buttons/NormalButton"
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
            className="max-w-4xl space-y-8"
        >
            <span className="inline-block text-sm uppercase tracking-widest text-primary/80 font-body">
                {eyebrow}
            </span>
            <h1 className="text-5xl uppercase md:text-7xl font-black leading-tight md:tracking-wide text-text-primary font-heading drop-shadow-[0_0_16px_rgba(34,229,138,0.35)] whitespace-pre-line">
                {headline}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-body">
                {suportText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 font-body">
                <NormalButton title="Start Training" icon={true}></NormalButton>
                <BorderButton title="View Method"></BorderButton>
            </div>
        </motion.div>
    )
}
