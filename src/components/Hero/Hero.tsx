import { motion } from "framer-motion"
import { Content } from "./Content"
import { VideoBgHero } from "./VideoBgHero"
import heroBg from "../../assets2/hero2.png"

import { Triangles } from "./icons/Triangles"
import { Scrollindicator } from "./Scrollindicator"

export const Hero = () => {
    return (
        <section className="relative lg:min-h-[768px] overflow-hidden px-6 md:px-12 lg:px-20 py-32 pb-16 lg:py-32">

            <div className="absolute top-1/2 -translate-y-1/2 -right-1/4 lg:-right-1/4 -z-56 
                            bg-[radial-gradient(circle,_var(--color-primary-strong)_0%,_transparent_70%)] 
                            w-[100%] h-[100%] opacity-20 lg:opacity-30 pointer-events-none" />

            {/* <div className="absolute top-40 -right-115 -z-6 bg-[radial-gradient(circle,_var(--color-primary-strong)_0%,_transparent_45%)] w-full h-[140%]"></div> */}

            <div className="hidden md:block absolute h-full top-15 md:-right-30 lg:-right-40 z-1">
                <img className="lg:h-[930px] md:h-[630px] object-cover" src={heroBg} alt="" />
            </div>
            <div className="absolute h-full -right-[25rem] top-0 -z-2 rotate-25">
                <Triangles className="h-[900px] md:h-[1200px] text-primary/10" />
            </div>
           
            {/* <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-body-bg to-transparent 
                pointer-events-none -z-4"
            /> */}
            <div className="absolute bottom-0 left-0 w-full h-80 
                bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent 
                pointer-events-none z-2"
            />
            <Content
                eyebrow="Elite Body Transformation Coaching"
                headline={"Build a Physique That Commands Respect."}
                suportText={"Structured training. Progressive overload. Real performance metrics. No random workouts. No wasted effort."}
            />

            <Scrollindicator />
        </section>

    )
}
