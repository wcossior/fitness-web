import React from 'react'

type testimonnialProps = {
    photoBefore: string
    photoAfter: string
    name: string
    quote: string
    duration: string
    metrics: string[]
}

export const Testimonial = ({ photoBefore, photoAfter, name, quote, duration, metrics }: testimonnialProps) => {
    return (
        <>
            <div className="hidden lg:grid grid-cols-7">
                <div className="col-span-3 place-self-end">
                    <div className="relative overflow-hidden h-100 w-70 self-end">
                        <div className="absolute h-full w-full rotate-25 bg-gradient-to-b from-primary/25 to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 top-0"></div>
                        <div className="absolute h-full w-full rotate-25 bg-gradient-to-b from-primary/25 to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 top-6 left-10"></div>
                        <div className="absolute h-full w-full rotate-180 bg-gradient-to-b from-primary/25 to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 inset-0"></div>
                        <img className="relative flex-2 h-100 object-contain z-2" src={photoBefore} alt="" />
                        <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-surface to-transparent 
                pointer-events-none z-10"
                        />
                    </div>
                </div>

                <div className="col-span-1 place-content-end justify-items-center">
                    <p className="font-body opacity-40 text-[200px]">"</p>
                </div>

                <div className="col-span-3">
                    <div className="relative overflow-hidden h-100 w-70 self-end">
                        <div className="absolute h-full w-full rotate-25 bg-gradient-to-b from-primary/25 to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 top-0"></div>
                        <div className="absolute h-full w-full rotate-25 bg-gradient-to-b from-primary/25 to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 top-6 left-10"></div>
                        <div className="absolute h-full w-full rotate-180 bg-gradient-to-b from-primary/25 to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 inset-0"></div>
                        <img className="relative flex-2 h-100 object-contain z-2" src={photoAfter} alt="" />
                        <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-surface to-transparent 
                pointer-events-none z-10"
                        />
                    </div>
                </div>

                <div className="col-span-7 space-y-6 flex flex-col items-center text-center font-body">

                    <p className="text-xs uppercase tracking-widest text-primary/60">
                        {duration}
                    </p>

                    <h4 className="font-heading text-xl">
                        {name}
                    </h4>

                    <div className="h-px w-12 bg-primary/30" />

                    <div className="flex flex-wrap justify-center gap-3">
                        {metrics.map((metric, index) => (
                            <span
                                key={index}
                                className="text-xs px-3 py-1 border border-primary/20 bg-primary/5 uppercase tracking-wide"
                            >
                                {metric}
                            </span>
                        ))}
                    </div>

                    <p className="font-body max-w-3xl text-text-secondary leading-relaxed">
                        {quote}
                    </p>

                </div>
            </div>

            <div className="lg:hidden space-y-4 flex flex-col">
                <div className="flex justify-between items-center">
                    <p className="font-body opacity-40 text-9xl sm:text-[200px]">"</p>
                    <div className="w-28 h-28 sm:w-40 sm:h-40">
                        <div className="rounded-full overflow-hidden w-full h-full border border-primary/30">
                            <img
                                className="w-full h-full object-cover object-top"
                                src={photoAfter}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className='font-body space-y-4'>
                    <p className="text-xs uppercase tracking-widest text-primary/60">
                        {duration}
                    </p>
                    <h4 className="font-heading text-xl">
                        {name}
                    </h4>
                    <div className="h-px w-12 bg-primary/30" />
                    <div className="flex flex-wrap justify-start gap-3">
                        {metrics.map((metric, index) => (
                            <span
                                key={index}
                                className="text-xs px-3 py-1 border border-primary/20 bg-primary/5 uppercase tracking-wide"
                            >
                                {metric}
                            </span>
                        ))}
                    </div>
                    <p className="font-body max-w-3xl text-text-secondary leading-relaxed">
                        {quote}
                    </p>
                </div>
            </div>
        </>
    )
}
