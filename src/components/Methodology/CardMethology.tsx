import React from 'react'

type cardMethologyProps = {
    numberStep: number,
    title: string,
    description: string,
    isCore?: boolean
}

export const CardMethology = ({ numberStep, title, description, isCore }: cardMethologyProps) => {
    return (
        <div className={`
                    w-full max-w-[340px]
                    p-7
                    space-y-4
                    bg-surface-elevated/70
                    border border-border-subtle
                    relative
                    shadow-card
                    ${isCore ? "md:scale-112 md:border-primary/30" : ""}
                `}>
            <span className="text-primary text-xs font-bold tracking-[0.2em]">STEP 0{numberStep}</span>
            <h3 className="font-heading text-xl uppercase text-text-primary">{title}</h3>
            <div className="h-px bg-primary/25 w-12" />
            <p className="text-text-secondary text-sm leading-relaxed">
                {description}
            </p>
        </div>
    )
}
