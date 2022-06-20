import styled from "styled-components";
import { useEffect } from "react";

import Package from "../../../../package.json";

import Container from "./Container";
import Content from "./Content";

import LogoSrc from "../../../assets/img/title.png";
import Clickable from "../../layout/Clickable";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../../lib/hooks/useWindowDimensions.hook";

import { isDevEnv } from "../../../lib/dev";
import { HOME_ROUTE } from "../../../lib/routes";
import { MC_VERSION } from "../../../lib/MinecraftItems";

interface Props
{
    title: string
    content: string | number | JSX.Element | JSX.Element[];
};

const Page: React.FC<Props> = ({ title, content }) =>
{
    const { width, height, vh } = useWindowDimensions();
    const navigate = useNavigate();

    useEffect(() =>
    {
        document.title = `Minecraft Categorizer | ${title}`;
    }, [title]);

    return (
        <Container>
            {!isDevEnv ? null :
                <p style={{
                    textAlign: "center",
                    position: "fixed",
                    top: "10px",
                    left: "10px"
                }}
                >
                    {width}x{height}
                </p>
            }

            <Header>
                <Clickable onClick={() => navigate(HOME_ROUTE)}>
                    <Logo src={LogoSrc} alt={"Logo"} />
                </Clickable>
            </Header>

            <Content vh={vh}>
                {content}
            </Content>

            <footer>
                <Credits />
                <Disclaimer />
                <McVersion />
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

    @media screen and (max-width: 1075px)
    {
        height: 75px;
    }

    @media screen and (max-width: 600px)
    {
        height: 15vw;
    }
`

const Credits    = () => <h5>Created by <Creator />.</h5>;
const Creator    = () => <a href="https://github.com/thiagoausechi" target="_blank" rel="noreferrer">Thiago Ausechi</a>;
const Disclaimer = () => <h5>"Minecraft"™ is a trademark of Mojang Synergies AB. <br />We are not affiliate with Mojang.</h5>;
const McVersion  = () => <h5>Using Minecraft {MC_VERSION} Items</h5>
const Version    = () => <h5>{Package.version}</h5>;

export default Page;