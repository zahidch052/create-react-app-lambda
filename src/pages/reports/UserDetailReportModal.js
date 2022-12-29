import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Dropdown, Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';
import ToggleSlide from '../../components/ToggleSlide/ToggleSlide';

const UserDetailReportModal = (props) => {
    return (
        <>
            <ModalComponent
                size="xl"
                show={true}
                handleClose={props.moneyTransactionModalHandler}
                title="Users Details Report"
            >
                <Modal.Body className="overflow">
                    <div className="row">
                        <div className="col-md-7">
                            <div className='d-flex align-items-center gap-4'>
                                <p className='fs-24 fs-500 yellow w-100'>Desired Node</p>
                                <select name="" id="" className='w-100'></select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <ToggleSlide className="Big" />
                        </div>
                        <div className="col-md-3">
                            <div className='d-flex align-items-center gap-3'>
                                <input type="checkbox" id="demoAccount" className='modalChecbox' />
                                <label for="demoAccount" className='checkboxLabel fs-20 fw-500 black'>With Demo Accounts </label>
                            </div>
                        </div>

                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6 mt-4">
                            <div className='d-flex gap-5'>
                                <SaveButton label="Request Report" buttonStyle="yellow-btn" />
                                <SaveButton label="Close" buttonStyle="yellowOutline-btn w-100" />
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </ModalComponent >
        </>
    )
}

export default UserDetailReportModal