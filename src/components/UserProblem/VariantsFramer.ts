import { type Variants } from "framer-motion"

export const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" }
    }
};


export const getProblemCardVariants = (index: number): Variants => {
    const isEven = index % 2 === 0;
    const rotationDegree = isEven ? 3 : -3;

    return {
        hidden: { 
            opacity: 0, 
            y: 50, 
            rotate: 0 
        },
        visible: { 
            opacity: 1, 
            y: 0, 
            rotate: rotationDegree, 
            transition: { 
                duration: 0.7, 
                delay: index * 0.15, 
                ease: [0.215, 0.61, 0.355, 1] 
            }
        }
    };
};
