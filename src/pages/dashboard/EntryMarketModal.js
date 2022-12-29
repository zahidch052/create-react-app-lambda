import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';

const EntryMarketModal = (props) => {
    return (
        <ModalComponent
            size="lg"
            show={true}
            handleClose={props.entryMarketModalHandler}
            title="Entry Market"
        >
            <Modal.Body className="overflow" style={{ overflow: "auto", height: "75vh", overflowX: "hidden" }}>

                <div className="row">
                    <div className="col-lg-6">
                        <p className='modalLabels'>Account</p>
                        <select name="" id="" className='selectDropdowns'>
                            <option value="">Account</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <p className='modalLabels'>Symbol</p>
                        <select name="" id="" className='selectDropdowns'>
                            <option value="">Symbol</option>
                        </select>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="d-flex gap-1 justify-content-end me-4 mt-4">
                            <input type="checkbox" id="market" className="modalChecbox"/>
                        <label for="market" class="checkboxLabel fs-12 fw-500">Market</label>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="d-flex gap-1 ms-4 mt-4">
                            <input type="checkbox" id="order" className="modalChecbox"/>
                        <label for="order" class="checkboxLabel fs-12 fw-500">Pending Order</label>
                        </div>
                    </div>

                    <div className="col-12 mt-2 mb-1">
                        <div style={{ borderBottom: "2px solid #ECB01C" }}></div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-4">
                        <p className='modalLabels'>Account</p>
                        <input type="text" className='selectDropdowns' placeholder="Add Price" id="" />
                    </div>

                    <div className="col-lg-4 col-md-4 col-4">
                        <p className='modalLabels'>Pending Order Price</p>
                        <input type="text" className='selectDropdowns' placeholder="Add Price" id="" />
                    </div>

                    <div className="col-lg-4 col-md-4 col-4">
                        <p className='modalLabels'>TP</p>
                        <input type="text" className='selectDropdowns' placeholder="Add Price" id="" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="d-flex gap-1 justify-content-end me-4 mt-4">
                            <input type="checkbox" id="buyLimit" className="modalChecbox"/>
                        <label for="buyLimit" class="checkboxLabel fs-12 fw-500">Buy Limit</label>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="d-flex gap-1 ms-4 mt-4">
                            <input type="checkbox" id="buyStop" className="modalChecbox"/>
                        <label for="buyStop" class="checkboxLabel fs-12 fw-500">Buy Stop</label>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="d-flex gap-1 justify-content-end me-4 mt-4">
                            <input type="checkbox" id="sellLimit" className="modalChecbox"/>
                        <label for="sellLimit" class="checkboxLabel fs-12 fw-500">Sell Limit</label>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-6">
                        <div className="d-flex gap-1 ms-4 mt-4">
                            <input type="checkbox" id="sellStop" className="modalChecbox"/>
                        <label for="sellStop" class="checkboxLabel fs-12 fw-500">Sell Stop</label>
                        </div>
                    </div>
                    
                    <div className="col-8 mt-2">
                        <p className='modalLabels'>Comment</p>
                        <textarea name="" placeholder='Comment' className='selectDropdowns' cols="30" rows="10"></textarea>
                    </div>

                    <div className="col-lg-4 col-md-4 col-4 mt-2">
                        <p className='modalLabels'>Expiration</p>
                        <input type="date" className='selectDropdowns' id="" />
                    </div>

                    <div className="col-12 mt-3">
                        <div style={{ borderBottom: "2px solid #ECB01C" }}></div>
                    </div>

                    <div className="col-12 mt-3 mb-3">
                        <div className='row justify-content-center'>
                            <div className='col-4'>
                                <div>
                                    <p className='fs-14 fw-500' style={{ marginLeft: "55px" }}>Sell</p>
                                    <h2 className='fs-32 fw-600' style={{ color: "#EC1C1C" }}>1245.05</h2>
                                </div>
                                <SaveButton label="Sell" buttonStyle="sell-btn mt-4" />
                            </div>
                            <div className='col-2'>
                                <p className='fs-14 fw-500 text-center'>Quantity</p>
                                <select name="" id="" className='selectDropdowns'>
                                    <option value="">0.01</option>
                                </select>
                            </div>
                            <div className='col-4'>
                                <div>
                                    <p className='fs-14 fw-500 text-end' style={{
                                        marginRight: "60px"
                                    }}>Buy</p>
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

export default EntryMarketModal