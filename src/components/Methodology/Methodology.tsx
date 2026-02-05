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
        { title: "ASSESSMENT", description: "We analyze your level, posture, and limits before training begins.", isCore: false,  icon: Scan},
        { title: "PROGRAMMING", description: "Your workouts follow a structured progression, not random routines", isCore: true , icon: CheckList},
        { title: "PROGRESSION", description: "Loads, volume, and intensity evolve based on real performance data.", isCore: false, icon: Up}
    ]

    return (
        <section className='min-h-[680px] px-6 md:px-12 py-12 relative overflow-hidden'>
            <div className='space-y-4 text-center sm:text-end flex flex-col items-center sm:items-end'>
                <h2 className="font-bold text-text-primary text-4xl font-heading uppercase">A System Built for <span className="font-black text-primary/90">Progress.</span></h2>
                <p className='max-w-md sm:w-full font-body text-text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolor soluta! Architecto</p>
            </div>
            <img className="hidden sm:block absolute top-0 left-0 -z-3 opacity-40 object-cover w-full h-full object-top" src={bg} alt="bg-gym" />
            <img className="sm:hidden block absolute top-0 left-0 -z-3 opacity-40 object-cover w-full h-full" src={bg2} alt="bg-gym" />

            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-24 justify-items-center sm:justify-items-start'>
                {
                    steps.map((step, index) => (

                        <CardMethology className={index === 2 ? "sm:translate-x-[55%] md:translate-x-0" : ""} numberStep={index + 1} title={step.title} description={step.description} isCore={step.isCore} icon={step.icon}></CardMethology>

                    ))
                }

            </div>
        </section>
    )
}
