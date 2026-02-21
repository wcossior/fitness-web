import { motion } from "framer-motion"
import { Content } from "./Content"
import heroBg from "../../assets2/hero2.png"
import { Scrollindicator } from "./Scrollindicator"
import { Graph } from "./icons/Graph"

export const Hero = () => {
    return (
        <section className="relative lg:min-h-[768px] overflow-hidden px-6 md:px-12 lg:px-20 py-32 pb-16 lg:py-32">

            <Graph className="absolute inset-0 h-100 w-100 -z-10"></Graph>

            <div className="absolute top-0 left-0 w-full h-20 
                bg-gradient-to-b from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent 
                pointer-events-none -z-9"
            />

            <div className="absolute top-0 right-0 w-30 h-full 
                bg-gradient-to-l from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent 
                pointer-events-none -z-9"
            />

            <div
                className="absolute -z-8 -top-[5%] -right-[45%] w-[100%] h-[100%] rounded-full opacity-40 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #22E58A 0%, transparent 70%)',
                    filter: 'blur(80px)'
                }}
            />

            <div className="absolute inset-0 pointer-events-none -z-8
            bg-[radial-gradient(ellipse_70%_50%_at_38%_42%,_var(--color-body-bg)_0%,_var(--color-body-bg)_25%,_transparent_70%)]"
            />


            <div className="hidden md:block absolute h-full top-15 md:-right-30 lg:-right-40 -z-6">
                <img className="lg:h-[930px] md:h-[630px] object-cover" src={heroBg} alt="elite-img" />
            </div>


            <div className="absolute bottom-0 left-0 w-full h-80 
                bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent 
                pointer-events-none -z-5"
            />

            <div
                className="absolute -z-4 -bottom-[32%] -left-[20%] w-[60%] h-[60%] rounded-full opacity-15 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #E6F1EC 0%, transparent 70%)',
                    filter: 'blur(100px)'
                }}
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
