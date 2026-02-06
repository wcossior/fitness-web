import { motion, type Variants } from "framer-motion"

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -120,
    },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.35,
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1] // easeOutExpo feeling
        }
    })
}

type articleProps = {
    title: string,
    description: string,
    index: number,
    side: "top" | "bottom",
    icon: React.ElementType
}

export const ProblemCard = ({ title, description, index, side, icon: IconComponent }: articleProps) => {
    const sideStyles =
        side === "bottom"
            ? "lg:translate-y-40"
            : ""

    return (
        <motion.div className={`
            relative
            w-full
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={index}
        >
            <div className="space-y-4 items-stretch">
                 <div className="flex justify-start">
                    <div className="flex justify-center items-center w-22 h-22 bg-surface-elevated/50 shadow-card [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] border border-white/5 shadow-card">
                        <IconComponent className="h-13 text-primary"></IconComponent>
                    </div>
                </div>
                <span className="text-primary text-xs font-bold tracking-[0.2em]">PROBLEM 0{index}</span>
                <h3 className="font-heading uppercase text-xl text-text-primary">
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
