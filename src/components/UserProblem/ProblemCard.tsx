import { motion, type Variants } from "framer-motion"
import { Badge } from "./Badge"
import { TimeLine } from "./TimeLine"
import { Info } from "./Info"

type articleProps = {
    title: string,
    description: string,
    image: string,
    className?: string
}

export const ProblemCard = ({ title, description, image, className }: articleProps) => {
    return (
        <>
            <div className={`${className} space-y-4 group`}>
                <div className="overflow-hidden">
                    <img
                        className="saturate-[0.5] contrast-125 brightness-90 hue-rotate-[5deg] h-70 w-300 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="p-6 lg:p-10">
                    <h3 className={`font-heading uppercase tracking-widest text-sm sm:text-base text-text-primary mb-2`}>
                        <span className="text-primary">No </span>
                        <span className="text-text-primary">{title}</span>
                    </h3>
                    <p className="font-body font-light text-sm sm:text-base text-text-primary leading-tight">
                        "{description}"
                    </p>
                </div>
            </div>
        </>

    )
}
