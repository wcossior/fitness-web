import bg from "../../assets/gymdumbell.jpg"
import image1 from "../../assets/gymbackache2.webp"
import image2 from "../../assets/gymwoman2.png"
import image3 from "../../assets/womantired.jpg"
import { ProblemCard } from "./ProblemCard"
import { motion } from "framer-motion"

export const UserProblem = () => {
    type problemCardsData = {
        title: string
        description: string
        position: "left" | "right",
        image: string
    }

    const problemCards: problemCardsData[] = [
        { title: "structure", description: "Random workouts, random results. No clear plan, no direction.", image: image1, position: "right" },
        { title: "consistency", description: "Motivation fades fast when progress isn’t visible.", image: image2, position: "left" },
        { title: "accountability", description: "When no one is tracking your progress, it’s easy to quit.", image: image3, position: "right" },
    ]

    return (
        <section className='relative py-12 overflow-hidden'>
            <img className="absolute m-0 p-0 top-0 left-0 -z-3 opacity-10 object-cover w-full h-full" src={bg} alt="bg-user-problem" />
          
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
