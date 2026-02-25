import { Forbidden } from '../../assets/assetsComponents/Forbidden';

export const NotForYou = () => {
    const filters = [
        {
            title: "Total Beginners",
            desc: "If you've never touched a barbell, you need basic motor learning, not performance engineering.",
            icon: Forbidden
        },
        {
            title: "No Gym Access",
            desc: "This system requires a standard facility (Racks, Barbells, Cables). It is not designed for limited home setups.",
            icon: Forbidden
        },
        {
            title: "Data Averse",
            desc: "The system lives on feedback. If you won't log your lifts or track metrics, we cannot optimize your progress.",
            icon: Forbidden
        },
        {
            title: "Short-term Fixes",
            desc: "We build physiques that last. If your horizon is shorter than 12 weeks, our methodology won't align.",
            icon: Forbidden
        }
    ];

    return (
        <section className='py-16 lg:py-32 px-6 md:px-12 lg:px-20 bg-surface'>
            <div className="max-w-6xl">
                <header className="space-y-4 mb-12">
                    <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm italic font-heading">
                        The Selection Process
                    </span>
                    <h2 className="font-black text-2xl sm:text-4xl xl:text-5xl font-heading uppercase leading-tight">
                        This system <span className="font-black text-primary/90">isn't</span> for everyone.
                    </h2>
                    <p className="text-text-secondary font-body max-w-xl sm:text-lg">
                        To maintain the integrity of our results, we only work with lifters who meet the necessary <span className="text-white font-semibold">technical requirements.</span>
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filters.map((item, index) => (
                        <div
                            key={index}
                            className="group p-4 sm:p-8 border border-white/10 bg-surface/30 hover:border-primary/60 transition-all duration-400"
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 group-hover:scale-108 transition-transform duration-400">

                                    <div className="sm:flex hidden items-center justify-center w-16 h-16 bg-surface/90 border border-white/10">
                                        <Forbidden className="text-red-500/50 group-hover:text-red-500 w-8 h-8"></Forbidden>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-heading font-bold uppercase tracking-wide text-white flex items-center gap-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-text-secondary font-body text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-12 font-body text-xl text-text-primary max-w-2xl">
                    "If you meet these requirements, you are not just a client; you are a <span className="text-primary/90">candidate</span> for real, measurable transformation."
                </p>
            </div>
        </section>
    )
}
