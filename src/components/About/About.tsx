import img from '../../assets/images/couch4.png'
import { Metric } from './Metric'
import { AdrianVale } from './AdrianVale';
import { Background } from './Backgound';


export const About = () => {
    type metricsData = {
        value: string;
        suffix: string;
        label: string;
    };

    const metrics: metricsData[] = [
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

                <AdrianVale></AdrianVale>

                <div className="xl:col-span-3 border border-white/10 bg-surface/50 backdrop-blur-sm p-8 grid w-fit sm:w-full sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((card, i) => (
                        <Metric key={i} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}
