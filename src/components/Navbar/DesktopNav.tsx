import { motion} from "framer-motion"
import { nav_containerVariants, nav_itemVariants } from "./FramerVariants";

export const DesktopNav = () => {
    const links = [
        { href: "#about-section", label: "About the Mind" },
        { href: "#methodology-section", label: "Protocol" },
        { href: "#results-section", label: "Results Lab" },
        { href: "#plans-section", label: "Access Plans" },
    ];

    return (
        <motion.ul
            variants={nav_containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex gap-8 text-white font-body text-sm"
        >
            {links.map(link => (
                <motion.li
                    key={link.href}
                    variants={nav_itemVariants}
                    className="transition duration-300 hover:text-primary hover:scale-110"
                >
                    <a href={link.href}>{link.label}</a>
                </motion.li>
            ))}
        </motion.ul>
    );
}