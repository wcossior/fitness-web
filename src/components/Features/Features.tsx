import { Adjustment } from "./icons/Adjustment"
import { Compass } from "./icons/Compass"
import { Energy } from "./icons/Energy"
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
        title: "Periodized Training Architecture",
        description: "Long-term strength and hypertrophy planning structured in performance-driven phases.",
        icon: Dumbell
    },
    {
        title: "Data-Driven Load Optimization",
        description: "Training variables adjusted through measurable performance indicators.",
        icon: Adjustment
    },
    {
        title: "Nutritional Performance Alignment",
        description: "Energy intake calibrated to match training demands and recovery cycles.",
        icon: Cutlery
    },
    {
        title: "Recovery & Fatigue Regulation",
        description: "Structured management of workload and recovery to prevent plateaus and burnout.",
        icon: Energy
    }
]


export const Features = () => {
    return (
        <section className='relative py-16 lg:py-32 px-6 md:px-12 lg:px-20'>
            <img className="absolute m-0 p-0 top-0 left-0 -z-3 opacity-20 object-cover w-full h-full" src={bg} alt="bg-user-problem" />
            <div className="absolute bottom-0 left-0 w-full h-100 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className="absolute top-0 left-0 w-full h-100 
                bg-gradient-to-b from-black to-transparent 
                pointer-events-none -z-1"
            />
            <header className="space-y-4 text-center flex flex-col items-center px-6 md:px-12">
                <h2 className="font-bold text-2xl sm:text-4xl font-heading uppercase max-w-xl">
                    Inside the <span className="font-black text-primary">System</span>
                </h2>
                <p className="font-body max-w-md text-text-secondary">
                    Engineered components designed to eliminate <span className="text-primary">guesswork</span> and maximize measurable progress.
                </p>
            </header>

            <div className="flex justify-center items-center mt-12 sm:mt-20 relative px-6 md:px-12">
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
