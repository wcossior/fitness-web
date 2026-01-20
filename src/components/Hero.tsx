
export const Hero = () => {

    return (
        <section className="relative min-h-screen px-6 md:px-20 flex items-center">
            <div className="max-w-4xl space-y-8">
                <span className="inline-block text-sm uppercase tracking-widest text-primary/80">
                    Professional Fitness Coaching
                </span>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight md:tracking-wide text-text-primary">
                    Transformation.<br />Engineered.
                </h1>
                <p className="text-lg md:text-xl text-text-secondary max-w-xl">
                    A structured fitness system built on discipline, progression, and measurable results.
                </p>
                <div className="flex gap-4 pt-4">
                    <button className="bg-gradient-to-b from-primary to-accent shadow-md text-surface font-semibold px-6 py-3 rounded-lg hover:bg-primary-strong hover:scale-105 transition-transform duration-200 shadow-sm">
                        Start Training
                    </button>

                    <button className="border border-border-subtle text-text-primary px-6 py-3 rounded-lg hover:bg-primary-soft hover:scale-105 transition-transform duration-200">
                        View Method
                    </button>
                </div>
            </div>
        </section>

    )
}
