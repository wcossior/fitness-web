import bg from "../../assets/images/backWoman.webp"
import bg2 from "../../assets/images/manprogress.webp"
import { Goal } from "../../assets/assetsComponents/Goal"
import { Calendar } from "../../assets/assetsComponents/Calendar"
import { Cpu } from "../../assets/assetsComponents/Cpu"
import { Diamond } from "../../assets/assetsComponents/Diamond"
import { Energy } from "../../assets/assetsComponents/Energy"
import { CardMethology } from "./CardMethology"
import { motion} from "framer-motion"

export const Methodology = () => {

    type StepsData = {
        title: string,
        description: string,
        isCore: boolean
        icon: React.ElementType
    }

    const steps: StepsData[] = [
        {
            title: "SMART START PLACEMENT",
            description: "A structured onboarding process determines your precise starting point inside the system, whether you're building your foundation or refining advanced performance.",
            isCore: false,
            icon: Goal
        },
        {
            title: "PHASE-BASED LONG-TERM PROGRESSION",
            description: "Training evolves through structured performance blocks designed for sustainable, long-term strength and physique development.",
            isCore: false,
            icon: Calendar
        },
        {
            title: "SYSTEMIZED EXECUTION",
            description: "Every session follows predefined structure, performance targets, and progression logic.",
            isCore: false,
            icon: Cpu
        },
        {
            title: "AUTO-REGULATION PROTOCOL",
            description: "Built-in performance rules dictate when to push, maintain, or strategically deload to prevent plateaus.",
            isCore: false,
            icon: Energy
        },
        {
            title: "LIMITED 1:1 COACH ACCESS (COACHED PLAN)",
            description: "Coached clients receive ongoing 1:1 performance reviews, strategic adjustments, and direct accountability. Availability is limited.",
            isCore: true,
            icon: Diamond
        }
    ]
    return (
        <section id="methodology-section" className='lg:min-h-[780px] relative px-6 md:px-12 lg:px-20 py-16 lg:py-32'>
            <motion.header
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='space-y-4 flex flex-col'>
                <h2 className="font-black text-text-primary text-2xl sm:text-4xl xl:text-5xl font-heading uppercase max-w-4xl">The Structured Performance <span className="text-primary/90">System.</span></h2>
                <p className='max-w-lg sm:w-full font-body text-text-secondary sm:text-lg'>A <span className="text-primary/90">100% remote</span> training framework designed for measurable strength and physique development.</p>
            </motion.header>
            <img className="grayscale hidden sm:block absolute top-0 left-0 -z-3 opacity-20 object-cover w-full h-full object-top" src={bg} alt="bg-gym" />
            <img className="grayscale sm:hidden block absolute top-0 left-0 -z-3 opacity-20 object-cover w-full h-full object-[15%_center]" src={bg2} alt="bg-gym" />

            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className='flex flex-wrap lg:gap-8 gap-6 mt-12'>
                {
                    steps.map((step, index) => (
                        <CardMethology numberStep={index + 1} {...step}></CardMethology>
                    ))
                }
            </div>
        </section>
    )
}
