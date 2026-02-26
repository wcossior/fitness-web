import { useState } from "react";
import { Button } from "../Buttons/Button";

type SliderProps = {
  children: React.ReactNode[];
};

export const TestimonialSlider = ({ children }: SliderProps) => {
  const [current, setCurrent] = useState(0);

  const total = children.length;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="relative w-full">

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute w-full flex justify-between items-center mt-8 font-body gap-4 text-xs sm:text-sm bottom-1/2 -translate-y-1/2">
        <Button onClick={prev} title="← Prev" variant="ghost"></Button>
        <Button onClick={next} title="Next →" variant="ghost"></Button>
      </div>
    </div>
  );
};