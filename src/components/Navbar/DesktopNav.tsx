import { motion} from "framer-motion"
import { nav_containerVariants, nav_itemVariants } from "./FramerVariants";

export const DesktopNav = () => {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#results", label: "Results" },
        { href: "#pain-points", label: "Pain points" },
        { href: "#our-method", label: "Our method" },
        { href: "#benefits", label: "Benefits" },
        { href: "#plans", label: "Plans" },
        { href: "#about", label: "About us" },
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