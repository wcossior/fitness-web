import { useState } from "react";

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

      <div className="flex justify-center items-center mt-8 font-body gap-4">

        <button
          onClick={prev}
          className="text-xs sm:text-sm px-6 py-2 border border-primary/30 text-sm uppercase tracking-widest hover:bg-primary/10 transition"
        >
          ← Prev
        </button>

        <button
          onClick={next}
          className="text-xs sm:text-sm px-6 py-2 border border-primary/30 text-sm uppercase tracking-widest hover:bg-primary/10 transition"
        >
          Next →
        </button>

      </div>
    </div>
  );
};