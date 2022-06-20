import Bold from "./Bold";
import Italic from "./Italic";

export interface TextType
{
    italic?: boolean;
    bold?: boolean;
    children: any
}

const Text: React.FC<TextType> = ({ italic, bold, children }) =>
    <Italic enabled={italic}>
        <Bold enabled={bold}>
            {children}
        </Bold>
    </Italic>

export default Text;