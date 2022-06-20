import Modal from "react-modal";

Modal.setAppElement("#root");

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
        padding: "15px",
        border: "0px",
        borderRadius: "0px",
        backgroundColor: "#C6C6C6",
        boxShadow: "\
         8px   0px 0px 0px #555555,\
         0px   8px 0px 0px #555555,\
         4px   4px 0px 0px #555555,\
        -8px   0px 0px 0px #e8e8e8,\
         0px  -8px 0px 0px #e8e8e8,\
        -4px  -4px 0px 0px #e8e8e8,\
         4px   8px 0px 0px #555555,\
         8px   4px 0px 0px #555555,\
        -4px  -8px 0px 0px #e8e8e8,\
        -8px  -4px 0px 0px #e8e8e8,\
         0px   0px 0px 4px #B5B4B5,\
         8px  -4px 0px 0px #000000,\
         4px  -8px 0px 0px #000000,\
        -8px   4px 0px 0px #000000,\
        -4px   8px 0px 0px #000000,\
        -8px  -8px 0px 0px #000000,\
         8px   8px 0px 0px #000000,\
        -12px  0px 0px 0px #000000,\
        -12px -4px 0px 0px #000000,\
         12px  0px 0px 0px #000000,\
         12px  4px 0px 0px #000000,\
         0px -12px 0px 0px #000000,\
        -4px -12px 0px 0px #000000,\
         0px  12px 0px 0px #000000,\
         4px  12px 0px 0px #000000",
        transform: "translate(-50%, -50%)"
    }
};

export default ModalBox;