import { type Variants } from "framer-motion"

export const filterVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
            ease: "easeOut"
        }
    })
};