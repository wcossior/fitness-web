import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dumbell } from "../Benefits/icons/Dumbell";

gsap.registerPlugin(ScrollTrigger);

interface CardResultProps {
  value: number;
  suffix: string;
  label: string;
}

export const CardResult = ({ value, suffix, label }: CardResultProps) => {

  return (
    <div className="flex items-center min-w-[280px]">
      <Dumbell className="h-14 rotate-25 flex-1 mx-4 text-surface"></Dumbell>
      <div className="font-body flex items-center flex-1 ">
        <span className="text-4xl sm:text-5xl font-bold">
          {value}
        </span>
        <span className="text-2xl sm:text-3xl font-bold mr-4">{suffix}</span>
        <span className="text-xs uppercase tracking-widest text-text-primary">
          {label}
        </span>
      </div>
    </div>
  );
};
