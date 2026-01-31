import bg from "../../assets/gymdumbell.jpg"
import woman from "../../assets/woman.png"
import { Article } from "./Article"
import { motion } from "framer-motion"

export const UserProblem = () => {

    const articles = [
        { position: "sm:translate-x-0", title: "structure", description: "Random workouts, random results. No clear plan, no direction." },
        { position: "sm:translate-x-6", title: "consistency", description: "Motivation fades fast when progress isn’t visible." },
        { position: "sm:translate-x-0", title: "accountability", description: "When no one is tracking your progress, it’s easy to quit." }
    ]

    return (
        <section className='relative md:px-12 py-12 overflow-hidden'>
            <img className="absolute m-0 p-0 top-0 left-0 -z-3 opacity-10 object-cover w-full h-full" src={bg} alt="bg-user-problem" />
            <img className="absolute hidden sm:block -right-1/5 md:-right-1/6 lg:right-0 top-0 lg:-top-1/3 bottom-0 -z-2 h-[800px] lg:h-[1000px] object-cover pointer-events-none opacity-90 " src={woman} alt="woman-user-problem" />
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
                    className='relative z-10 grid gap-8 mt-12 place-content-center sm:place-content-start'
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
                        articles.map((art, i) => (
                            <Article key={art.title} index={i} title={art.title} description={art.description} position={art.position}></Article>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}
