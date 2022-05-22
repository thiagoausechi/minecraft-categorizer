import styled from "styled-components";
import { MessageProps } from "./index";
import Text from "../Text";

const TooltipDescription = styled.div<{ color?: string, firstLine: boolean }>`
    color: ${p => p.color || "white"};
    display: block;
    font-size: 12px;
    margin-top: ${p => p.firstLine ? "3px" : ""};
    padding-left: 3px;
`;

const Description: React.FC<{ description: (MessageProps | null)[] }> = ({ description }) =>
{
    if (!description) return null;

    return <>
        {description.map((line, index) =>
        {
            if (!line) return null;
            return (
                <TooltipDescription key={index} color={line.color} firstLine={index === 0}>
                    <Text italic={line.italic} bold={line.bold}>
                        {line.msg}
                    </Text>
                </TooltipDescription>
            );
        })}
    </>
}

export default Description;