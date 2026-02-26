import { Forbidden } from '../../assets/assetsComponents/Forbidden';
import { motion } from "framer-motion"
import { filterVariants } from './FramerVariants';

type requirementCardProps = {
    title: string;
    description: string;
    index:number;
}


export const FilterCard = ({ title, description, index }: requirementCardProps) => {
    return (
        <motion.div
            custom={index}
            variants={filterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group p-4 sm:p-8 border border-white/10 bg-surface/30 hover:border-primary/60 transition-all duration-400"
        >
            <div className="flex items-start gap-4">
                <div className="mt-1 group-hover:scale-108 transition-transform duration-400">

                    <div className="sm:flex hidden items-center justify-center w-16 h-16 bg-surface/90 border border-white/10">
                        <Forbidden className="text-red-500/50 group-hover:text-red-500 w-8 h-8"></Forbidden>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="font-heading font-bold uppercase tracking-wide text-white flex items-center gap-2">
                        {title}
                    </h3>
                    <p className="text-text-secondary font-body text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
