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
            title: "PERFORMANCE AUDIT",
            description: "We assess your current strength metrics, movement quality, and recovery capacity to establish precise starting points.",
            isCore: false,
            icon: Scan
        },
        {
            title: "STRUCTURED BLOCKS",
            description: "Training is organized into progressive 4-6 week phases with defined volume, intensity, and strength targets.",
            isCore: true,
            icon: CheckList
        },
        {
            title: "DATA-DRIVEN ADJUSTMENTS",
            description: "Performance is tracked weekly and training variables are adjusted to ensure consistent overload without burnout.",
            isCore: false,
            icon: Up
        }
    ]

    return (
        <section className='lg:min-h-[680px] relative px-6 md:px-12 lg:px-20 py-16 lg:py-32'>
            <header className='space-y-4 text-end flex flex-col items-center sm:items-end'>
                <h2 className="font-bold text-text-primary text-2xl sm:text-4xl font-heading uppercase max-w-3xl">The Structured Performance <span className="font-black text-primary/90">System.</span></h2>
                <p className='max-w-lg sm:w-full font-body text-text-secondary'>A <span className="text-primary/90">remote</span> training framework designed for measurable strength and physique development.</p>
            </header>
            <img className="hidden sm:block absolute top-0 left-0 -z-3 opacity-20 object-cover w-full h-full object-top" src={bg} alt="bg-gym" />
            <img className="sm:hidden block absolute top-0 left-0 -z-3 opacity-20 object-cover w-full h-full" src={bg2} alt="bg-gym" />

            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className="flex justify-end h-full">
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-6 mt-12 sm:mt-20 w-fit'>
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
