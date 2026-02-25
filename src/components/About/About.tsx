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
            <h2 className="font-bold text-2xl sm:text-4xl font-heading uppercase leading-tight relative">The <span className="font-black text-primary">Mind </span>
                Behind the Method.
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 mt-12">
                <div className="lg:col-span-1 lg:row-span-2 relative flex items-center max-h-[780px]">
                    <img
                        src={img}
                        className="w-full h-full object-cover h-full contrast-110"
                        alt="img"
                    />
                </div>

                <div className="lg:col-span-2 lg:row-span-2 bg-surface border border-white/10 p-8 md:p-12">

                    <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-heading font-semibold mt-4">
                        Adrian Vale
                    </h3>

                    <p className="text-sm text-primary/60 mt-1 mb-8 italic">
                        Performance Strategist
                    </p>

                    <div className="space-y-7 text-text-secondary leading-relaxed md:leading-loose max-w-[72ch]">

                        <p>
                            Adrian never believed progress was a matter of intensity.
                            He believed it was a matter of structure.
                        </p>

                        <p>
                            While others focused on louder motivation,
                            he focused on quieter variables —
                            recovery patterns, progression models,
                            behavioral consistency.
                        </p>

                        <p>
                            To him, performance was never emotional.
                            It was architectural.
                        </p>

                        <p>
                            The system didn’t begin as a product.
                            It began as an obsession with predictability.
                        </p>

                        <p>
                            Today, Adrian helps men and women at intermediate levels break through plateaus and turn structured training into real, measurable results — consistently, predictably, and sustainably.
                        </p>
                    </div>

                    <p className="mt-12 text-sm sm:text-xl font-heading font-semibold tracking-tight">
                        Precision over noise.
                    </p>
                </div>
                <div className="lg:col-span-3 border border-white/10 bg-surface p-8 grid w-fit sm:w-full sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <CardResult key={i} {...card} />
                    ))}
                </div>
            </div>

        </section>
    )
}
