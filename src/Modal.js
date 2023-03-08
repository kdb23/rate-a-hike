import {useState} from 'react'
import {Modal, Button} from 'react-bootstrap';


function ModalPopup ({show, handleModal}) {


    const handleClose = () =>handleModal(false);
    const handleShow = () => handleModal(true);

return(
    <>
    <div className="d-flex align-items-center justify-content-center" style={{height: "10vh"}}>
        </div>
    <Modal show ={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Congratulations Youve Submitted A Park </Modal.Title>
        </Modal.Header>
        <Modal.Body>Head Over To The Git-Away Hikes Homepage To See Your Park Submission </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
        </Modal>
        </>
)
}

export default ModalPopup