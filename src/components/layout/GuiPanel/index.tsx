import { GuiPanelProps } from "./types";

import Panel from "./Panel";

const GuiPanel: React.FC<GuiPanelProps> = ({ title, fullWidth, children }) =>
{
    return (
        <Panel fullWidth={fullWidth}>
            {!title ? null : <Panel.Title>{title}</Panel.Title>}
            {children || ""}
        </Panel>
    );
}

export default GuiPanel;