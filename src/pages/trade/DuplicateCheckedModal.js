import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';

const DuplicateCheckedModal = (props) => {
    return (
        <ModalComponent
            size="lg"
            show={true}
            handleClose={props.duplicateCheckedModalHandler}
            title="Duplicate Checked"
        >
            <Modal.Body className="overflow" style={{ height: "80vh" }}>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <label className='modalLabels'>Account</label>
                        <select name="" id="" className='selectDropdowns'>
                            <option value="">Account</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label className='modalLabels'>Symbol</label>
                        <select name="" id="" className='selectDropdowns'>
                            <option value="">Symbol</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6 col-5">
                        <div className='d-flex gap-1 justify-content-end me-4 mt-4'>
                            <div>
                                <input type="checkbox" id="duplicatemarket" className='modalChecbox' />
                                <label for="duplicatemarket" className='checkboxLabel fs-13 fw-400 grey'>Market </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-7">
                        <div className='d-flex gap-1 ms-4 mt-4'>
                            <div>
                                <input type="checkbox" id="duplicatemarket" className='modalChecbox' />
                                <label for="duplicatemarket" className='checkboxLabel fs-13 fw-400 grey'>Pending Order</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-2 mb-1">
                        <div style={{ borderBottom: "1px solid #ECB01C" }}></div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-2">
                        <label className='modalLabels'>Comment</label>
                        <input type="text" placeholder='Add Price' className='selectDropdowns' />
                    </div>
                    <div className="col-lg-4 col-md-6 mt-2">
                        <label className='modalLabels'>TP</label>
                        <input type="text" placeholder='Add Price' className='selectDropdowns' />
                    </div>
                    <div className="col-lg-4 col-md-12 mt-2">
                        <label className='modalLabels'>Pending Order Price</label>
                        <input type="text" placeholder='Add Price' className='selectDropdowns' />
                    </div>
                    <div className="col-lg-8 col-md-8 mt-3">
                        <label className='modalLabels'>Comment</label>
                        <textarea name="" placeholder='Comment' className='selectDropdowns' cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-3">
                        <label className='modalLabels'>Expiration</label>
                        <input type="date" className='selectDropdowns' />
                    </div>
                    <div className="col-12 mt-3">
                        <div style={{ borderBottom: "1px solid #ECB01C" }}></div>
                    </div>

                    <div className="col-lg-12 mt-3 mb-3">
                        <div className='row justify-content-center'>
                            <div className='col-lg-4 col-md-4 col-4'>
                                <div>
                                    <label className='fs-14 fw-500' style={{ marginLeft: "55px" }}>Sell</label>
                                    <h2 className='fs-32 fw-600' style={{ color: "#EC1C1C" }}>1245.05</h2>
                                </div>
                                <SaveButton label="Sell" buttonStyle="sell-btn mt-4" />
                            </div>
                            <div className='col-lg-2 col-md-2 col-4'>
                                <label className='fs-14 fw-500 text-center'>Quantity</label>
                                <select name="" id="" className='selectDropdowns'>
                                    <option value="">0.01</option>
                                </select>
                            </div>
                            <div className='col-lg-4 col-md-4 col-4'>
                                <div>
                                    <label className='fs-14 fw-500 text-end' style={{
                                        marginRight: "60px"
                                    }}>Buy</label>
                                    <h2 className='fs-32 fw-600 text-end me-3' style={{ color: "#201CEC" }
                                    } > 1256.05</h2>
                                </div>
                                <SaveButton label="Buy" buttonStyle="Buy-btn mt-4" />

                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </ModalComponent >
    )
}

export default DuplicateCheckedModal