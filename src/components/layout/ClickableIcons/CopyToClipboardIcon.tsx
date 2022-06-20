import ClickableIcon from ".";

import Icon from "../../../assets/img/clipboard.png";
import Hover from "../../../assets/img/clipboard_hover.png";

const copyToClipboard = (data: object) => navigator.clipboard.writeText(JSON.stringify(data, null, "\t"))

export const CopyToClipboardIcon: React.FC<{ data: any }> = ({ data }) =>
    <ClickableIcon
        title="Copy Configuration to Clipboard"
        icon={Icon}
        hover={Hover}
        active={Icon}
        activated={false}
        onClick={() => copyToClipboard(data)}
    />