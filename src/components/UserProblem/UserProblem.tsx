import bg from "../../assets/gymdumbell.jpg"
import woman from "../../assets/woman.png"
import { ProblemCard } from "./ProblemCard"
import { motion } from "framer-motion"

export const UserProblem = () => {
    type problemCardsData = {
        side: "left" | "right"
        title: string
        description: string
    }

    const problemCards: problemCardsData[] = [
        { side: "left", title: "structure", description: "Random workouts, random results. No clear plan, no direction." },
        { side: "right", title: "consistency", description: "Motivation fades fast when progress isn’t visible." },
        { side: "left", title: "accountability", description: "When no one is tracking your progress, it’s easy to quit." }
    ]

    return (
        <section className='relative md:px-12 py-12 overflow-hidden'>
            <img className="absolute m-0 p-0 top-0 left-0 -z-3 opacity-10 object-cover w-full h-full" src={bg} alt="bg-user-problem" />
            <img className="absolute hidden lg:block left-1/3 -top-1/4 -z-2 h-[900px] object-cover pointer-events-none opacity-90 " src={woman} alt="woman-user-problem" />
            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className="mx-6">
                <motion.header
                    className='space-y-4 text-center sm:text-start'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className='text-4xl font-heading uppercase font-bold'>Training <span className="font-black text-primary/90">Isn’t</span> the Problem.</h2>
                    <p className='text-text-secondary font-body max-w-sm sm:w-full mx-auto sm:mx-0'>
                        You’ve tried working out before. The real issue is everything
                        that comes after.
                    </p>
                </motion.header>
                <motion.div
                    className='relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12 place-items-center'
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
                            <ProblemCard title={art.title} description={art.description} index={i+1} side={art.side} />
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}
