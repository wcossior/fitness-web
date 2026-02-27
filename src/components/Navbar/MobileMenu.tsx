import { motion, AnimatePresence } from "framer-motion";
import { linkVariants, overlayVariants } from "./FramerVariants";

type mobileMenuProps = {
    open: boolean,
    onClose: () => void,
}

export const MobileMenu = ({ open, onClose }: mobileMenuProps) => {
    const links = [
        { margin: "mt-12", textColor: "", href: "#about-section", label: "The Mind" },
        { margin: "", textColor: "", href: "#methodology-section", label: "Protocol" },
        { margin: "", textColor: "", href: "#results-section", label: "Lab" },
        { margin: "mb-12", textColor: "text-primary/90 text-glow font-black", href: "#plans-section", label: "Start training" },
    ];

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 z-[60] bg-[#0B0F0E]/95 backdrop-blur-xl border-l border-white/5"
                >
                    <div className="h-full overflow-y-auto flex flex-col">
                        <ul className="flex-1 flex flex-col items-center justify-center gap-6 text-2xl font-heading uppercase tracking-widest">
                            {links.map((link) => (
                                <motion.li
                                    key={link.href}
                                    variants={linkVariants}
                                    className={`${link.margin} ${link.textColor} cursor-pointer hover:text-primary transition-colors`}
                                    onClick={onClose}
                                >
                                    <a href={link.href}>{link.label}</a>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Botón cerrar con animación de rotación */}
                        <motion.button
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            onClick={onClose}
                            className="absolute top-8 right-8 text-white/50 hover:text-primary transition-colors p-2"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <div className="p-8 opacity-20 flex justify-center">
                            <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
                                System Protocol v2.4.0
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}