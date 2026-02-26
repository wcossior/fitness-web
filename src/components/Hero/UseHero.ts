import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const UseHero = () => {
    const graphRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(graphRef.current,
            { opacity: 0, scale: 1.3 },
            { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
        );
    }, []);
    return graphRef ;
}
