const Italic: React.FC<{ enabled?: boolean, children: any }> = ({ enabled, children }) =>
    !enabled ? children : <i>{children}</i>

export default Italic;