import { Energy } from "./icons/Energy"
import { Compass } from "./icons/Compass"
import { Dumbell } from "./icons/Dumbell"
import { Cutlery } from "./icons/Cutlery"
import { BenefitCard } from "./BenefitCard"
import bg from "../../assets/dumbells5.jpg"

type BenefitData = {
    title: string,
    description: string,
    icon: React.ElementType
}

const benefits: BenefitData[] = [
    {
        title: "A Strong, Defined Body",
        description: "Build visible muscle and lose fat through a structured approach that actually works long-term.",
        icon: Dumbell
    },
    {
        title: "Clear Mind, High Energy",
        description: "Wake up focused, think sharper, and stop dragging through the day feeling drained.",
        icon: Energy
    },
    {
        title: "Food Without Guilt",
        description: "Understand how to eat for performance without extreme diets or losing control.",
        icon: Cutlery
    },
    {
        title: "Guidance at Every Step",
        description: "You’re supported, corrected, and guided so progress never stalls or derails.",
        icon: Compass
    }
]


export const Benefits = () => {
    return (
        <section className='relative min-h-[680px py-12'>
            <img className="absolute m-0 p-0 top-0 left-0 -z-3 opacity-40 object-cover w-full h-full" src={bg} alt="bg-user-problem" />
            <div className="absolute bottom-0 left-0 w-full h-100 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className="absolute top-0 left-0 w-full h-100 
                bg-gradient-to-b from-black to-transparent 
                pointer-events-none -z-1"
            />
            <header className='space-y-4 text-center flex flex-col items-center px-6 md:px-12'>
                <h2 className="font-bold text-3xl sm:text-4xl font-heading uppercase max-w-xl">A new level of <span className="font-black text-primary/90">authority</span> over your body and mind.</h2>
                <p className='font-body max-w-md text-text-secondary'>Your investment translates into tangible, life-changing results.</p>
            </header>

            <div className="hidden lg:flex justify-center items-center mt-12 relative">
                <div className="hidden md:grid md:grid-cols-2 w-fit gap-8 px-12">
                    {
                        benefits.map((benefit, index) => (
                            <BenefitCard title={benefit.title} description={benefit.description} icon={benefit.icon} index={index + 1}></BenefitCard>
                        ))
                    }
                </div>
            </div>

            <div className="lg:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar mt-12 scroll-px-6">
                <div className="flex gap-8 w-max items-stretch px-6 md:px-12 cursor-grab active:cursor-grabbing h-[310px]">
                    {
                        benefits.map((benefit, index) => (
                            <BenefitCard title={benefit.title} description={benefit.description} icon={benefit.icon} index={index + 1}></BenefitCard>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
