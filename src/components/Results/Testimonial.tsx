import React from 'react'
import { PhotoTestimonial } from './PhotoTestimonial'
import { InfoTestimonial } from './InfoTestimonial'

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
                    <PhotoTestimonial photo={photoBefore} color='from-text-primary/15'></PhotoTestimonial>
                </div>

                <div className="col-span-1 place-content-end justify-items-center">
                    <p className="font-body text-primary/30 text-[200px]">"</p>
                </div>

                <div className="col-span-3">
                   <PhotoTestimonial photo={photoAfter} color='from-primary/40'></PhotoTestimonial>
                </div>

                <InfoTestimonial {...{ name, quote, duration, metrics }} className='col-span-7 space-y-6 flex flex-col items-center text-center font-body' ></InfoTestimonial>
            </div>

            <div className="lg:hidden space-y-4 flex flex-col">
                <div className="flex justify-between items-center">
                    <p className="font-body text-primary/30 text-9xl sm:text-[200px]">"</p>
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

                <InfoTestimonial className='font-body space-y-4' {...{ name, quote, duration, metrics }}></InfoTestimonial>
            </div>
        </>
    )
}
