import { Energy } from "./icons/Energy"
import { Compass } from "./icons/Compass"
import { Dumbell } from "./icons/Dumbell"
import { Cutlery } from "./icons/Cutlery"
import { FeatureCard } from "./FeatureCard"
import bg from "../../assets/dumbells5.jpg"

type FeatureData = {
    title: string,
    description: string,
    icon: React.ElementType
}

const features: FeatureData[] = [
    {
        title: "Structured Training Framework",
        description: "A progression-based program engineered to build measurable strength and muscle over time.",
        icon: Dumbell
    },
    {
        title: "Performance Tracking System",
        description: "Volume, intensity, and recovery metrics monitored to eliminate guesswork and ensure steady progress.",
        icon: Energy
    },
    {
        title: "Nutrition Alignment Strategy",
        description: "Calorie targets and macro guidance structured around your performance and body composition goals.",
        icon: Cutlery
    },
    {
        title: "Accountability & Adjustment Protocol",
        description: "Built-in review checkpoints and structured updates to keep progress consistent and optimized.",
        icon: Compass
    }
]


export const Features = () => {
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

            <div className="flex justify-center items-center mt-12 relative px-6 md:px-12">
                <div className="grid md:grid-cols-2 w-fit gap-8">
                    {
                        features.map((benefit, index) => (
                            <FeatureCard title={benefit.title} description={benefit.description} icon={benefit.icon} index={index + 1}></FeatureCard>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
