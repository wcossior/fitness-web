import React from 'react'
import { motion } from "framer-motion"
import { featureVariants } from './FramerVariants'

type featureCardProps = {
    title: string,
    description: string,
    icon: React.ElementType
    index: number
}

export const FeatureCard = ({ title, description, icon: IconComponent, index }: featureCardProps) => {
    return (
        <motion.div
            custom={index}
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`
            group
            w-full
            max-w-[380px]
            h-full
            py-10
            px-6 sm:px-8
            flex flex-col
            relative
            border
            bg-surface/75
            border-white/10
            transition-all duration-500 ease-out
            hover:-translate-y-1
            hover:bg-surface/90
            hover:border-primary/60
            hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        `}
        >
            <div className="flex flex-col flex-grow">

                <div className="mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-surface/90 border border-white/10">
                        <IconComponent className="h-8 text-primary" />
                    </div>
                </div>

                <h3 className="font-heading uppercase text-sm tracking-wide text-text-primary mb-4">
                    {title}
                </h3>

                <div className="h-px bg-primary/30 w-12 mb-6 group-hover:w-full transition-all duration-700" />

                <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {description}
                </p>

            </div>
        </motion.div>
    )
}
