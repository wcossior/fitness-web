import { motion } from "framer-motion"

type normalBtnProps = {
    title: string,
    icon?: boolean
}

export const NormalButton = ({ title, icon }: normalBtnProps) => {
    return (
        <button className="flex justify-center items-center gap-2 bg-primary text-surface font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-200">
            <span>{title}</span>
            {
                icon &&
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
            }
        </button>
    )
}
