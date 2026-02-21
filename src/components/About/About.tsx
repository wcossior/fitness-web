import img from '../../assets/couch2.png'
import { Triangles } from '../Hero/icons/Triangles'
import { CardResult } from '../Results/CardResult'


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
        <section className='py-16 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden min-h-[768px] relative'>
                <div className='h-180 lg:h-250 absolute z-2 -left-20 -top-10'>
                    <img src={img} className='object-cover h-full' alt="img" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -left-1/4 -z-5
                                bg-[radial-gradient(circle,_var(--color-primary-strong)_0%,_transparent_70%)]
                                w-[100%] h-[100%] opacity-20 lg:opacity-30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-30
                    bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent
                    pointer-events-none z-2"
                />
                <div className='w-[70rem] bg-surface border border-white/5 lg:p-20 p-12 absolute right-0 z-1'>
                    <header className="space-y-4">
                        <h2 className="font-bold text-2xl sm:text-4xl font-heading uppercase">
                            <span className="font-black text-primary">The Mind </span> Behind the Method.
                        </h2>
                        <p className="text-text-secondary font-body">
                            Most people don’t fail because they lack effort.
                            They fail because their effort isn’t structured.
                            After years of coaching and analyzing performance patterns, one truth became obvious:
                            progress isn’t random — it’s engineered.
                            This method was built to eliminate guesswork, remove emotional decision-making, and replace chaos with measurable progression.
                            This isn’t motivation.
                            It’s architecture.
                        </p>
                    </header>
                </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 grid lg:grid-cols-4 sm:grid-cols-2 w-fit gap-3 mt-8 border border-white/10 absolute z-6 bottom-0 right-0">
                {cards.map((card, i) => (
                    <CardResult key={i} {...card} />
                ))}
            </div>

        </section>
    )
}
