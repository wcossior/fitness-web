import { motion, type Variants } from "framer-motion"
import img from "../../assets/dumbells5.jpg"
import { Badge } from "./Badge"
import { TimeLine } from "./TimeLine"
import { Info } from "./Info"

type articleProps = {
    title: string,
    description: string,
    index: number,
    position: "left" | "right"
}

export const ProblemCard = ({ title, description, index, position }: articleProps) => {
    return (
        <>
            <div className={`hidden lg:flex relative justify-center ${position === "right" ? "left-[8.2rem]" : "-left-[8.2rem]"}`}>
                {position === "right" ?
                    <>
                        <Badge index={index}></Badge>
                        <TimeLine className="mx-12"></TimeLine>
                        <Info title={title} img={img} description={description} position={position}></Info>
                    </>
                    :
                    <>
                        <Info title={title} img={img} description={description} position={position}></Info>
                        <TimeLine className="mx-12"></TimeLine>
                        <Badge index={index}></Badge>
                    </>
                }
            </div>
            
            <div className={`hidden md:flex lg:hidden w-full relative justify-center`}>
                <Badge index={index}></Badge>
                <TimeLine className="mx-12"></TimeLine>
                <Info title={title} img={img} description={description} position={"right"}></Info>
            </div>

            <div className={`md:hidden w-full relative flex`}>
                <div className="bg-white/10 px-6 [clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_100%_100%,_0%_100%,_0%_25%)] flex flex-col items-center justify-center font-heading uppercase mr-4 text-xs font-bold italic">
                    <p className="text-2xl text-primary">0{index}</p>
                    <p>Problem</p>
                </div>
                <div className="drop-shadow-2xl max-w-xs">
                    <div className="bg-primary-strong p-4 [clip-path:polygon(8%_0%,_100%_0%,_100%_70%,_92%_100%,_0%_100%,_0%_0%)]">
                        <h3 className={`font-heading uppercase text-sm text-text-primary mb-2`}>
                            <span className="font-black">No {title}</span>
                        </h3>
                        <p className="font-body italic font-light text-sm text-text-primary leading-tight">
                            "{description}"
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}
