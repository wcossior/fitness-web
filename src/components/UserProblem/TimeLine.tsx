import React from 'react'

type timeLineProps = {
    className?: string
}

export const TimeLine = ({ className }: timeLineProps) => {
    return (
        <div className={`w-px h-100 bg-text-primary relative ${className}`}>
            <div className="absolute -left-[.45rem] w-4 h-4 rounded-full bg-primary border-3 border-subtle">
            </div>
        </div>
    )
}
