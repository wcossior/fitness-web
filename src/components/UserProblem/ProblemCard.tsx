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
    side: "left" | "right",
    index: number,
}

export const ProblemCard = ({ title, description, side, index }: articleProps) => {

    const sideStyles =
        side === "right"
            ? "sm:translate-x-6"
            : "sm:translate-x-0"

    return (
        <motion.article className={`
            bg-surface-glass
            border border-border-subtle
            py-6 px-6
            backdrop-blur-md
            ${sideStyles}
            shadow-card
            hover:shadow-card-hover
            transition-all duration-300
            hover:-translate-y-1
            relative
            before:absolute before:left-0 before:top-0 before:h-full before:w-[3px]
            before:bg-primary-strong/90
            before:content-['']
            max-w-[400px]
            `}
            custom={side}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >
            <div
                className="absolute top-0 right-6 w-12 h-14 bg-primary/15 text-2xl font-body font-bold text-text-secondary flex items-center justify-center z-1"
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)"
                }}
            >
                0{index}
            </div>
            <h3 className="font-heading text-2xl tracking-wide uppercase text-text-primary block sm:inline">
                <span className="font-bold text-text-primary block sm:inline">No</span>{" "}
                <span className="font-black text-primary/90 block sm:inline">{title}</span>
            </h3>
            <div className="h-px w-full bg-primary/30 my-4" />
            <p className="font-body text-sm text-text-secondary mt-2 leading-relaxed">
                {description}
            </p>
        </motion.article>
    )
}
