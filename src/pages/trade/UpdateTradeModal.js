import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';

const UpdateTrade = (props) => {
    return (
        <ModalComponent
            size="lg"
            show={true}
            handleClose={props.updateTradeModalHandler}
            title="Update Trade"
        >
            <Modal.Body >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-6">
                        <div>
                            <label className='modalLabels mt-2'>Account</label>
                            <div>
                                <select name="" id="" className="inputFileds">
                                    <option value="">Account</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <div>
                            <label className='modalLabels mt-2'>Symbol</label>
                            <div>
                                <select name="" id="" className="inputFileds">
                                    <option value="">Symbol</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                        <div>
                            <label className='modalLabels mt-2'>Type</label>
                            <div>
                                <select name="" id="" className="inputFileds">
                                    <option value="">Buy</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                        <div>
                            <label className='modalLabels mt-2'>Lot</label>
                            <div>
                                <select name="" id="" className="inputFileds">
                                    <option value="">0.1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                        <div>
                            <label className='modalLabels mt-2'>Price</label>
                            <div>
                                <input type="number" placeholder='98.90' className='inputFileds' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-8">
                        <div>
                            <label className='modalLabels mt-2'>Comment</label>
                            <div>
                                <textarea name="" placeholder='Comment' className='inputFileds' ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                        <div>
                            <label className='modalLabels mt-2'>Expiration</label>
                            <div>
                                <input type="date" className='inputFileds' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    <div className='col-lg-3 col-md-4 col-5 mt-5' >
                        <SaveButton label="Close" buttonStyle="yellowOutline-btn w-100" />
                    </div>
                    <div className="col-2"></div>
                    <div className='col-lg-3 col-md-4 col-5 mt-5' >
                        <SaveButton label="Submit" buttonStyle="yellow-btn" />
                    </div>
                </div>
            </Modal.Body>
        </ModalComponent >
    )
}

export default UpdateTrade