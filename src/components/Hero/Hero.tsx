import { motion } from "framer-motion"
import { Content } from "./Content"
import { VideoBgHero } from "./VideoBgHero"
import heroBg from "../../assets/gym2.mp4"
import { Navbar } from "../Navbar/Navbar"

export const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <Navbar></Navbar>
            <VideoBgHero srcFile={heroBg}></VideoBgHero>
            {/* animation opacity bg */}
            <motion.div
                className="absolute inset-0 -z-5 pointer-events-none bg-black"
                animate={{ opacity: [0.45, 0.65, 0.45] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="min-h-screen px-6 md:px-20 flex items-center">
                <Content
                    eyebrow="Professional Fitness Coaching"
                    headline={"Build.\nPower.\nDiscipline."}
                    suportText="A structured fitness system built on discipline, progression, and measurable results."
                ></Content>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-40 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-6" />
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
            >
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </motion.div>
        </section>

    )
}
