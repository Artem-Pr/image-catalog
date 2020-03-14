import React from 'react';
import {Button, Modal, ModalHeader, ModalFooter} from 'reactstrap';

interface IModalWindow {
    message: string,
    isOpen: boolean,
    setModal: any,
}

const ModalWindow = ({
                         message,
                         isOpen,
                         setModal,
                     }: IModalWindow) => {

    const toggle = () => setModal({
        open: !isOpen,
        message: ''
    });

    return (
        <div>
            <Modal isOpen={isOpen}>
                <ModalHeader>{message}</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Закрыть</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalWindow;