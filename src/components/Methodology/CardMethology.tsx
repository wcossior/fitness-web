import React from 'react'

type cardMethologyProps = {
    numberStep: number,
    title: string,
    description: string,
    isCore?: boolean
    icon: React.ElementType
}

export const CardMethology = ({ numberStep, title, description, isCore, icon:IconComponent }: cardMethologyProps) => {
    return (

        <div className={`
                        w-full max-w-[340px]
                        p-7
                        space-y-4
                        bg-surface-elevated/70
                        relative
                        shadow-card
                        ${isCore ? "md:scale-112" : ""}
                        hover:border-primary/40
                        hover:bg-surface-elevated/90
                        transition-all duration-300
                        rounded-xl
                        ${numberStep === 3 ? "sm:translate-x-[55%] md:translate-x-0" : ""}
                        flex
                        lg:[clip-path:polygon(0%_0%,_calc(100%_-_2rem)_0%,_100%_50%,_calc(100%_-_2rem)_100%,_0%_100%,_2rem_50%)]
                    `}>
            <div className='space-y-4 lg:ml-7'>
                <span className="text-primary text-xs font-bold tracking-[0.2em]">STEP 0{numberStep}</span>
                <h3 className="font-heading text-xl uppercase text-text-primary">{title}</h3>
                <div className="h-px bg-primary/25 w-12" />
                <p className="text-text-secondary text-sm leading-relaxed">
                    {description}
                </p>
            </div>
            <div className='hidden lg:flex items-center lg:ml-4 lg:mr-7'>
                <IconComponent className="h-12 text-primary" />
            </div>
        </div>

    )
}
