import { motion, type Variants } from "framer-motion"

type articleProps = {
    title: string,
    description: string,
    image: string,
    className?: string
    index?: number
}

export const ProblemCard = ({ title, description, image, className, index = 0 }: articleProps) => {

    const position = index % 2 === 0 ? "rotate-3" : "-rotate-3 ";

    return (
        <div className={`${className} group max-w-[350px] h-full flex flex-col ${position}`}>
            <div className="overflow-hidden h-60 relative">
                <div className="absolute z-1 bg-primary/85 right-0 top-0 h-14 w-14 flex justify-center items-center font-heading text-sm font-bold">0{index+1}</div>
                <img
                    className="saturate-[0.5] contrast-125 brightness-90 hue-rotate-[5deg] h-full w-full  object-cover transform group-hover:scale-105 transition-transform duration-500"
                    src={image}
                    alt={title}
                />
                <span className="absolute font-heading text-5xl tracking-widest -left-25 top-25 -rotate-90 text-transparent [-webkit-text-stroke:1px_white] opacity-16">Problem</span>
            </div>
            <div className="p-6 space-y-4 bg-text-primary/10 flex-grow">
                <h3 className={`font-heading uppercase tracking-widest text-xs sm:text-sm text-text-primary`}>
                    <span className="text-text-primary/65">No </span>
                    <span className="text-text-primary">{title}</span>
                </h3>
                <div className={`h-px w-12 bg-primary/30`} />
                <p className="font-body font-light text-xs sm:text-sm text-text-primary leading-tight">
                    "{description}"
                </p>
            </div>
        </div>
    )
}
