import bg from "../../assets/backman.jpg"
import bg2 from "../../assets/manlifting.jpg"
import { CardMethology } from "./CardMethology"
import { Scan } from "./icons/Scan"
import { CheckList } from "./icons/CheckList"
import { Up } from "./icons/Up"

export const Methodology = () => {

    type StepsData = {
        title: string,
        description: string,
        isCore: boolean
        icon: React.ElementType
    }

    const steps: StepsData[] = [
        {
            title: "ASSESSMENT",
            description: "We analyze your level, posture, and limits before training begins — so every decision is precise, not guesswork.",
            isCore: false,
            icon: Scan
        },
        {
            title: "PROGRAMMING",
            description: "Your workouts follow a structured progression designed to build visible strength and muscle over time.",
            isCore: true,
            icon: CheckList
        },
        {
            title: "PROGRESSION",
            description: "Loads, volume, and intensity evolve using performance data — keeping energy high and progress consistent.",
            isCore: false,
            icon: Up
        }
    ]

    return (
        <section className='lg:min-h-[680px] py-12 relative px-6 md:px-12 lg:px-20 py-16 lg:py-32'>
            <div className='space-y-4 text-center sm:text-end flex flex-col items-center sm:items-end'>
                <h2 className="font-bold text-text-primary text-2xl sm:text-4xl font-heading uppercase max-w-3xl">The Structured Performance <span className="font-black text-primary/90">System.</span></h2>
                <p className='max-w-md sm:w-full font-body text-text-secondary'>A structured methodology designed to eliminate guesswork and drive measurable progress.</p>
            </div>
            <img className="hidden sm:block absolute top-0 left-0 -z-3 opacity-20 object-cover w-full h-full object-top" src={bg} alt="bg-gym" />
            <img className="sm:hidden block absolute top-0 left-0 -z-3 opacity-20 object-cover w-full h-full" src={bg2} alt="bg-gym" />

            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className="flex justify-center h-full">
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-6 mt-8 sm:mt-12 w-fit'>
                    {
                        steps.map((step, index) => (
                            <CardMethology numberStep={index + 1} {...step}></CardMethology>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
