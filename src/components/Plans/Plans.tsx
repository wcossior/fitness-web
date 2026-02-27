import { PlanCard } from "./PlanCard";
import bg from "../../assets/images/dumbells5.webp"
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
        title: "The Blueprint",
        price: "49",
        duration: "month",
        highlight: false,
        description:
            "The complete architectural framework. Engineered for disciplined lifters who need the exact map to execute independently.",
        characteristics: [
            "Full Performance System access",
            "Phased progression protocols",
            "Exercise execution library",
            "Data-driven nutrition templates",
            "Systemic progress tracking",
            "Community network access",
        ],
    },
    {
        title: "Direct Oversight",
        price: "119",
        duration: "month",
        highlight: true,
        description:
            "High-level performance engineering. We don't just provide the map; we navigate the terrain with you through 1:1 strategic adjustments.",
        characteristics: [
            "Everything in The Blueprint",
            "Weekly performance audits",
            "Biometric-based program tweaks",
            "Macro & micronutrient optimization",
            "Direct 1:1 strategic communication",
            "Priority technical review",
        ],
    },
];


export const Plans = () => {
    return (
        <section id="plans-section" className='relative py-16 lg:py-32 px-6 md:px-12 lg:px-20'>
            <img className="absolute top-0 left-0 -z-3 opacity-40 object-cover w-full h-full grayscale object-[38%_center] sm:object-center" src={bg} alt="bg-gym" />

            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />

            <motion.header
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 text-center flex flex-col items-center"
            >
                <h2 className="font-black text-2xl sm:text-4xl xl:text-5xl font-heading uppercase max-w-4xl">Simple <span className="font-black text-primary/90 text-glow">Pricing.</span> Serious Results.
                </h2>
                <p className="text-text-secondary font-body max-w-md mx-auto sm:text-lg">
                    No contracts. No hidden fees. Full control at all times.
                </p>
            </motion.header>

            <div className="flex justify-center mt-12">
                <div className='grid md:grid-cols-2 w-fit'>
                    {
                        plans.map((plan, index) => (
                            <PlanCard {...plan} key={index} ></PlanCard>
                        ))
                    }
                </div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className='text-center font-body text-text-secondary mt-6 px-6 md:px-12'
            >
                🔒 Secure checkout • Cancel anytime • No hidden fees
            </motion.p>
        </section>
    )
}
