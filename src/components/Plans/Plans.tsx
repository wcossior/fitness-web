import { PlanCard } from "./PlanCard";
import bg from "../../assets/lifting.jpg"
import bg2 from "../../assets/lifting2.jpg"

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
        title: "Basic",
        price: "29",
        duration: "month",
        highlight: false,
        description: "For those starting their transformation with structure and guidance.",
        characteristics: [
            "Structured training program",
            "Nutrition fundamentals guide",
            "Progress tracking tools",
            "Community support",
        ],
    },
    {
        title: "Popular",
        price: "79",
        duration: "month",
        highlight: true,
        description: "Personal guidance to accelerate results and avoid mistakes.",
        characteristics: [
            "Everything in Foundation",
            "Monthly progress review",
            "Direct Q&A with coach",
            "Form & routine corrections",
            "Priority support",
        ],
    },
    {
        title: "Ultimate",
        price: "149",
        duration: "month",
        highlight: false,
        description: "Full accountability and hands-on support for maximum progress.",
        characteristics: [
            "Everything in Coached",
            "Personalized training adjustments",
            "Custom nutrition targets",
            "Weekly check-ins",
            "Direct messaging access",
        ],
    },
];


export const Plans = () => {
    return (
        <section className='relative py-12'>
            <header className='space-y-4 text-center px-6 md:px-12'>
                <h2 className="font-bold text-3xl sm:text-4xl font-heading uppercase"><span className="font-black text-primary/90">Simple Plans.</span> Real Progress.</h2>
                <p className='text-text-secondary font-body'>No contracts. No hidden fees. Upgrade or cancel anytime.</p>
            </header>
            <img className="hidden md:block absolute top-0 left-0 -z-3 opacity-40 object-cover w-full h-full object-top" src={bg} alt="bg-gym" />
            <img className="md:hidden block absolute top-0 left-0 -z-3 opacity-50 object-cover w-full h-full" src={bg2} alt="bg-gym" />

            <div className="absolute bottom-0 left-0 w-full h-60 
                bg-gradient-to-t from-black to-transparent 
                pointer-events-none -z-1"
            />
            <div className="hidden lg:flex justify-center mt-12">
                <div className='grid lg:grid-cols-3 gap-8 w-fit lg:px-12'>
                    {
                        plans.map((plan, index) => (
                            <PlanCard title={plan.title} price={plan.price} key={index} duration={plan.duration} description={plan.description} characteristics={plan.characteristics} highlight={plan.highlight}></PlanCard>
                        ))
                    }
                </div>
            </div>
            <div className="block lg:hidden overflow-x-auto snap-x snap-mandatory no-scrollbar mt-12 scroll-px-6">
                <div className="flex gap-8 w-max items-stretch px-6 md:px-12 cursor-grab active:cursor-grabbing h-[500px]">
                    {plans.map((plan, i) => (

                        <PlanCard title={plan.title} price={plan.price} key={i} duration={plan.duration} description={plan.description} characteristics={plan.characteristics} highlight={plan.highlight}></PlanCard>

                    ))}
                </div>
            </div>
            <p className='text-center font-body text-text-secondary mt-8 lg:mt-12'>
                🔒 Secure checkout • Cancel anytime • No hidden fees
            </p>
        </section>
    )
}
