import { type Variants } from "framer-motion"

export const featureVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1]
        }
    })
};