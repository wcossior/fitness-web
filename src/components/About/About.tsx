import img from '../../assets/images/couch4.png'
import { Metric } from './Metric'
import { AdrianVale } from './AdrianVale';
import { Background } from './Backgound';
import { motion } from "framer-motion"

export const About = () => {


    type metricsData = {
        value: number;
        suffix: string;
        label: string;
    };

    const metrics: metricsData[] = [
        { value: 6000, suffix: "+", label: "Coaching Hours", },
        { value: 90, suffix: "%", label: "Client Retention", },
        { value: 800, suffix: "+", label: "Clients Coached", },
        { value: 7, suffix: "+", label: "Years Experience", },
    ];

    return (
        <section id='about-section' className="relative py-16 lg:py-32 px-6 md:px-12 lg:px-20 h-full overflow-hidden">
            <Background />

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} // Se anima cuando el 50% del título es visible
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-black text-2xl sm:text-4xl xl:text-5xl font-heading uppercase leading-tight relative max-w-4xl">
                The <span className="text-primary/90">Mind </span>
                Behind the System.
            </motion.h2>

            <div className="grid xl:grid-cols-3 gap-8 mt-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="xl:col-span-1 xl:row-span-2 relative flex items-center max-h-[840px]"
                >
                    <img
                        src={img}
                        className="w-full h-full object-cover grayscale contrast-125 border border-white/5"
                        alt="Adrian Vale - Performance Strategist"
                    />

                </motion.div>


                <motion.div
                    className="xl:col-span-2 xl:row-span-2 bg-surface border border-white/10 p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <AdrianVale></AdrianVale>
                </motion.div>

                <div className="xl:col-span-3 border border-white/10 bg-surface/50 backdrop-blur-sm p-8 grid w-fit sm:w-full sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((card, i) => (
                        <Metric key={i} {...card} />
                    ))}
                </div>
            </div>
        </section>
    )
}
