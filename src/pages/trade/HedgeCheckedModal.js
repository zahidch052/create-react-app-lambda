import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';

const HedgeCheckedModal = (props) => {
    return (
        <ModalComponent
            size="lg"
            show={true}
            handleClose={props.hedgeCheckedModalHandler}
            title="SL/TP Oder(13232) User (Demo ABc)"
        >
            <Modal.Body className="overflow">

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <p className='modalLabels'>Account</p>
                        <select name="" id="" className='selectDropdowns'>
                            <option value="">Account</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <p className='modalLabels'>Symbol</p>
                        <select name="" id="" className='selectDropdowns'>
                            <option value="">Symbol</option>
                        </select>
                    </div>



                    <div className="col-lg-6 col-md-6 mt-2">
                        <div className="row">
                            <div className="col-8">
                                <p className='modalLabels'>SL</p>
                                <input type="text" placeholder='Add Price' className='selectDropdowns' />
                            </div>
                            <div className="col-4 d-flex align-items-end">
                                <p className='fs-20 fw-400'>  98.90</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 mt-2">
                        <div className="row">
                            <div className="col-8">
                                <p className='modalLabels'>TP</p>
                                <input type="text" placeholder='Add Price' className='selectDropdowns' />
                            </div>
                            <div className="col-4 d-flex align-items-end">
                                <p className='fs-20 fw-400'> 99.00</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-8 col-md-8 mt-3">
                        <p className='modalLabels'>Comment</p>
                        <textarea name="" placeholder='Comment' className='selectDropdowns' cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-3">
                        <p className='modalLabels'>Expiration</p>
                        <input type="date" className='selectDropdowns' />
                    </div>


                    <div className="col-12 mt-4 mb-3">
                        <div className='row justify-content-center'>
                            <div className="col-4">
                                <SaveButton label="Close" buttonStyle="yellowOutline-btn w-100" />
                            </div>
                            <div className="col-2"></div>
                            <div className="col-4">
                                <SaveButton label="Submit" buttonStyle="yellow-btn" />
                            </div>


                        </div>
                    </div>
                </div>
            </Modal.Body>
        </ModalComponent >
    )
}

export default HedgeCheckedModal