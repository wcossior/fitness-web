import { motion, AnimatePresence } from "framer-motion";

type mobileMenuProps = {
    open: boolean,
    onClose: () => void,
}

export const MobileMenu = ({ open, onClose }: mobileMenuProps) => {

    const links = [
        { margin: "mt-12", textColor: "", href: "#home", label: "Home" },
        { margin: "", textColor: "", href: "#results", label: "Results" },
        { margin: "", textColor: "", href: "#pain-points", label: "Pain points" },
        { margin: "", textColor: "", href: "#our-method", label: "Our method" },
        { margin: "", textColor: "", href: "#benefits", label: "Benefits" },
        { margin: "", textColor: "", href: "#plans", label: "Plans" },
        { margin: "", textColor: "", href: "#about", label: "About us" },
        { margin: "mb-12", textColor: "text-primary", href: "#cta", label: "Start training" },
    ];

    return (
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
                            {links.map(link => (
                                <li
                                    key={link.href}
                                    className={`${link.margin} ${link.textColor}`}
                                    onClick={onClose}
                                >
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </motion.ul>
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-2xl"
                        >
                            ✕
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
