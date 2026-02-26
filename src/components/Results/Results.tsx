import { Metric } from "../About/Metric";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import manBefore from "../../assets/images/ManBefore.png"
import manAfter from "../../assets/images/manAfter.png"
import womanBefore from "../../assets/images/BeforeWoman1.png"
import womanAfter from "../../assets/images/AfterWoman1.png"
import woman2Before from "../../assets/images/woman2Before.png"
import woman2After from "../../assets/images/woman2After.png"
import { Testimonial } from "./Testimonial";
import { TestimonialSlider } from "./TestimonialSlider";


export const Results = () => {

  type TestimonialData = {
    name: string;
    quote: string;
    duration: string;
    metrics: string[];
    photoBefore: string;
    photoAfter: string;
  };

  const testimonials: TestimonialData[] = [
    {
      name: "Daniel Mendez",
      duration: "16 Week Transformation",
      metrics: ["-8kg Fat Loss", "+60kg Deadlift"],
      quote:
        "I had trained before, but never with real structure. In 16 weeks I lost 8kg, increased my deadlift by 60kg, and stopped feeling exhausted every afternoon. The biggest change wasn’t just physical — it was the discipline I built.",
      photoBefore: manBefore,
      photoAfter: manAfter,
    },
    {
      name: "Sofia Molina",
      duration: "20 Week Transformation",
      metrics: ["-6% Body Fat", "Visible Muscle Tone"],
      quote:
        "I used to feel intimidated in the gym. Now I walk in knowing exactly what I’m doing. I dropped 6% body fat and built visible strength without extreme dieting. The guidance made the difference.",
      photoBefore: womanBefore,
      photoAfter: womanAfter,
    },
    {
      name: "Natalia Rivero",
      duration: "5 Month Progression",
      metrics: ["+25kg Hip Thrust", "-5% Body Fat"],
      quote:
        "I had been training for years but without real direction. The structured progression completely changed how I approach the gym. In 5 months I increased my hip thrust by 25kg, reduced 5% body fat, and finally saw definition I had never achieved before — without extreme dieting.",
      photoBefore: woman2Before,
      photoAfter: woman2After,
    }
  ];

  return (
    <section className="bg-[#0B0F0E]
bg-[radial-gradient(circle_at_50%_0%,rgba(34,229,138,0.06)_0%,rgba(11,15,14,0.95)_55%,#0B0F0E_100%)] overflow-hidden relative py-16 lg:py-32">
      <header className="mb-12 px-6 md:px-12 lg:px-20">
        <h2 className="font-black font-heading text-2xl sm:text-4xl xl:text-5xl uppercase max-w-5xl">
          Real <span className="text-primary">Results</span>. Measurable Progress.
        </h2>
        <p className="max-w-md text-text-secondary font-body mt-4 sm:text-lg">
          This isn't theory. It’s data-backed transformation.
        </p>
      </header>

      <div className="bg-surface mx-6 md:mx-12 lg:mx-20 p-6 md:p-12 lg:p-20 border
                        border-white/10">
        <p className="text-sm uppercase tracking-widest text-primary/60 mb-12 font-heading">
          Client Case Studies
        </p>

        {
          <TestimonialSlider>
            {testimonials.map((testim, index) => (
              <Testimonial key={index} {...testim} />
            ))}
          </TestimonialSlider>
        }
      </div>
    </section>
  );
};
