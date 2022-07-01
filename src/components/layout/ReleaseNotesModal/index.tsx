import React from "react";
import useLocalStorage from "../../../lib/hooks/useLocalStorage.hook";

import Package from "../../../../package.json";

import Modal from "../../containers/Modal";
import Book from "./Book";
import News from "./News";

const ReleaseNotesModal: React.FC = () =>
{
    const [lastVersion, setLastVersion] = useLocalStorage("last_version", { version: Package.version, display: true });

    if (lastVersion.version !== Package.version)
        setLastVersion({ version: Package.version, display: true });

    const closeModal = () => setLastVersion({ ...lastVersion, display: false });

    return (
        <Modal isOpen={lastVersion.display} onClose={closeModal} clearStyle>
            <Book>
                {News.map((line, i) =>
                    <React.Fragment key={i}>
                        {line}<br />
                    </React.Fragment>
                )}
            </Book>
        </Modal>
    );
};



export default ReleaseNotesModal;