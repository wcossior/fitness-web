import React from 'react'

type cardMethologyProps = {
    numberStep: number,
    title: string,
    description: string,
    isCore?: boolean
    icon: React.ElementType
    className?: string
}

export const CardMethology = ({ numberStep, title, description, isCore, icon: IconComponent, className }: cardMethologyProps) => {
    return (

        <div className={`
            ${className}
                        w-full max-w-[340px]
                        p-7
                        space-y-4
                        bg-surface-elevated/70
                        relative
                        shadow-card
                        ${isCore ? "md:scale-110 " : ""}
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
                <h3 className="font-heading text-xl uppercase text-text-primary">{title}</h3>
                <div className="h-px bg-primary/25 w-12" />
                <p className="text-text-secondary text-sm leading-relaxed">
                    {description}
                </p>
            </div>
            <div className='flex items-center ml-2'>
                <div className="hidden lg:flex items-center justify-center w-13 h-13 rounded-lg bg-primary/10 border border-primary/20">
                    <IconComponent className="w-7 h-7 text-primary" />
                </div>
            </div>
        </div>
    )
}
