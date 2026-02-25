import img from '../../assets/images/couch4.png'
import { CardResult } from '../Results/CardResult'
import { Background } from './Backgound';


export const About = () => {
    type CardData = {
        value: string;
        suffix: string;
        label: string;
    };

    const cards: CardData[] = [
        { value: "6000", suffix: "+", label: "Coaching Hours", },
        { value: "90", suffix: "%", label: "Client Retention", },
        { value: "800", suffix: "+", label: "Clients Coached", },
        { value: "7", suffix: "+", label: "Years Experience", },
    ];

    return (
        <section className="relative py-16 lg:py-32 px-6 md:px-12 lg:px-20 h-full overflow-hidden">
            <Background />

            <h2 className="font-black text-2xl sm:text-4xl xl:text-5xl font-heading uppercase leading-tight relative max-w-4xl">
                The <span className="text-primary/90">Mind </span>
                Behind the System.
            </h2>

            <div className="grid xl:grid-cols-3 gap-8 mt-12">
                <div className="xl:col-span-1 xl:row-span-2 relative flex items-center max-h-[840px]">
                    <img
                        src={img}
                        className="w-full h-full object-cover grayscale contrast-125 border border-white/5"
                        alt="Adrian Vale - Performance Strategist"
                    />

                </div>

                <div className="xl:col-span-2 xl:row-span-2 bg-surface border border-white/10 p-8 md:p-12">

                    <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-heading font-semibold mt-4">
                        Adrian Vale
                    </h3>
                    <p className="text-sm text-primary/60 mt-1 mb-6 italic font-body">
                        Performance Strategist
                    </p>

                    <div className="border-l-2 border-primary pl-6 py-2 mb-10">
                        <p className="text-xl md:text-2xl font-heading font-medium text-white italic leading-snug">
                            "Intensity is common. <span className="text-primary not-italic font-black">Direction is rare.</span>"
                        </p>
                    </div>

                    <div className="space-y-7 text-text-secondary leading-relaxed md:leading-loose font-body">
                        <p>
                            Adrian spent years watching the same pattern: intermediate lifters giving 100% effort in the gym but receiving 0% visible return. He realized the industry was addicted to "hard work" as a distraction for a lack of real planning.
                        </p>

                        <p>
                            He stopped looking at training as an emotional outlet and started treating it as <span className="text-white font-semibold">Architectural Engineering.</span> While the world chased the next high-intensity trend, Adrian obsessed over the quieter variables: recovery curves, volume titration, and metabolic adaptation.
                        </p>

                        <p>
                            The System wasn’t built to be another fitness product; it was engineered to be a <span className="text-primary font-bold uppercase tracking-widest text-xs">Predictability Engine.</span> It is the result of 6,000+ coaching hours focused on one goal: ensuring every drop of sweat translates into a measurable metric of growth.
                        </p>

                        <p>
                            Today, Adrian provides the structural blueprint that intermediate athletes have been missing. Because at this level, you don’t need more sweat. <span className="text-white font-bold">You need a better map.</span>
                        </p>
                    </div>

                    <p className="mt-12 text-sm sm:text-xl font-heading font-semibold tracking-tight uppercase border-t border-white/5 pt-8">
                        Precision over noise.
                    </p>
                </div>

                <div className="xl:col-span-3 border border-white/10 bg-surface/50 backdrop-blur-sm p-8 grid w-fit sm:w-full sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <CardResult key={i} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}
