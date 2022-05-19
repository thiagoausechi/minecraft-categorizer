import Panel from "./Panel";

interface Props
{
    title?: string,
    min?: string,
    max?: string,
    children?: string | number | JSX.Element | JSX.Element[],
};

const GuiPanel: React.FC<Props> = ({ title, min, max, children }) =>
{
    return (
        <Panel min={min} max={max}>
            {!title ? null : <Panel.Title>{title}</Panel.Title>}
            {children || ""}
        </Panel>
    );
}

export default GuiPanel;