import image1 from "../../assets/images/nochange.png"
import image2 from "../../assets/images/stagnant.png"
import image3 from "../../assets/images/random.png"
import { ProblemCard } from "./ProblemCard"
import { motion } from "framer-motion"


export const UserProblem = () => {
    type problemCardsData = {
        title: string
        description: string
        image: string
    }

    const problemCards: problemCardsData[] = [
        { title: "No Visible Change", description: "You've been training for months — but the mirror barely reflects the effort.", image: image1, },
        { title: "Stagnant Strength", description: "Your lifts plateau. The numbers don’t move. Motivation starts to fade.", image: image2, },
        { title: "Random Programming", description: "Workouts feel intense… but disconnected. No long-term progression. No clear direction.", image: image3, },
    ]

    return (
        <section className='relative py-16 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#0B0F0E] 
  bg-[radial-gradient(circle_at_70%_30%,rgba(34,229,138,0.08)_0%,rgba(34,229,138,0.04)_25%,rgba(11,15,14,0.95)_60%,#0B0F0E_100%)]'>

            <header className='space-y-4 sm:text-center text-start font-heading sm:flex flex-col items-center'>
                <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm italic">
                    The Uncomfortable Truth
                </span>
                <h2 className='text-2xl sm:text-4xl uppercase font-bold max-w-3xl'>You’re Not Stuck. You're Just<span className="font-black text-primary/90"> Unstructured. </span></h2>
                <span className='text-text-secondary font-body max-w-lg sm:w-full mx-auto sm:mx-0'>
                    You train hard. You show up consistently.
                    But your body has nothing structured to respond to.
                </span>
            </header>

            <div className="flex sm:justify-center ml-3 sm:ml-0">
                <div className='relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-fit'>
                    {
                        problemCards.map((art, i) => (
                            <ProblemCard key={i} index={i} {...art} />
                        ))
                    }
                </div>
            </div>

            <p className="sm:text-center mt-12 font-body text-xl text-text-primary">
                "Effort without <span className="text-primary font-bold">structure </span>always leads to plateaus."
            </p>

        </section>
    )
}
