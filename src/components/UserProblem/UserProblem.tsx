import bg from "../../assets/gymdumbell.jpg"
import woman from "../../assets/woman.png"
import { Eye } from "./icons/Eye"
import { Random } from "./icons/Random"
import { Discouraged } from "./icons/Discouraged"
import { ProblemCard } from "./ProblemCard"
import { motion } from "framer-motion"

export const UserProblem = () => {
    type problemCardsData = {
        title: string
        description: string
        icon: React.ElementType,
        position: "left" | "right"
    }

    const problemCards: problemCardsData[] = [
        { title: "structure", description: "Random workouts, random results. No clear plan, no direction.", icon: Random, position: "right" },
        { title: "consistency", description: "Motivation fades fast when progress isn’t visible.", icon: Discouraged, position: "left" },
        { title: "accountability", description: "When no one is tracking your progress, it’s easy to quit.", icon: Eye, position: "right" },
    ]

    return (
        <section className='relative py-12 overflow-hidden'>
            <img className="absolute m-0 p-0 top-0 left-0 -z-3 opacity-10 object-cover w-full h-full" src={bg} alt="bg-user-problem" />
            {/* <img className="absolute hidden lg:block left-1/2 -top-70 -z-2 h-[1300px] object-cover pointer-events-none opacity-75 " src={woman} alt="woman-user-problem" /> */}
            {/* <div className="
    absolute
    left-1/2
    top-[20%]
    -translate-x-1/7
    w-[1300px]
    h-[1300px]
    bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)]
    opacity-30
    blur-3xl
    -z-3
  " /> */}
            <div className="absolute bottom-0 left-0 w-full h-100 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />

            <header className='space-y-4 text-center sm:text-start px-6 md:px-12'>
                <p className="text-primary font-medium tracking-widest uppercase text-sm italic">
                    The Uncomfortable Truth
                </p>
                <h2 className='text-3xl sm:text-4xl font-heading uppercase font-bold'>Training <span className="font-black text-primary/90">Isn’t</span> the Problem.</h2>
                <p className='text-text-secondary font-body max-w-sm sm:w-full mx-auto sm:mx-0'>
                    You’ve tried working out before. The real issue is everything
                    that comes after.
                </p>
            </header>


            <div className="px-6 md:px-12">
                <div className='relative z-10 mt-12 flex flex-col gap-8 md:gap-0 md:grid place-items-center'>
                    {
                        problemCards.map((art, i) => (
                            <ProblemCard key={i} {...art} index={i + 1} />
                        ))
                    }
                </div>
                <div className="flex justify-center lg:justify-start mt-12 font-body px-6 md:px-12">
                    <p className="text-text-secondary max-w-2xl text-center lg:text-start">
                        "Sound familiar? It’s not your fault. Commercial fitness taught you how to sweat, but not how to  <span className="text-primary font-bold uppercase">progress</span>."
                    </p>
                </div>
            </div>
        </section>
    )
}
