import { DarkOverlay, Title, VideoContainer } from "../stylesheets/styles"
import mainVideo from '../assets/video/Walking Girl.mp4';

export const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Title>
                <div>
                    <h1 data-scroll data-scroll-delay='.13' data-scroll-speed="4">W</h1>
                    <h1 data-scroll data-scroll-delay='.09' data-scroll-speed="4">i</h1>
                    <h1 data-scroll data-scroll-delay='.06' data-scroll-speed="4">b</h1>
                    <h1 data-scroll data-scroll-delay='.04' data-scroll-speed="4">e</h1>
                </div>
                <h2 data-scroll data-scroll-delay='.04' data-scroll-speed="2">Inspire. Create. Belive </h2>
            </Title>
            <video className="w-full h-screen object-cover" autoPlay loop muted playsInline src={mainVideo} />
        </VideoContainer>
    );
};
