import { type Variants } from "framer-motion"

export const planVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (highlight: boolean) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: highlight ? 0.3 : 0 // El destacado entra un poco después para llamar la atención
        }
    })
};