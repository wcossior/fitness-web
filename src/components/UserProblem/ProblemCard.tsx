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
            <div className={`hidden lg:flex w-full relative justify-center`}>
                {position === "right" ?
                    <>
                        <Badge index={index}></Badge>
                        <TimeLine></TimeLine>
                        <Info title={title} img={img} description={description} position={position}></Info>
                    </>
                    :
                    <>
                        <Info title={title} img={img} description={description} position={position}></Info>
                        <TimeLine></TimeLine>
                        <Badge index={index}></Badge>
                    </>
                }
            </div>
            <div className={`hidden md:flex lg:hidden w-full relative justify-center`}>
                <Badge index={index}></Badge>
                <TimeLine></TimeLine>
                <Info title={title} img={img} description={description} position={position}></Info>
            </div>
        </>

    )
}
