import React from 'react'
import { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import ClientScriptPolicyModal from './ClientScriptPolicyModal';

const CreateNewUser = () => {

    const [showClientScriptModal, setShowClientScriptModal] = useState();
    const clientScriptModalHandler = () => {
        setShowClientScriptModal((prev) => !prev)
    }
    return (
        <>
            <div class="container-fluid">
                <div className="row">
                    <div className="col-lg-11 pb-3" style={{ height: "100vh", overflow: "auto" }}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Row>
                                <Col sm={11} className="bg-white" style={{ borderBottom: "1px solid #979797A1" }}>
                                    <Nav variant="pills" className="flex-row tabsStyling " >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Mandatory Fields</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Account Information</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Policies</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Percentage Shares</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">Yes/No Properties</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sixth">Contact Information</Nav.Link>
                                        </Nav.Item><Nav.Item>
                                            <Nav.Link eventKey="seventh">Others</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={11} className="bg-white">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="row">
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>First Name</labels>
                                                    <input type="text" className='inputFileds' placeholder='Enter First Name' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Last Name</labels>
                                                    <input type="text" className='inputFileds' placeholder='Enter Last Name' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>UserName</labels>
                                                    <input type="text" className='inputFileds' placeholder='Enter UserName' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Password</labels>
                                                    <input type="password" className='inputFileds' placeholder='Enter Password' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Confirm Password</labels>
                                                    <input type="text" className='inputFileds' placeholder='Enter Confirm Password' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Country</labels>
                                                    <select className='inputFileds' >
                                                        <option value="">Select Country</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Scripts Policy</labels>
                                                    <select className='inputFileds' >
                                                        <option value="">Select Scripts Policy</option>
                                                    </select>
                                                    <labels className='tabsLabels cursor' onClick={() => clientScriptModalHandler()}>Edit Client’s Scripts Policies</labels>
                                                </div>
                                                {showClientScriptModal &&
                                                    <ClientScriptPolicyModal clientScriptModalHandler={clientScriptModalHandler} />
                                                }
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Gen. Policy</labels>
                                                    <select className='inputFileds' >
                                                        <option value="">SelecGen  Policy</option>
                                                    </select>
                                                    <labels className='tabsLabels'>Edit Client’s Generic Policies</labels>
                                                </div>

                                                <div className="col-lg-12 mt-5 mb-4">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4">
                                                            <Button label="Submit" buttonStyle="yellow-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="row">
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>First Name</labels>
                                                    <input type="text" className='inputFileds' placeholder='Enter First Name' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Last Name</labels>
                                                    <input type="text" className='inputFileds' placeholder='Enter Last Name' />
                                                </div>
                                                <div className="col-lg-4"></div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Password</labels>
                                                    <input type="password" className='inputFileds' placeholder='Enter Password' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>UserName</labels>
                                                    <input type="password" className='inputFileds' placeholder='Enter UserName' />
                                                </div>
                                                <div className="col-lg-4"></div>

                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Trading Type</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Margin Trading</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Account Id</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Auto Generated</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 mt-5 mb-4">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4">
                                                            <Button label="Submit" buttonStyle="yellow-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="row">
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Scripts Policy</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Scripts Policy</option>
                                                    </select>
                                                    <labels className='tabsLabels'>Edit Client’s Scripts Policies</labels>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Gen, Policy</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Gent Policy</option>
                                                    </select>
                                                    <labels className='tabsLabels'>Edit Client’s Generic Policies</labels>
                                                </div>
                                                <div className="col-4"></div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Robo Policy</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Robo Policy</option>
                                                    </select>
                                                    <labels className='tabsLabels'>Edit Robo Dealer Policies</labels>

                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Copier Policy</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Copier Policy</option>
                                                    </select>
                                                    <labels className='tabsLabels'>Edit Account Copier</labels>
                                                </div>
                                                <div className="col-4"></div>

                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Agent Policy</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Agent Policy</option>
                                                    </select>
                                                    <labels className='tabsLabels'>Edit Agent Commision Policies</labels>
                                                </div>
                                                <div className="col-lg-12 mt-5 mb-4">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4">
                                                            <Button label="Submit" buttonStyle="yellow-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <div className="row">
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Admin</labels>
                                                    <input type="text" className='inputFileds' placeholder='100.00' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Super Master</labels>
                                                    <input type="text" className='inputFileds' placeholder='100.00' />
                                                </div>
                                                <div className="col-lg-4"></div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Master</labels>
                                                    <input type="text" className='inputFileds' placeholder='100.00' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Agent</labels>
                                                    <input type="text" className='inputFileds' placeholder='100.00' />
                                                </div>

                                                <div className="col-lg-12 mt-5 mb-4">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4">
                                                            <Button label="Submit" buttonStyle="yellow-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                            <div className="row">
                                                <div className="col-lg-4 pe-lg-0">
                                                    <div className='d-flex gap-3'>
                                                        <div className=" mt-2">
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="locked" className="modalChecbox" />
                                                                <label for="locked" className="checkboxLabel fs-12 fw-500">Locked</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="Ignore Change Password" className="modalChecbox" />
                                                                <label for="Ignore Change Password" className="checkboxLabel fs-12 fw-500">Ignore Change Password</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="Force Change Password" className="modalChecbox" />
                                                                <label for="Force Change Password" className="checkboxLabel fs-12 fw-500">Force Change Password</label>
                                                            </div>
                                                        </div>
                                                        <div className=" mt-2">
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="Demo" className="modalChecbox" />
                                                                <label for="Demo" className="checkboxLabel fs-12 fw-500">Demo</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="Office" className="modalChecbox" />
                                                                <label for="Office" className="checkboxLabel fs-12 fw-500">Office</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="Multi Session" className="modalChecbox" />
                                                                <label for="Multi Session" className="checkboxLabel fs-12 fw-500">Multi Session</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 pe-lg-0">
                                                    <div className='d-flex'>
                                                        <div className=" mt-2">
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="ValidateMoney" className="modalChecbox" />
                                                                <label for="ValidateMoney" className="checkboxLabel fs-12 fw-500">Validate Money Before Entry Order</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="Validatemoney" className="modalChecbox" />
                                                                <label for="Validatemoney" className="checkboxLabel fs-12 fw-500">Validate money Before Close</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="ClientPrice" className="modalChecbox" />
                                                                <label for="ClientPrice" className="checkboxLabel fs-12 fw-500">Client Price Execution</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className='d-flex gap-3'>
                                                        <div className=" mt-2">
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="CantransferMoney" className="modalChecbox" />
                                                                <label for="CantransferMoney" className="checkboxLabel fs-12 fw-500">Can transfer Money</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="CanTransferPosition" className="modalChecbox" />
                                                                <label for="CanTransferPosition" className="checkboxLabel fs-12 fw-500">Can Transfer Position</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="CloseOnly" className="modalChecbox" />
                                                                <label for="CloseOnly" className="checkboxLabel fs-12 fw-500">Close Only</label>
                                                            </div>
                                                        </div>
                                                        <div className=" mt-2">
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="NoSellAtLess" className="modalChecbox" />
                                                                <label for="NoSellAtLess" className="checkboxLabel fs-12 fw-500">No Sell At Less</label>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <input type="checkbox" id="EnableWithdrewRequest" className="modalChecbox" />
                                                                <label for="EnableWithdrewRequest" className="checkboxLabel fs-12 fw-500">Enable Withdrew Request</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-lg-12 mt-5 mb-4">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4">
                                                            <Button label="Submit" buttonStyle="yellow-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixth">
                                            <div className="row">
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Email</labels>
                                                    <input type="email" className='inputFileds' placeholder='Email' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Tele Pass</labels>
                                                    <input type="text" className='inputFileds' placeholder='Enter Tele Pass' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Mobile</labels>
                                                    <input type="number" className='inputFileds' placeholder='Enter Mobile Number' />
                                                </div>
                                                <div className="col-lg-8 mt-3">
                                                    <labels className='tabsLabels'>Address</labels>
                                                    <input type="text" className='inputFileds' placeholder='Enter Address' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Country</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Select Country</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 mt-5 mb-4">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4">
                                                            <Button label="Submit" buttonStyle="yellow-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="seventh">
                                            <div className="row">
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Block Trade</labels>
                                                    <input type="text" className='inputFileds' placeholder='Block Frequent Trade ' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Cur Sign</labels>
                                                    <input type="text" className='inputFileds' placeholder='Add Sign' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Acc Prefix</labels>
                                                    <input type="number" className='inputFileds' placeholder='Add Acc Prefix' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Loan %</labels>
                                                    <input type="number" className='inputFileds' placeholder='0' />
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Base Currency</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Select Country</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 mt-5 mb-4">
                                                    <div className="row justify-content-center">
                                                        <div className="col-lg-4">
                                                            <Button label="Submit" buttonStyle="yellow-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateNewUser