import React from 'react'
import { motion, type Variants } from "framer-motion"

type cardMethologyProps = {
    numberStep: number,
    title: string,
    description: string,
    isCore?: boolean
    icon: React.ElementType
    className?: string
}

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(4px)"
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.35,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] // easeOutExpo feeling
        }
    })
}

export const CardMethology = ({ numberStep, title, description, isCore, icon: IconComponent, className }: cardMethologyProps) => {


    return (

        <motion.div
            custom={numberStep}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className={`
                        ${className}
                        w-full max-w-[340px]
                        h-full
                        p-7
                        space-y-4
                        bg-surface-elevated/70
                        relative
                        shadow-card
                        ${isCore ? "lg:scale-110 " : ""}
                        hover:border-primary/40
                        hover:bg-surface-elevated/90
                        transition-all duration-300
                        rounded-xl
                        flex
                        lg:[clip-path:polygon(0%_0%,_calc(100%_-_2rem)_0%,_100%_50%,_calc(100%_-_2rem)_100%,_0%_100%,_2rem_50%)]
                        before:absolute before:inset-0 before:rounded-xl
                        before:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),transparent_60%)]
                        before:pointer-events-none
                        hover:shadow-card-hover
                        hover:-translate-y-1
                    `}>
            <div className='space-y-4 lg:ml-7'>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                        0{numberStep}
                    </div>
                    <span className="text-[10px] tracking-[0.25em] text-text-muted">STEP</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl uppercase text-text-primary">{title}</h3>
                <div className="h-px bg-primary/25 w-12" />
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {description}
                </p>
            </div>
            <div className='flex items-center ml-2'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: numberStep * 0.65 + 0.2, duration: 0.7 }}
                    className="flex items-center justify-center w-13 h-13 rounded-lg bg-primary/10 border border-primary/20">
                    <IconComponent className="w-7 h-7 text-primary" />
                </motion.div>
            </div>
        </motion.div>
    )
}
