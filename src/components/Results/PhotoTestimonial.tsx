import React from 'react'

type photoTestimonialProps = {
    photo: string;
    color: string;
}

export const PhotoTestimonial = ({ photo, color }: photoTestimonialProps) => {
    return (
        <div className="relative overflow-hidden h-100 w-70 self-end">
            <div className={`absolute h-full w-full rotate-25 bg-gradient-to-b ${color} to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 top-0`}></div>
            <div className={`absolute h-full w-full rotate-25 bg-gradient-to-b ${color} to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 top-6 left-10`}></div>
            <div className={`absolute h-full w-full rotate-180 bg-gradient-to-b ${color} to-transparent [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] z-1 inset-0`}></div>
            <img className="relative flex-2 h-100 object-contain z-2" src={photo} alt="" />
            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-surface to-transparent 
                pointer-events-none z-10"
            />
        </div>
    )
}
