import { motion } from "framer-motion";
import { useNavbar } from "./useNavbar";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {

  const { scrolled, open, setOpen } = useNavbar();

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
          <DesktopNav />
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </motion.nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};
