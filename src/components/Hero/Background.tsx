import heroBg from "../../assets/images/couple.webp"
import { Graph } from "../../assets/assetsComponents/Graph"
import { motion } from "framer-motion"
import { UseHero } from "./UseHero";

export const Background = () => {
    const graphRef = UseHero();

    return (
        <>
            <Graph ref={graphRef} className="absolute inset-0 h-100 w-100 -z-10"></Graph>

            <div className="absolute top-0 left-0 w-full h-20 
                bg-gradient-to-b from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent 
                pointer-events-none -z-9"
            />

            <div className="absolute top-0 right-0 w-30 h-full 
                bg-gradient-to-l from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent 
                pointer-events-none -z-9"
            />

            <div
                className="absolute -z-8 -top-[5%] -right-[45%] w-[100%] h-[100%] rounded-full opacity-40 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #22E58A 0%, transparent 70%)',
                    filter: 'blur(80px)'
                }}
            />

            <div className="absolute inset-0 pointer-events-none -z-8
            bg-[radial-gradient(ellipse_70%_50%_at_38%_42%,_var(--color-body-bg)_0%,_var(--color-body-bg)_25%,_transparent_70%)]"
            />


            <motion.div
                className="hidden lg:block absolute h-full top-25 -right-30 -z-6"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
                <img className="lg:h-[730px] object-cover" src={heroBg} alt="elite-img" />
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full h-20 sm:h-40 lg:h-60 
                bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent 
                pointer-events-none -z-5"
            />

            <div
                className="absolute -z-4 -bottom-[32%] -left-[20%] w-[60%] h-[60%] rounded-full opacity-15 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #E6F1EC 0%, transparent 70%)',
                    filter: 'blur(100px)'
                }}
            />

        </>
    )
}
