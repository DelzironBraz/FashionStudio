import { DarkOverlay, Title, VideoContainer } from "../stylesheets/styles"
import mainVideo from '../assets/video/Walking Girl.mp4';
import { motion } from "framer-motion";

export const CoverVideo = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,

            transition: {
                delayChildren: 2,
                staggerChildren: .3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        },
    };

    return (
        <VideoContainer>
            <DarkOverlay />
            <Title variants={containerVariants} initial="hidden" animate="show">
                <div>
                    <motion.h1 variants={itemVariants} data-scroll data-scroll-delay='.13' data-scroll-speed="4">W</motion.h1>
                    <motion.h1 variants={itemVariants} data-scroll data-scroll-delay='.09' data-scroll-speed="4">i</motion.h1>
                    <motion.h1 variants={itemVariants} data-scroll data-scroll-delay='.06' data-scroll-speed="4">b</motion.h1>
                    <motion.h1 variants={itemVariants} data-scroll data-scroll-delay='.04' data-scroll-speed="4">e</motion.h1>
                </div>
                <motion.h2 variants={itemVariants} data-scroll data-scroll-delay='.04' data-scroll-speed="2">Inspire. Create. Belive </motion.h2>
            </Title>
            <video className="w-full h-screen object-cover" autoPlay loop muted playsInline src={mainVideo} />
        </VideoContainer>
    );
};
