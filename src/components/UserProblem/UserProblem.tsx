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
        <section className='relative py-16 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden  bg-[#0B0F0E] 
  bg-[radial-gradient(circle_at_70%_30%,rgba(34,229,138,0.08)_0%,rgba(34,229,138,0.04)_25%,rgba(11,15,14,0.95)_60%,#0B0F0E_100%)]'>

            <header className='space-y-4 text-center sm:text-start font-heading'>
                <p className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm italic">
                    The Uncomfortable Truth
                </p>
                <h2 className='text-2xl sm:text-4xl uppercase font-bold max-w-3xl'>You’re Not Stuck. You’re Just<span className="font-black text-primary/90"> Unstructured. </span></h2>
                <p className='text-text-secondary font-body max-w-lg sm:w-full mx-auto sm:mx-0'>
                    You don’t lack effort. You lack a progression system.
                </p>
            </header>

            <div className="flex justify-center">
                <div className='relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-20 w-fit'>
                    {
                        problemCards.map((art, i) => (
                            <ProblemCard key={i} index={i} {...art} />
                        ))
                    }
                </div>
            </div>

            <p className="text-center mt-12 font-body text-xl px-6 text-text-primary">
                "Effort without <span className="text-primary font-bold">structure </span>always leads to plateaus."
            </p>

        </section>
    )
}
