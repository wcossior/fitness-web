import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center"
      initial={{ backgroundColor: "rgba(0,0,0,0)", scale: 1 }}
      animate={{
        backgroundColor: scrolled ? "rgba(11,15,14,0.85)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        scale: scrolled ? 1.03 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="text-xl font-bold text-white">FitBrand</div>
      <ul className="flex gap-6 text-white font-medium">
        <li><a href="#hero">Home</a></li>
        <li><a href="#results">Results</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#pain-points">Pain points</a></li>
        <li><a href="#our-method">Our method</a></li>
        <li><a href="#benefits">Benefits</a></li>
      </ul>
    </motion.nav>
  );
};
