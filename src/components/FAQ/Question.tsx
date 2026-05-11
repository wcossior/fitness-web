import { motion } from "framer-motion"

type questionProps = {
    question: string;
    answer: string;
    index: number;
}

export const Question = ({ question, answer, index }: questionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.25, 
                ease: "easeOut"
            }}
            className="border border-white/10 bg-surface/20 p-6 hover:border-primary/30 transition-all cursor-pointer font-body">
            <h3 className="font-bold uppercase text-sm tracking-widest text-text-primary">
                {question}
            </h3>
            <p className="text-text-secondary mt-2 text-sm">
                {answer}
            </p>
        </motion.div>
    )
}
