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

export const Title = styled.div`
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
        font-family: 'Sirin Stencil', sans-serif;
        font-size: ${props => props.theme.fontlg};
        text-shadow: 1px 1px 1px ${props => props.theme.body};
        text-transform: capitalize;
        text-align: center;
        font-weight: 400;
    }
`;
