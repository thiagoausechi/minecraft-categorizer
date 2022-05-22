import styled from "styled-components";
import { useEffect } from "react";

import Package from "../../../../package.json";

import Container from "./Container";
import Content from "./Content";

import LogoSrc from "../../../assets/img/logo.png";

interface Props
{
    title: string
    content: string | number | JSX.Element | JSX.Element[];
};

const Page: React.FC<Props> = ({ title, content }) =>
{
    useEffect(() =>
    {
        document.title = `Minecraft Categorizer | ${title}`;
    }, [title]);

    return (
        <Container>
            <Header>
                <Logo src={LogoSrc} alt={"Site Logo"} />
                <Title />
            </Header>

            <Content>
                {content}
            </Content>

            <footer>
                <Credits />
                <Disclaimer />
                <Version />
            </footer>
        </Container>
    );
}

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
`

const Logo = styled.img`
    width: 40px;
    height: 40px;
`

const Title = () => <h1>Minecraft Categorizer</h1>
const Credits = () => <h5>Created by <Creator />.</h5>;
const Creator = () => <a href="https://github.com/thiagoausechi" target="_blank" rel="noreferrer">Thiago Ausechi</a>;
const Disclaimer = () => <h5>"Minecraft"™ is a trademark of Mojang Synergies AB. <br />We are not affiliate with Mojang.</h5>;
const Version = () => <h5>{Package.version}</h5>;

export default Page;