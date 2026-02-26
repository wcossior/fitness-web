import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const UseAbout = (value: number) => {
    const numberRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        if (!numberRef.current) return;
        gsap.fromTo(
            numberRef.current,
            { innerText: 0 },
            {
                innerText: value,
                duration: 1.6,
                ease: "power3.out",
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: numberRef.current,
                    start: "top 90%",
                    once: true,
                },
            }
        );
    }, []);

    return numberRef;
}
