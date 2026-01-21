import { motion } from "framer-motion"

type VideoBgHeroProps = {
    srcFile:string
}

export const VideoBgHero = ({srcFile}:VideoBgHeroProps) => {
    return (
        <motion.video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover  object-[50%_25%] brightness-50 -z-10"
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <source src={srcFile} type="video/mp4" />
        </motion.video>
    )
}
