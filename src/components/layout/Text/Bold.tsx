const Bold: React.FC<{ enabled?: boolean, children: any }> = ({ enabled, children }) =>
    !enabled ? children : <strong>{children}</strong>

export default Bold;