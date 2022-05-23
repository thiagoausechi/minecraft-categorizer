import styled from "styled-components";
import { useEffect } from "react";

import Package from "../../../../package.json";

import Container from "./Container";
import Content from "./Content";

import LogoSrc from "../../../assets/img/title.png";

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
                <Logo src={LogoSrc} alt={"Logo"} />
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
    margin-bottom: 15px;
`

const Logo = styled.img`
    height: 100px;

    @media screen and (max-width: 1023px)
    {
        height: 75px;
    }

    @media screen and (max-width: 600px)
    {
        height: 15vw;
    }
`

const Credits = () => <h5>Created by <Creator />.</h5>;
const Creator = () => <a href="https://github.com/thiagoausechi" target="_blank" rel="noreferrer">Thiago Ausechi</a>;
const Disclaimer = () => <h5>"Minecraft"™ is a trademark of Mojang Synergies AB. <br />We are not affiliate with Mojang.</h5>;
const Version = () => <h5>{Package.version}</h5>;

export default Page;