import Panel from "./Panel";

interface Props
{
    title?: string,
    fullWidth?: boolean,
    children?: string | number | JSX.Element | JSX.Element[],
};

const GuiPanel: React.FC<Props> = ({ title, fullWidth, children }) =>
{
    return (
        <Panel fullWidth={fullWidth}>
            {!title ? null : <Panel.Title>{title}</Panel.Title>}
            {children || ""}
        </Panel>
    );
}

export default GuiPanel;