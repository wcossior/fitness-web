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
        <div
            className={`
            group
            min-w-[310px]
            max-w-[400px]
            h-full
            py-12
            px-6 sm:px-8
            flex flex-col
            relative
            border
            transition-all duration-500 ease-out
            hover:-translate-y-1
            hover:bg-surface/90
            hover:border-primary/60
            hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

            ${highlight
                            ? "bg-surface/95 border-primary/60 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                            : "bg-surface/75 border-white/5 opacity-95"
                        }
        `}
        >
            <div className="font-heading font-bold relative">

                {highlight && (
                    <div className="absolute top-0 right-0 text-[10px] uppercase tracking-widest text-primary font-semibold italic">
                        Most Popular
                    </div>
                )}

                <p className="text-text-primary text-sm uppercase mb-5 tracking-widest">
                    {title}
                </p>

                <h3 className="font-heading uppercase text-4xl text-text-primary leading-none">
                    <span className="text-xl font-bold mr-2 relative -top-4">$</span>
                    {price}
                </h3>

                {highlight && (
                    <p className="text-xs font-body text-primary font-medium mt-3 italic">
                        Ideal for consistent transformation
                    </p>
                )}

                <p className="text-xs text-text-primary font-medium mt-3 mb-6">
                    per {duration}
                </p>

                <p className="font-body font-light text-sm mb-6 text-text-secondary">
                    {description}
                </p>
            </div>

            <div className="flex flex-col flex-grow text-text-muted">

                <div className="h-px bg-primary/30 w-12 mb-6" />

                <div className="space-y-3 mb-8">
                    {characteristics.map((charac, i) => (
                        <div key={i} className="flex items-start">
                            <Check className="text-primary h-5 mr-4 shrink-0" />
                            <p className="font-body text-sm leading-relaxed">
                                {charac}
                            </p>
                        </div>
                    ))}
                </div>

                <Button
                    className="mt-auto text-xs sm:text-sm"
                    icon={true}
                    title="Join now"
                />
            </div>
        </div>
    )
}
