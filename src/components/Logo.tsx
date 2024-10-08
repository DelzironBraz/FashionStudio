import { Link } from "react-router-dom";
import { Container, Text } from "../stylesheets/styles";
import { motion } from "framer-motion";

export const Logo = () => {
    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLenght: 0,
        },
        visible: {
            opacity: 1,
            pathLenght: 1,

            transition: {
                duration: 2,
                ease: 'easeInOut'
            },
        },
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: -5,

            transition: {
                duration: 2,
                delay: 2,
                ease: 'easeInOut'
            },
        },
    };
    return (
        <Container>
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="none">
                    <g>
                    </g>
                    <g>
                        <motion.path
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        />
                    </g>
                </svg>

                <Text variants={textVariants} initial="hidden" animate="visible">
                    Wibe Studio
                </Text>
            </Link>
        </Container>
    );
};
