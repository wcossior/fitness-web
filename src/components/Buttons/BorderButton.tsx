import React from 'react'

type borderBtnProps = {
    title: string
}

export const BorderButton = ({title}:borderBtnProps) => {
    return (
        <button className="border border-primary/40 text-text-primary px-6 py-3 rounded-lg hover:border-primary/70 hover:scale-105 hover:shadow-md transition-all duration-200 font-body">
            {title}
        </button>
    )
}
