import { Forbidden } from '../../assets/assetsComponents/Forbidden';
import { FilterCard } from './FilterCard';
import { motion, type Variants } from "framer-motion"

export const NotForYou = () => {
    const filters = [
        {
            title: "Total Beginners",
            description: "If you've never touched a barbell, you need basic motor learning, not performance engineering.",
            icon: Forbidden
        },
        {
            title: "No Gym Access",
            description: "This system requires a standard facility (Racks, Barbells, Cables). It is not designed for limited home setups.",
            icon: Forbidden
        },
        {
            title: "Data Averse",
            description: "The system lives on feedback. If you won't log your lifts or track metrics, we cannot optimize your progress.",
            icon: Forbidden
        },
        {
            title: "Short-term Fixes",
            description: "We build physiques that last. If your horizon is shorter than 12 weeks, our methodology won't align.",
            icon: Forbidden
        }
    ];

    return (
        <section className='py-16 lg:py-32 px-6 md:px-12 lg:px-20 bg-[#0B0F0E] 
bg-[radial-gradient(circle_at_50%_50%,rgba(34,229,138,0.04)_0%,rgba(34,229,138,0.02)_40%,rgba(11,15,14,1)_80%,#0B0F0E_100%)]'>
            <div className="max-w-6xl">
                <motion.header
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4 mb-12"
                >
                    <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm italic font-heading">
                        The Selection Process
                    </span>
                    <h2 className="font-black text-2xl sm:text-4xl xl:text-5xl font-heading uppercase leading-tight">
                        This system <span className="font-black text-primary/90">isn't</span> for everyone.
                    </h2>
                    <p className="text-text-secondary font-body max-w-xl sm:text-lg">
                        To maintain the integrity of our results, we only work with lifters who meet the necessary <span className="text-white font-semibold">technical requirements.</span>
                    </p>
                </motion.header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filters.map((item, index) => (
                        <FilterCard key={index} {...item} index={index}></FilterCard>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 font-body sm:text-xl text-text-primary max-w-2xl italic"
                >
                    "If you meet these requirements, you are not just a client; you are a <span className="text-primary font-black not-italic tracking-wide">candidate</span> for real, measurable transformation."
                </motion.p>
            </div>
        </section>
    )
}
