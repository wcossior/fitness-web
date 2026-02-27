import { motion } from "framer-motion";
import { useNavbar } from "./useNavbar";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {

	const { scrolled, open, setOpen } = useNavbar();

	return (
		<>
			<motion.nav
				className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20"
				initial={{ y: -100, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					backgroundColor: scrolled ? "rgba(11,15,14,0.85)" : "rgba(0,0,0,0)",
					backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
				}}
				transition={{
					y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
					backgroundColor: { duration: 0.3 },
					backdropFilter: { duration: 0.3 }
				}}
			>
				<div className="flex items-center justify-between py-8">
					<a href="#hero-section">
						<div className="text-xl font-bold text-primary font-heading">FitBrand</div>
					</a>
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
