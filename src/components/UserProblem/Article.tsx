import { motion, type Variants } from "framer-motion"

const cardVariants: Variants = {
    hidden: { opacity: 0, x: -120 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            delay: i * 0.2,
            ease: "easeOut"
        }
    })
}

type articleProps = {
    title: string,
    description: string,
    position: string,
    index: number,
}

export const Article = ({ title, description, position, index }: articleProps) => {
    return (
        <motion.article className={`
            bg-surface-glass
            border border-border-subtle
            py-6 px-6
            max-w-sm md:max-w-md
            backdrop-blur-md
            ${position}
            shadow-[0_10px_30px_rgba(0,0,0,0.4)]
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_var(--color-glow)]
            transition-all duration-300
            hover:-translate-y-1
            relative
            before:absolute before:left-0 before:top-0 before:h-full before:w-[3px]
            before:bg-primary-strong/90
            before:content-['']
            `}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
        >


            <div className="
                absolute top-0 right-6
                w-12
                h-14
                bg-primary/15
                text-2xl font-body font-bold text-text-secondary
                flex items-center justify-center
                "
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)"
                }}
            >
                0{index + 1}
            </div>
            <h3 className="font-heading text-2xl tracking-wide uppercase text-text-primary relative z-10">
                <span className="font-bold text-text-primary">No</span>{" "}
                <span className="font-black text-primary/90 mr-12 md:mr-0">{title}</span>
            </h3>
            <div className="h-px w-full bg-primary/30 my-4" />
            <p className="font-body text-sm text-text-secondary mt-2 leading-relaxed relative z-10 max-w-sm">
                {description}
            </p>
        </motion.article>
    )
}
