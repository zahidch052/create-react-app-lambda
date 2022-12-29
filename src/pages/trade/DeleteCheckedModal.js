import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';

const DeleteCheckedModal = (props) => {
    return (
        <ModalComponent
            size="md"
            show={true}
            handleClose={props.deleteCheckedModalHandler}
            title="Trade"
        >
            <Modal.Body >
                <div className="row ps-4 pe-4">
                    <div className="col-lg-12">
                        <p className="fs-18 fw-550" >Do You Want To Delete Checked Trades</p>

                        <div className='d-flex gap-5 ms-4 me-4 mt-5'>
                            <SaveButton label="No" buttonStyle="yellowOutline-btn w-100 ps-4 pe-4 pt-2 pb-2" />
                            <SaveButton label="Yes" buttonStyle="yellow-btn ps-4 pe-4" />
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </ModalComponent >
    )
}

export default DeleteCheckedModal