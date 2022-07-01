import styled from "styled-components";

import Package from "../../../../package.json";

const Title = styled.span`
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: calc(var(--book-scale) * 0.008);
`

const Version = styled.span`
    text-align: right;
    font-weight: bold;
`

const Topic = styled.span`
    color: #555;
    font-size: calc(var(--book-scale) * 0.034);
`;

const Header = () => <><Title>What's New</Title> <Version>({Package.version})</Version></>
const Changelog = () => <a href="https://github.com/thiagoausechi/minecraft-categorizer/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer">changelog</a>;
const Footer = () => <span>For more detailed information, visit: <Changelog />.</span>;

const News = [
    <Header />,
    "",
    <Topic>• You can now search by checked items</Topic>,
    <Topic>• Fixed an error when using filters in the search bar </Topic>,
    <Topic>• Replaced "notBlock" with "isItem"</Topic>,
    <Topic>• "Dirt Path" is now tagged as Creative Only</Topic>,
    <Topic>• Selected Items are now cleared when changing Presets</Topic>,
    "",
    "",
    "",
    <Footer />
];

export default News;