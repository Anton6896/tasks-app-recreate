import {Modal, Button} from "react-bootstrap";

const DeleteModal = ({task, showModal, showModalSwitch}) => {

    const onDelete = () => {
        // todo delete task logic
        console.log('todo delete ' + task.id)
        showModalSwitch()
    }

    return (
        <Modal show={showModal}
               onHide={showModalSwitch}
               backdrop="static"
               keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={showModalSwitch}>
                    Close
                </Button>
                <Button variant="danger" onClick={onDelete}>delete</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
