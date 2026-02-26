
type infoTestimonialProps = {
    className: string;
    duration: string;
    name: string;
    metrics: string[];
    quote: string;

}

export const InfoTestimonial = ({ className, duration, name, metrics, quote }: infoTestimonialProps) => {
    return (
        <div className={className}>

            <p className="text-xs uppercase tracking-widest text-primary/60">
                {duration}
            </p>

            <h4 className="font-heading text-xl">
                {name}
            </h4>

            <div className="h-px w-12 bg-primary/30" />

            <div className="flex flex-wrap lg:justify-center gap-3">
                {metrics.map((metric, index) => (
                    <span
                        key={index}
                        className="text-xs px-3 py-1 border border-primary/20 bg-primary/5 uppercase tracking-wide"
                    >
                        {metric}
                    </span>
                ))}
            </div>

            <p className="font-body max-w-3xl text-text-secondary leading-relaxed italic">
                "{quote}"
            </p>

        </div>
    )
}
