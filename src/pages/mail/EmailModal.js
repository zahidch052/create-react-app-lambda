import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';

const EmailModal = (props) => {
    return (
        <>
            <ModalComponent
                size="lg"
                show={true}
                handleClose={props.emailModalHandler}
                title="Email"
            >
                <Modal.Body className="overflow">

                    <div className="row ps-4 pe-4">
                        <div className="col-lg-6 mt-2">
                            <p className='modalLabels'>To </p>
                            <select name="" id="" className='selectDropdowns'>
                                <option value="">Select Transaction Type</option>
                            </select>
                        </div>
                        <div className="col-lg-6 mt-2">
                            <p className='modalLabels'>From</p>
                            <input type="text" placeholder='Enter Amount' className='selectDropdowns' />
                        </div>

                        <div className="col-lg-12 mb-5 mt-2">
                            <p className='modalLabels'>Massege</p>
                            <textarea placeholder='Add Comment' className='selectDropdowns'></textarea>
                        </div>


                        <div className="col-12 mt-3 mb-3 mt-5">
                            <div className='d-flex gap-2 align-items-center'>
                                <SaveButton label="Close" buttonStyle="yellowOutline-btn w-100" />
                                <SaveButton label="Sent" buttonStyle="yellow-btn w-100" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </ModalComponent >
        </>
    )
}

export default EmailModal