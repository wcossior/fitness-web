import React from 'react'

type badgeProps = {
    index: number,
}

export const Badge = ({ index }: badgeProps) => {
    return (
        <div className="flex items-start justify-end">
            <span className="relative -top-2 flex py-2 px-5  bg-primary-strong text-text-primary rounded-full w-max text-xs font-bold tracking-[0.2em] uppercase">
                Problem 0{index}
            </span>
        </div>
    )
}
