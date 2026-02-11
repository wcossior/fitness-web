import { CardResult } from "./CardResult";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const Results = () => {

  const trackRef = useRef<HTMLDivElement>(null);

  const cards = [
    { value: 6000, suffix: "+", label: "Hours Trained" },
    { value: 25, suffix: "%", label: "Body Fat Reduced" },
    { value: 800, suffix: "+", label: "Clients Transformed" },
  ];

  useGSAP(() => {
    if (!trackRef.current) return;

    const el = trackRef.current;
    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
  }, []);


  return (
    <div className="bg-primary-strong overflow-hidden fade-edges py-2 sm:py-4">
      <div ref={trackRef} className="flex w-max">
        {[...cards, ...cards].map((card, i) => (
          <CardResult key={i} {...card}/>
        ))}
      </div>
    </div>
  );
};
