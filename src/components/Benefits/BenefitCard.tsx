import React from 'react'

type BenefitCardProps = {
    title: string,
    description: string,
    icon: React.ElementType
    index: number
}

export const BenefitCard = ({ title, description, icon: IconComponent, index }: BenefitCardProps) => {
    return (
        <div className={`
                        h-full
                        w-full max-w-[340px]
                        p-7
                        space-y-4
                        bg-surface-elevated/70
                        relative
                        shadow-card
                        hover:border-primary/40
                        hover:bg-surface-elevated/90
                        transition-all duration-300
                        before:absolute before:inset-0 before:rounded-xl
                        before:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),transparent_60%)]
                        before:pointer-events-none
                        hover:shadow-card-hover
                        hover:-translate-y-1
                        rounded-xl
                    `}
        >
            <div className="space-y-4 items-stretch">

                <div className="flex justify-start">
                    <div className="flex justify-center items-center w-18 h-18 sm:w-22 sm:h-22 bg-surface-elevated/50 shadow-card [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] border border-white/5 shadow-card">
                        <IconComponent className="h-10 sm:h-14 text-primary -rotate-15"></IconComponent>
                    </div>
                </div>
                <span className="text-primary text-xs font-bold tracking-[0.2em]">BENEFIT 0{index}</span>
                <h3 className="font-heading uppercase text-lg sm:text-xl text-text-primary">
                    <span>
                        {title}
                    </span>
                </h3>
                <div className="h-px bg-primary/25 w-12" />
                <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}
