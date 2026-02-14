import image1 from "../../assets2/writingProgress.png"
import image2 from "../../assets2/smartwatch.png"
import image3 from "../../assets2/adjustingWeight.jpg"
import { ProblemCard } from "./ProblemCard"
import { motion } from "framer-motion"

export const UserProblem = () => {
    type problemCardsData = {
        title: string
        description: string
        image: string
    }

    const problemCards: problemCardsData[] = [
        { title: "Clear Progression", description: "You train hard. But you’re not building toward anything measurable.", image: image1, },
        { title: "Performance Tracking", description: "If you don’t measure volume, intensity, and recovery… progress becomes guesswork.", image: image2, },
        { title: "Adaptive Strategy", description: "Your body adapts. Your program doesn’t.", image: image3, },
    ]

    return (
        <section className='relative py-16 lg:py-32 overflow-hidden'>

            <header className='space-y-4 text-center sm:text-start px-6 md:px-12 lg:px-20 font-heading'>
                <p className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm italic">
                    The Uncomfortable Truth
                </p>
                <h2 className='text-2xl sm:text-4xl uppercase font-bold max-w-3xl'>You’re Not Stuck. You’re Just<span className="font-black text-primary/90"> Unstructured. </span></h2>
                <p className='text-text-secondary font-body max-w-lg sm:w-full mx-auto sm:mx-0'>
                    You don’t lack effort. You lack a progression system.
                </p>
            </header>

            <div className='relative z-10 grid sm:grid-cols-2 md:grid-cols-3 sm:gap-2 mt-8 sm:mt-12'>
                {
                    problemCards.map((art, i) => (
                        <ProblemCard key={i} {...art} />
                    ))
                }
            </div>

            <p className="text-center mt-12 font-body px-6 text-text-primary">
                "Effort without <span className="text-primary font-bold">structure </span>always leads to plateaus."
            </p>

        </section>
    )
}
