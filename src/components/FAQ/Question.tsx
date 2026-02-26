import React from 'react'

type questionProps = {
    question: string;
    answer: string;
}

export const Question = ({ question, answer }: questionProps) => {
    return (
        <div className="border border-white/10 bg-surface/20 p-6 hover:border-primary/30 transition-all cursor-pointer font-body">
            <h3 className="font-bold uppercase text-sm tracking-widest text-text-primary">
                {question}
            </h3>
            <p className="text-text-secondary mt-2 text-sm">
                {answer}
            </p>
        </div>
    )
}
