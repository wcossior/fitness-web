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

export const CardMethology = ({ numberStep, title, description, icon: IconComponent, className, isCore }: cardMethologyProps) => {


    return (
        <div className={`lg:flex items-stretch ${className}`}>
            <div className='max-w-[340px]'>
                <div className='space-y-4 w-full'>
                    <div className="flex font-heading gap-3">
                        <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                            0{numberStep}
                        </div>
                        <span className="text-xs tracking-[0.25em] text-text-muted self-center">STEP</span>
                        <div className='ml-auto'>
                            <IconComponent className="w-7 h-7 text-primary/60 ml-auto" />
                        </div>
                    </div>
                    <h3
                        className={`font-heading uppercase text-text-primary 
                        ${isCore ? "text-sm sm:text-lg" : "text-xs sm:text-sm"}`}
                    >{title}</h3>
                    <div className={`h-px ${isCore ? 'w-28 bg-primary/50' : 'w-12 bg-primary/30'}`} />
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-body">
                        {description}
                    </p>
                </div>
            </div>
            {numberStep !== 3 &&
                <>
                    <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-6" />
                    <div className="hidden lg:block w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent ml-6" />
                </>
            }
        </div>
    )
}
