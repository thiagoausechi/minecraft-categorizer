import styled from "styled-components";
import { MessageProps } from "./types";
import Text from "../Text";

const TooltipTitle = styled.div<{ color?: string }>`
    color: ${p => p.color || "white"};
    display: block;
    font-size: 14px;
    margin-top: 4px;
    padding-left: 3px;
`;

const Title: React.FC<{ title: MessageProps }> = ({ title }) =>
    <TooltipTitle>
        <Text italic={title.italic} bold={title.bold}>
            {title.msg}
        </Text>
    </TooltipTitle>;

export default Title;