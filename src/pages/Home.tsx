import { CoverVideo } from "../components/CoverVideo";
import { Logo } from "../components/Logo";
import { Navbar } from "../components/Navbar";
import { Section } from "../stylesheets/styles"

export const Home = () => {
    return (
        <Section>
            <CoverVideo />
            <Logo />
            <Navbar />
        </Section>
    );
};
