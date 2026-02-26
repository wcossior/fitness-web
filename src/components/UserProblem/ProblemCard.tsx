import { motion } from "framer-motion"
import { getProblemCardVariants } from "./VariantsFramer"

type articleProps = {
    title: string,
    description: string,
    image: string,
    className?: string
    index?: number
}

export const ProblemCard = ({ title, description, image, className, index = 0 }: articleProps) => {

    const cardVariants = getProblemCardVariants(index);

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount:0.5 }}
            className={`${className} group max-w-[350px] h-full flex flex-col border border-white/10`}
        >
            <div className="overflow-hidden h-60 relative">
                <div className="absolute z-1 bg-primary/85 right-0 top-0 h-14 w-14 flex justify-center items-center font-heading text-sm font-bold text-surface">
                    0{index + 1}
                </div>
                <img
                    className="saturate-[0.5] contrast-125 brightness-90 hue-rotate-[5deg] h-full w-full object-cover transform group-hover:scale-110 group-hover:saturate-100 transition-all duration-700"
                    src={image}
                    alt={title}
                />
                <span className="absolute font-heading text-5xl tracking-widest -left-25 top-25 -rotate-90 text-transparent [-webkit-text-stroke:1px_white] opacity-16">
                    Problem
                </span>
            </div>

            <div className="p-6 bg-surface flex-grow border-t border-white/5">
                <h3 className="font-heading uppercase tracking-widest text-xs sm:text-sm text-text-primary mb-4">
                    <span className="text-text-primary font-black">{title}</span>
                </h3>
                <div className="h-px w-12 bg-primary/30" />
                <p className="font-body font-light text-xs sm:text-sm text-text-primary leading-tight mt-6 italic opacity-80">
                    "{description}"
                </p>
            </div>
        </motion.div>
    )
}