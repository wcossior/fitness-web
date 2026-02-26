import { useState } from 'react';
import { Button } from '../Buttons/Button';

export const AdrianVale = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
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

            <div className={`space-y-7 text-text-secondary leading-relaxed md:leading-loose font-body transition-all duration-500 overflow-hidden ${!isExpanded ? "max-h-[300px] sm:max-h-none relative" : "max-h-[2000px]"
                }`}>

                <p>
                    Adrian spent years watching the same pattern: intermediate lifters giving 100% effort in the gym but receiving 0% visible return. He realized the industry was addicted to "hard work" as a distraction for a lack of real planning.
                </p>

                <p>
                    He stopped looking at training as an emotional outlet and started treating it as <span className="text-white font-semibold">Architectural Engineering.</span> While the world chased the next high-intensity trend, Adrian obsessed over the quieter variables: recovery curves, volume titration, and metabolic adaptation.
                </p>

                <div className={`${!isExpanded ? "hidden sm:block" : "block"}`}>
                    <p className="mb-7">
                        The System wasn’t built to be another fitness product; it was engineered to be a <span className="text-primary font-bold uppercase tracking-widest text-xs">Predictability Engine.</span> It is the result of 6,000+ coaching hours focused on one goal: ensuring every drop of sweat translates into a measurable metric of growth.
                    </p>

                    <p>
                        Today, Adrian provides the structural blueprint that intermediate athletes have been missing. Because at this level, you don’t need more sweat. <span className="text-white font-bold">You need a better map.</span>
                    </p>
                </div>

                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-surface to-transparent sm:hidden" />
                )}
            </div>

            <div className='flex justify-center mt-4'>
                <Button
                    title={isExpanded ? "Show Less [-]" : "Read Full Bio [+]"}
                    onClick={()=>setIsExpanded(!isExpanded)}
                    className='sm:hidden tracking-widest text-xs text-primary font-bold'
                    variant='ghost'
                ></Button>
            </div>

            <p className="mt-12 text-sm sm:text-xl font-heading italic uppercase border-t border-white/5 pt-8">
                Precision over noise.
            </p>
        </div>
    );
};