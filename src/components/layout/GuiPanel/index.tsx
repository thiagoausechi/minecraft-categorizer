import Panel from "./Panel";

interface Props
{
    title?: string,
    min?: string,
    max?: string,
    fitContent?: boolean,
    children?: string | number | JSX.Element | JSX.Element[],
};

const GuiPanel: React.FC<Props> = ({ title, min, max, fitContent, children }) =>
{
    return (
        <Panel min={min} max={max} fitContent={fitContent}>
            {!title ? null : <Panel.Title>{title}</Panel.Title>}
            {children || ""}
        </Panel>
    );
}

export default GuiPanel;