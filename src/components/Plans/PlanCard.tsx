import { Button } from '../Buttons/NormalButton'
import { Check } from './icons/Check'

type PlanCardProps = {
    title: string,
    highlight: boolean,
    price: string,
    duration: string,
    description: string,
    characteristics: string[],
}


export const PlanCard = ({ title, price, duration, description, characteristics, highlight }: PlanCardProps) => {
    return (
        <div className={`
                        w-full max-w-[340px]
                        h-full
                        p-7
                        bg-surface-elevated/70
                        flex flex-col
                        relative
                        shadow-card
                        hover:bg-surface-elevated/90
                        transition-all duration-300
                        before:absolute before:inset-0 before:rounded-xl
                        before:bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.10),transparent_60%)]
                        before:pointer-events-none
                        hover:shadow-card-hover
                        hover:-translate-y-1
                        rounded-xl                                
                        overflow-hidden
                        ${highlight ? "lg:scale-105 lg:border-2 lg:border-primary" : ""}
                    `}
        >
            <div className="h-[150px] w-full"></div>

            <div className={`
                                        absolute -top-25 left-1/2 -translate-x-1/2
                                        flex flex-col justify-end items-center
                                        w-100 h-100 
                                        shadow-card 
                                        [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] shadow-card
                                        before:pointer-events-none
                                        bg-gradient-to-t from-subtle to-primary-strong
                                        font-black
                                        `}
            >
                <span className="relative -top-25 text-text-primary text-sm font-body uppercase mb-6">{title}</span>
                <h3 className="font-heading relative uppercase text-5xl text-text-primary -top-25">
                    <span className='text-3xl absolute font-bold -top-3 -left-6'>$</span>
                    <span>
                        {price}
                    </span>
                </h3>

                <p className="relative -top-25 font-body text-sm text-text-primary font-medium text-center mx-12 mb-12 mt-2">
                    per {duration}
                </p>
            </div>

            <div className='flex flex-col flex-grow'>
                <p className="font-body text-sm text-text-secondary text-center mb-4">
                    {description}
                </p>
                <div className="h-[2px] bg-primary/25 w-1/4 relative left-1/2 -translate-x-1/2" />
                <div className='space-y-3 mt-4 mb-8'>
                    {
                        characteristics.map((charac) => (
                            <div className="flex flex-row">
                                <Check className="text-primary h-5 mr-4"></Check>
                                <p className="font-body text-sm text-text-secondary">
                                    {charac}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <Button className="mt-auto" icon={true} title="Join now"></Button>
            </div>

        </div>
    )
}
