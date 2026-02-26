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

export const overlayVariants: Variants = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200,
            staggerChildren: 0.1, // Iniciamos la cascada de los hijos
            delayChildren: 0.2
        }
    },
    exit: {
        x: "100%",
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200,
            when: "afterChildren", // Primero salen los hijos, luego el fondo
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

export const linkVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
        x: 50,
        opacity: 0,
        transition: { duration: 0.2 }
    }
};