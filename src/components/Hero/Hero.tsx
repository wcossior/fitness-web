import { motion } from "framer-motion"
import { Content } from "./Content"
import { VideoBgHero } from "./VideoBgHero"
import heroBg from "../../assets/gym2.mp4"
import { Scrollindicator } from "./Scrollindicator"

export const Hero = () => {
    return (
        <section className="relative md:h-min-screen overflow-hidden px-6 md:px-12 pt-24 pb-12">

            <VideoBgHero srcFile={heroBg}></VideoBgHero>

            {/* fade */}
            <div className="absolute bottom-0 left-0 w-full h-40 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-6"
            />

            {/* animation opacity bg */}
            <motion.div
                className="absolute inset-0 -z-5 pointer-events-none bg-black"
                animate={{ opacity: [0.45, 0.65, 0.45] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <Content
                eyebrow="Professional Fitness Coaching"
                headline={"Build.\nPower.\nDiscipline."}
                suportText="A structured fitness system built on discipline, progression, and measurable results."
            />

            <Scrollindicator />
        </section>

    )
}
