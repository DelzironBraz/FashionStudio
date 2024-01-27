import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
`;

export const VideoContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
`;

export const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, .6)`};
`;

export const Title = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme.text};

    div {
        display: flex;
        flex-direction: row;
    }

    h1 {
        font-family: 'Kaushan Script', cursive;
        font-size: ${props => props.theme.fontBig};
        font-weight: 400;
        text-shadow: 1px 1px 1px ${props => props.theme.body};
    }

    h2 {
        font-size: ${props => props.theme.fontlg};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        text-transform: capitalize;
        text-align: center;
        font-weight: 400;
    }
`;

export const Container = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 100%;
    color: ${props => props.theme.text};
    z-index: 5;

    svg {
        width: 4rem;
        height: auto;
        overflow: visible;
        stroke-linejoin: round;
        stroke-linecap: round;

        g {
            path {
                stroke: ${props => props.theme.text};
            }
        }
    }

    a {
        display: flex;
        align-items: flex-end;
    }
`;

export const Text = styled(motion.span)`
    color: ${props => props.theme.text};
    font-size: ${props => props.theme.fontlg};
    padding-bottom: .5rem;
`;

export const NavContainer = styled(motion.nav) <{ $isOpen?: boolean }>`
    width: 100vw;
    z-index: 6;
    position: absolute;
    top: ${props => props.$isOpen ? '0' : `-${props.theme.navHeight}`};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MenuBtn = styled.li`
    background-color: ${props => `rgba(${props.theme.textRgba}, .7)`};
    color: ${props => props.theme.body};
    width: 15rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 74% 100%, 27% 99%);
    font-size: ${props => props.theme.fontmd};
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

export const MenuItems = styled(motion.ul)`
    position: relative;
    height: ${props => props.theme.navHeight};
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 10rem;
`;

export const MenuItem = styled(motion.li)`
    text-transform: uppercase;
    color: ${props => props.theme.text};
    cursor: pointer;
`;