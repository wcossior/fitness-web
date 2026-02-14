import { CardResult } from "./CardResult";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Clock } from "./icons/Clock"
import { Experience } from "./icons/Experience"
import { ShieldCheck } from "./icons/ShiledCheck"
import { Users } from "./icons/Users"


export const Results = () => {

  const trackRef = useRef<HTMLDivElement>(null);

  type CardData = {
    value: string;
    suffix: string;
    label: string;
    icon: React.ElementType;
  };

  const cards:CardData[] = [
    { value: "6000", suffix: "+", label: "Coaching Hours", icon: Clock},
    { value: "90", suffix: "%", label: "Client Retention", icon: ShieldCheck},
    { value: "800", suffix: "+", label: "Clients Couched", icon: Users},
    { value: "7", suffix: "+", label: "Years Experience", icon: Experience},
  ];

  useGSAP(() => {
    if (!trackRef.current) return;

    const el = trackRef.current;
    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -totalWidth,
      duration: 35,
      ease: "none",
      repeat: -1,
    });
  }, []);


  return (
    <section className="bg-primary-strong py-16 lg:py-32 overflow-hidden">
      <div className="text-center mb-12 px-6 md:px-12 lg:px-20">
        <h2 className="font-heading text-2xl sm:text-4xl uppercase">
          Real Results. Measurable Progress.
        </h2>
        <p className="max-w-md mx-auto text-text-primary mt-4">
          This isn’t theory. It’s data-backed transformation.
        </p>
      </div>
      <div className="fade-edges">
        <div ref={trackRef} className="flex w-max bg-surface">
          {[...cards, ...cards].map((card, i) => (
            <CardResult key={i} {...card} />
          ))}
        </div>
      </div>
    </section>

  );
};
