import { motion, type Variants } from "framer-motion"

const cardVariants: Variants = {
    hidden: (side: "left" | "right") => ({
        opacity: 0,
        x: side === "left" ? -120 : 120,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
}

type articleProps = {
    title: string,
    description: string,
    index: number,
    side: "left" | "right",
    icon: React.ElementType
}

export const ProblemCard = ({ title, description, index, side, icon: IconComponent }: articleProps) => {
    const sideStyles =
        side === "right"
            ? "sm:place-self-end sm:translate-y-30"
            : "sm:place-self-start"

    return (
        <motion.div className={`
            relative
            max-w-[320px]
            h-full
            py-7 px-7
            ${sideStyles}
            bg-surface-glass
            border border-white/10
            backdrop-blur-lg

            shadow-card
            transition-all duration-400
            hover:border-primary/40
            rounded-xl

            overflow-hidden
        `}
            custom={side}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >
            <div className="space-y-4 items-stretch">
                <div className="flex justify-center">
                    <IconComponent className="h-12 md:h-16 text-primary" />
                </div>
                <span className="text-primary text-xs font-bold tracking-[0.2em]">PROBLEM 0{index}</span>
                <h3 className="font-heading uppercase text-xl md:text-2xl text-text-primary">
                    <span>No </span>
                    <span>
                        {title}
                    </span>
                </h3>
                <div className="h-px bg-primary/25 w-12" />
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {description}
                </p>
            </div>

        </motion.div>
    )
}
