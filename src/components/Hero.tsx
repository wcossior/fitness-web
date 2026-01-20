
export const Hero = () => {

    return (
        <section className="relative min-h-[100vh] py-10 px-8 md:px-20 flex flex-col items-center text-center space-y-4 md:space-y-6 justify-center">
            <span className="text-text-secondary font-medium uppercase tracking-widest">Professional Fitness Coaching</span>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary">
                Build strength, lose fat, and feel <span className="text-primary/80">confident</span> again
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-xl">Personalized training plans designed to fit your lifestyle, schedule, and goals. No guesswork. No wasted time.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button
                    className="animated-gradient text-surface px-6 py-3 rounded-lg font-semibold shadow-lg shadow-[rgba(34,229,138,0.25)]"
                >
                    Book a free session
                </button>
                <button className="border border-borderSutil text-primary px-6 py-3 rounded-lg font-semibold hover:bg-glow shadow-lg shadow-[rgba(34,229,138,0.25)]"
                >
                    View programs
                </button>
            </div>
        </section>
    )
}
