import React from 'react'
import arrow from "../../assets/flecha.svg"

type cardMethologyProps = {
    numberStep: number,
    title: string,
    description: string,
    isCore?: boolean
}

export const CardMethology = ({ numberStep, title, description, isCore }: cardMethologyProps) => {
    return (
        <div className='relative flex items-center'>
            <div className={`
                        w-full max-w-[340px]
                        p-7
                        space-y-4
                        bg-surface-elevated/70
                        border border-border-subtle
                        relative
                        shadow-card
                        ${isCore ? "md:scale-112 md:border-primary/30" : ""}
                        hover:border-primary/40
                        hover:bg-surface-elevated/90
                        transition-all duration-300
                        rounded-xl
                        ${numberStep === 3 ? "sm:translate-x-[55%] md:translate-x-0" : ""}
                    `}>
                <span className="text-primary text-xs font-bold tracking-[0.2em]">STEP 0{numberStep}</span>
                <h3 className="font-heading text-xl uppercase text-text-primary">{title}</h3>
                <div className="h-px bg-primary/25 w-12" />
                <p className="text-text-secondary text-sm leading-relaxed">
                    {description}
                </p>
            </div>
            {numberStep !== 3 &&
                < img className={`hidden lg:block absolute opacity-40 h-24 ${numberStep===2?"-right-[22%]":"-right-[16%]"} z-10`} src={arrow} alt="" />
            }
        </div>
    )
}
