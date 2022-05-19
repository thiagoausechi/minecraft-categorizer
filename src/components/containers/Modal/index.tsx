import Modal from "react-modal";

interface Props
{
    isOpen: boolean,
    onClose: any,
    content: any
};

const ModalBox: React.FC<Props> = ({ isOpen, onClose, content }) =>
{
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={styles}>
            {content}
        </Modal>
    );
}

const styles =
{
    overlay:
    {
        backgroundColor: "#000000CC",
    },

    content:
    {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        padding: "25px",
        backgroundColor: "#C6C6C6",
        border: "5px solid #000000",
        borderRadius: "15px",
        boxShadow: "inset 5px 5px 0px 0px #FFFFFFAD, inset -5px -5px 0px 0px #555555",
        transform: "translate(-50%, -50%)"
    }
};

export default ModalBox;