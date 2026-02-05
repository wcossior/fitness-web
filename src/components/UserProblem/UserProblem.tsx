import bg from "../../assets/gymdumbell.jpg"
import woman from "../../assets/woman.png"
import { Eye } from "./icons/Eye"
import { Random } from "./icons/Random"
import { Discouraged } from "./icons/Discouraged"
import { ProblemCard } from "./ProblemCard"
import { motion } from "framer-motion"

export const UserProblem = () => {
    type problemCardsData = {
        side: "top" | "bottom"
        title: string
        description: string
        icon: React.ElementType
    }

    const problemCards: problemCardsData[] = [
        { side: "top", title: "structure", description: "Random workouts, random results. No clear plan, no direction.", icon: Random },
        { side: "bottom", title: "consistency", description: "Motivation fades fast when progress isn’t visible.", icon: Discouraged },
        { side: "top", title: "accountability", description: "When no one is tracking your progress, it’s easy to quit.", icon: Eye }
    ]

    return (
        <section className='relative min-h-[680px] px-6 md:px-12 py-12 overflow-hidden'>
            <img className="absolute m-0 p-0 top-0 left-0 -z-3 opacity-10 object-cover w-full h-full" src={bg} alt="bg-user-problem" />
            <img className="absolute hidden lg:block left-1/2 -top-90 -z-2 h-[1300px] object-cover pointer-events-none opacity-75 " src={woman} alt="woman-user-problem" />
            <div className="absolute bottom-0 left-0 w-full h-100 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />

            <motion.header
                className='space-y-4 text-center sm:text-start'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className="text-primary font-medium tracking-widest uppercase text-sm">
                    The Uncomfortable Truth
                </p>
                <h2 className='text-3xl sm:text-4xl font-heading uppercase font-bold'>Training <span className="font-black text-primary/90">Isn’t</span> the Problem.</h2>
                <p className='text-text-secondary font-body max-w-sm sm:w-full mx-auto sm:mx-0'>
                    You’ve tried working out before. The real issue is everything
                    that comes after.
                </p>
            </motion.header>
            <motion.div
                className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 place-items-center lg:place-items-start w-full lg:w-[42rem]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
            >
                {
                    problemCards.map((art, i) => (
                        <div className="flex">
                            <ProblemCard title={art.title} description={art.description} index={i + 1} side={art.side} icon={art.icon} />
                        </div>
                    ))
                }
            </motion.div>

            <div className="flex justify-center lg:justify-end mt-12 font-body">
                <p className="text-text-secondary lg:text-xl max-w-2xl text-center lg:text-end">
                    "Sound familiar? It’s not your fault. Commercial fitness taught you how to sweat, but not how to  <span className="text-primary font-bold uppercase">progress</span>."
                </p>
            </div>
        </section>
    )
}
