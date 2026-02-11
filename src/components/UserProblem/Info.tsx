import React from 'react'

type problemCardsData = {
    title: string
    description: string
    img: string,
    position: "left" | "right"
}

export const Info = ({ title, img, description, position }: problemCardsData) => {
    return (
        <div className="relative w-100 flex flex-col">
            <h3 className={`font-heading uppercase text-xl text-text-primary mb-4 ${position === "right" ? "text-start" : "text-end"}`}>
                <span className="opacity-70 font-light">No </span>
                <span className="font-black">{title}</span>
            </h3>
            <div className="group relative">
                <div className="overflow-hidden rounded-xl">
                    <img
                        className="h-70 w-300 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        src={img}
                        alt={title}
                    />
                </div>
                <div className="absolute -bottom-4 -right-4 w-[95%] drop-shadow-2xl">
                    <div className="bg-primary-strong py-4 px-8 [clip-path:polygon(8%_0%,_100%_0%,_100%_70%,_92%_100%,_0%_100%,_0%_30%)]">
                        <p className="font-body italic font-bold text-sm text-text-primary leading-tight">
                            "{description}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
