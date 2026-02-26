import { Live } from "../../assets/assetsComponents/Live"
import { Metrics } from "../../assets/assetsComponents/Metrics"
import { Dumbell } from "../../assets/assetsComponents/Dumbell"
import { Cutlery } from "../../assets/assetsComponents/Cutlery"
import { Adjustment } from "../../assets/assetsComponents/Adjustment"
import { FeatureCard } from "./FeatureCard"
import bg from "../../assets/images/dumbells2.jpg"
import { motion } from "framer-motion"

type FeatureData = {
    title: string,
    description: string,
    icon: React.ElementType
}


const features: FeatureData[] = [
    {
        title: "Structured Workout Library",
        description: "Complete library of guided exercises and phased programs to build strength and muscle efficiently.",
        icon: Dumbell
    },
    {
        title: "Nutrition & Meal Guides",
        description: "Comprehensive meal plans, macro templates, and recipe PDFs to fuel your performance.",
        icon: Cutlery
    },
    {
        title: "Progress Tracking Tools",
        description: "Interactive spreadsheets and app-based templates to log workouts, monitor metrics, and visualize gains.",
        icon: Metrics
    },
    {
        title: "Personalized Program Adjustments",
        description: "Weekly updates and program tweaks based on your performance and recovery, keeping progression optimal.",
        icon: Adjustment
    },
    {
        title: "Live Coaching & Technique Review",
        description: "1:1 video feedback, performance review, and direct guidance to ensure proper execution and results.",
        icon: Live
    }
];

export const Features = () => {
    return (
        <section className='relative py-16 lg:py-32 px-6 md:px-12 lg:px-20'>
            <img className="absolute m-0 p-0 top-0 left-0 -z-3 opacity-20 object-cover w-full h-full grayscale" src={bg} alt="bg-user-problem" />
            <div className="absolute bottom-0 left-0 w-full h-100 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className="absolute top-0 left-0 w-full h-100 
                bg-gradient-to-b from-black to-transparent 
                pointer-events-none -z-1"
            />
            <motion.header
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 text-center flex flex-col items-center">
                <h2 className="font-black text-2xl sm:text-4xl xl:text-5xl font-heading uppercase">
                    Inside the <span className="text-primary/90">System</span>
                </h2>
                <p className="font-body max-w-md text-text-secondary sm:text-lg">
                    Engineered components designed to eliminate <span className="text-primary">guesswork</span> and maximize measurable progress.
                </p>
            </motion.header>

            <div className="flex justify-center items-center mt-12">
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
