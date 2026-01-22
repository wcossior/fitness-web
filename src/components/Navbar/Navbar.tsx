import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12"
        initial={{ backgroundColor: "rgba(0,0,0,0)", scale: 1 }}
        animate={{
          backgroundColor: scrolled ? "rgba(11,15,14,0.85)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          scale: scrolled ? 1.03 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between py-8">
          <div className="text-xl font-bold text-primary font-heading">FitBrand</div>
          <ul className="hidden lg:flex gap-8 text-white font-body text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#pain-points">Pain points</a></li>
            <li><a href="#our-method">Our method</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#about">About us</a></li>
          </ul>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md"
          >
            <div className="h-full overflow-y-auto">
              <motion.ul
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="min-h-full relative flex flex-col items-center pt-24 justify-center gap-8 text-xl font-heading uppercase"
              >
                <li className="pt-12" ><a onClick={() => setOpen(false)} href="#home">Home</a></li>
                <li><a onClick={() => setOpen(false)} href="#results">Results</a></li>
                <li><a onClick={() => setOpen(false)} href="#pain-points">Pain points</a></li>
                <li><a onClick={() => setOpen(false)} href="#our-method">Our method</a></li>
                <li><a onClick={() => setOpen(false)} href="#benefits">Benefits</a></li>
                <li><a onClick={() => setOpen(false)} href="#plans">Plans</a></li>
                <li><a onClick={() => setOpen(false)} href="#about">About us</a></li>
                <li>
                  <a
                    onClick={() => setOpen(false)}
                    href="#cta"
                    className="text-primary pb-12"
                  >
                    Start Training
                  </a>
                </li>
              </motion.ul>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-2xl"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
