import React from 'react'
import ModalComponent from '../../components/Modal/Modal'
import { Button, ButtonGroup, Dropdown, Modal } from "react-bootstrap";
import SaveButton from '../../components/Button/Button';
import ToggleSlide from '../../components/ToggleSlide/ToggleSlide';

const OpenHistoryReportModal = (props) => {
    return (
        <>
            <ModalComponent
                size="xl"
                show={true}
                handleClose={props.moneyTransactionModalHandler}
                title="Open History Report"
            >
                <Modal.Body className="overflow">
                    <div className="row">
                        <div className="col-md-7">
                            <div className='d-flex align-items-center gap-4'>
                                <p className='fs-24 fs-500 yellow w-100'>Desired Node</p>
                                <select name="" id="" className='w-100'></select>
                            </div>
                            <div className='d-flex align-items-center gap-4 mt-3'>
                                <p className='fs-24 fs-500 yellow w-100'>Script</p>
                                <select name="" id="" className='w-100'></select>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='d-flex align-items-center gap-3 '>
                                <div className='d-flex align-items-center gap-3 '>
                                    <ToggleSlide className="Big" />
                                    <div className='d-flex align-items-center gap-3'>
                                        <input type="checkbox" id="demoAccount" className='modalChecbox' />
                                        <label for="demoAccount" className='checkboxLabel fs-14 fw-500 black'>With Demo Accounts </label>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <input type="checkbox" id="demoAccount" className='modalChecbox' />
                                    <label for="demoAccount" className='checkboxLabel fs-14 fw-500 black'>Ignore Full Zero
                                        Commission</label>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-4 mt-3'>
                                <p className='fs-24 fs-500 yellow'>Type</p>
                                <Dropdown as={ButtonGroup}>
                                    <Button className='reportModalButtonGroupDropdown w-100'>All</Button>
                                    <Dropdown.Toggle className='groupDropdownToggle' />
                                    <Dropdown.Menu className="super-colors">
                                        <Dropdown.Item eventKey="1">All</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Buy</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" active>
                                            Sell
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="col-md-12 mt-3">
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className='d-flex align-items-center gap-3 mb-2'>
                                <div>
                                    <input type="checkbox" id="fromBegning" className='modalChecbox' />
                                    <label for="fromBegning" className='checkboxLabel fs-20 fw-500 yellow'></label>
                                </div>
                                <p className='fs-20 fw-500 yellow'>From Beginning</p>
                            </div>
                            <div>
                                <label htmlFor="" className='fs-14 fw-500 black mb-2'>From Date</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='reportModalDropdown'>
                                        2022-12-19 00:00:00
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <div className='d-flex align-items-center gap-3 mb-2'>
                                <div>
                                    <input type="checkbox" id="fromBegning" className='modalChecbox' />
                                    <label for="fromBegning" className='checkboxLabel fs-20 fw-500 yellow'></label>
                                </div>
                                <p className='fs-20 fw-500 yellow'>Till Now</p>
                            </div>
                            <div>
                                <label htmlFor="" className='fs-14 fw-500 black mb-2'>To Date</label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='reportModalDropdown'>
                                        2022-12-19 00:00:00
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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

export default OpenHistoryReportModal