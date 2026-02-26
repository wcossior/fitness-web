import { motion } from "framer-motion"

type ButtonProps = {
    title: string
    icon?: boolean
    className?: string
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    variant?: "primary" | "outline" | "ghost"
}
const baseStyles = "relative overflow-hidden flex justify-center items-center gap-3 font-body font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 disabled:opacity-50";

const variants = {
    primary: "bg-primary text-surface px-10 py-4 hover:bg-primary-strong hover:shadow-[0_0_25px_rgba(34,229,138,0.4)]",
    outline: "border border-white/20 px-10 py-4 hover:bg-white/5 hover:border-primary/50",
    ghost: " hover:text-primary px-4 py-2"
}

export const Button = ({
    title,
    icon,
    className = "",
    onClick,
    type = "button",
    disabled = false,
    variant = "primary",
}: ButtonProps) => {

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${baseStyles}
                ${variants[variant]}
                ${className}
            `}
        >
            <span>{title}</span>

            {icon && (
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </motion.svg>
            )}
        </button>
    )
}