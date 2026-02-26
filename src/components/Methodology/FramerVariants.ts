import { type Variants } from "framer-motion"

export const methodologyVariants: Variants = {
    hidden: { 
        opacity: 0, 
        x: -20 
    },
    visible: (i: number) => ({
        opacity: 1, 
        x: 0,
        transition: { 
            delay: i * 0.15, 
            duration: 0.6, 
            ease: "easeOut" 
        }
    })
};