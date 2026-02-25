import { PlanCard } from "./PlanCard";
import bg from "../../assets/images/dumbells5.jpg"
import { motion } from "framer-motion"

type PlansData = {
    title: string,
    price: string,
    duration: string,
    characteristics: string[],
    highlight: boolean
    description: string
}

const plans: PlansData[] = [
    {
        title: "Self-Guided",
        price: "49",
        duration: "month",
        highlight: false,
        description:
            "Structured training system for those ready to stay consistent and build real strength.",
        characteristics: [
            "Structured training program",
            "Exercise technique library",
            "Nutrition guidelines",
            "Progress tracking system",
            "Community access",
        ],
    },
    {
        title: "Coached",
        price: "119",
        duration: "month",
        highlight: true,
        description:
            "Personalized guidance, accountability, and adjustments to maximize your results.",
        characteristics: [
            "Everything in Self-Guided",
            "Customized training adjustments",
            "Personalized nutrition targets",
            "Weekly check-ins",
            "Direct messaging with coach",
            "Priority support",
        ],
    },
];


export const Plans = () => {
    return (
        <section className='relative py-16 lg:py-32 px-6 md:px-12 lg:px-20'>
            <img className="absolute top-0 left-0 -z-3 opacity-40 object-cover w-full h-full grayscale object-[38%_center] sm:object-center" src={bg} alt="bg-gym" />

            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />

            <header className="space-y-4 text-center">
                <h2 className="font-bold text-2xl sm:text-4xl font-heading uppercase">Simple <span className="font-black text-primary">Pricing.</span> Serious Results.
                </h2>
                <p className="text-text-secondary font-body max-w-md mx-auto">
                    No contracts. No hidden fees. Full control at all times.
                </p>
            </header>

            <div className="flex justify-center mt-12">
                <div className='grid md:grid-cols-2 w-fit'>
                    {
                        plans.map((plan, index) => (
                            <PlanCard {...plan} key={index} ></PlanCard>
                        ))
                    }
                </div>
            </div>

            <p className='text-center font-body text-text-secondary mt-6 px-6 md:px-12'>
                🔒 Secure checkout • Cancel anytime • No hidden fees
            </p>
        </section>
    )
}
