import { type Variants } from "framer-motion"


export const nav_containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Tiempo entre cada link
            delayChildren: 0.5,   // Espera a que el Nav baje un poco
        }
    }
};

export const nav_itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

