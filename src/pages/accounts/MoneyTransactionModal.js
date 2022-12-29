import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';

const MoneyTransactionModal = (props) => {
    return (
        <ModalComponent
            size="lg"
            show={true}
            handleClose={props.moneyTransactionModalHandler}
            title="Money Transaction"
        >
            <Modal.Body className="overflow">

                <div className="row ps-5 pe-5">
                    <div className="col-lg-6">
                        <p className='modalLabels'>Money Transaction Type</p>
                        <select name="" id="" className='selectDropdowns'>
                            <option value="">Select Transaction Type</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <p className='modalLabels'>Amount</p>
                        <input type="text" name="" id="" className='selectDropdowns' placeholder='Enter Amount' />
                    </div>
                    <div className="col-lg-12 mt-2">
                        <p className='modalLabels'>Comment</p>
                        <textarea name="" id="" className='selectDropdowns' placeholder='Add Comment' style={{ height: "80px" }}></textarea>
                    </div>
                    <div className="col-lg-6 mt-1">
                        <p className='modalLabels'> Transaction Date</p>
                        <select name="" id="" className='selectDropdowns'>
                            <option value="">Select Transaction Date</option>
                        </select>
                    </div>
                    <div className='col-lg-12 mt-5'>
                        <div className='d-flex gap-2'>
                            <SaveButton label="Close" buttonStyle="yellowOutline-btn w-100" />
                            <SaveButton label="Submit" buttonStyle="yellow-btn w-100" />
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </ModalComponent >
    )
}

export default MoneyTransactionModal