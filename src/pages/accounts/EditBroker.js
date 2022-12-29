import React from 'react'
import { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import Searchbar from "../../components/SearchBar/SearchBar"
import ClientScriptPolicyModal from './ClientScriptPolicyModal';
import "../../components/SearchBar/SearchBar.css"
import "./Accounts.css"

import Accordion from 'react-bootstrap/Accordion';
import { searchAsset, searchGreyAsset } from '../../assets';

const EditBroker = () => {
    const [showClientScriptModal, setShowClientScriptModal] = useState();
    const clientScriptModalHandler = () => {
        setShowClientScriptModal((prev) => !prev)
    }
    return (
        <>
            <div class="container-fluid">
                <div className="row">
                    <div className="col-lg-11" style={{ height: "100vh", overflow: "auto" }}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Row>
                                <Col sm={11} className="bg-white" style={{ borderBottom: "1px solid #979797A1" }}>
                                    <Nav variant="pills" className="flex-row tabsStyling " >
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Mandatory Fields</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Dealer Information</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Policies & Permissions</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Policies Can Control</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">Yes/No Properties</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={11} className="bg-white mb-5">
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
                                                    {/* <input type="password" className='inputFileds' placeholder='Margin Trading' /> */}
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
                                                    <labels className='tabsLabels'>Client Tree</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Client Tree</option>
                                                    </select>

                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <labels className='tabsLabels'>Dealers Tree</labels>
                                                    <select name="" id="" className='inputFileds'>
                                                        <option value="">Dealers Tree</option>
                                                    </select>
                                                </div>
                                                <div className="col-4"></div>
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
                                                    <Accordion defaultActiveKey={['0']} alwaysOpen className="policiesAccordians">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Can Control Client Scripts Policies</Accordion.Header>
                                                            <Accordion.Body>
                                                                <Searchbar icon={searchGreyAsset} placeholder="search by Policy name" searchClass="searchBarComponent" />
                                                                <div className='overflow' style={{ overflow: "auto", height: "130px" }}>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="clientscriptDemo" className="modalChecbox" />
                                                                        <label for="clientscriptDemo" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="clientscriptPolicy" className="modalChecbox" />
                                                                        <label for="clientscriptPolicy" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="clientscriptPolicy2" className="modalChecbox" />
                                                                        <label for="clientscriptPolicy2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="clientscriptDemo2" className="modalChecbox" />
                                                                        <label for="clientscriptDemo2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo2</labels>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <Accordion defaultActiveKey={['0']} alwaysOpen className="policiesAccordians">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Can Control Dealer Scripts Policies</Accordion.Header>
                                                            <Accordion.Body>
                                                                <Searchbar icon={searchGreyAsset} placeholder="search by Policy name" searchClass="searchBarComponent" />
                                                                <div className='overflow' style={{ overflow: "auto", height: "130px" }}>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="dealerScriptDemo" className="modalChecbox" />
                                                                        <label for="dealerScriptDemo" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="dealerScriptPolicy" className="modalChecbox" />
                                                                        <label for="dealerScriptPolicy" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="dealerScriptPolicy2" className="modalChecbox" />
                                                                        <label for="dealerScriptPolicy2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="dealerScriptDemo2" className="modalChecbox" />
                                                                        <label for="dealerScriptDemo2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo2</labels>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <Accordion defaultActiveKey={['0']} alwaysOpen className="policiesAccordians">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                Can Control Client Generic Policies
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <Searchbar icon={searchGreyAsset} placeholder="search by Policy name" searchClass="searchBarComponent" />
                                                                <div className='overflow' style={{ overflow: "auto", height: "130px" }}>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="clientGenericDemo" className="modalChecbox" />
                                                                        <label for="clientGenericDemo" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="clientGenericPolicy" className="modalChecbox" />
                                                                        <label for="clientGenericPolicy" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="clientGenericPolicy2" className="modalChecbox" />
                                                                        <label for="clientGenericPolicy2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="clientGenericDemo2" className="modalChecbox" />
                                                                        <label for="clientGenericDemo2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo2</labels>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <Accordion defaultActiveKey={['0']} alwaysOpen className="policiesAccordians">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                Can Control Dealer Generic Policies
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <Searchbar icon={searchGreyAsset} placeholder="search by Policy name" searchClass="searchBarComponent" />
                                                                <div className='overflow' style={{ overflow: "auto", height: "130px" }}>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="dealerGenericDemo" className="modalChecbox" />
                                                                        <label for="dealerGenericDemo" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="dealerGenericPolicy" className="modalChecbox" />
                                                                        <label for="dealerGenericPolicy" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="dealerGenericPolicy2" className="modalChecbox" />
                                                                        <label for="dealerGenericPolicy2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="dealerGenericDemo2" className="modalChecbox" />
                                                                        <label for="dealerGenericDemo2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo2</labels>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <Accordion defaultActiveKey={['0']} alwaysOpen className="policiesAccordians">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                Can Control Robo Policies
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <Searchbar icon={searchGreyAsset} placeholder="search by Policy name" searchClass="searchBarComponent" />
                                                                <div className='overflow' style={{ overflow: "auto", height: "130px" }}>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="roboDemo" className="modalChecbox" />
                                                                        <label for="roboDemo" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="roboPolicy" className="modalChecbox" />
                                                                        <label for="roboPolicy" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="roboPolicy2" className="modalChecbox" />
                                                                        <label for="roboPolicy2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="roboDemo2" className="modalChecbox" />
                                                                        <label for="roboDemo2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo2</labels>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                                <div className="col-lg-4 mt-3">
                                                    <Accordion defaultActiveKey={['0']} alwaysOpen className="policiesAccordians">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>
                                                                Can Control Account Copier Policies
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <Searchbar icon={searchGreyAsset} placeholder="search by Policy name" searchClass="searchBarComponent" />
                                                                <div className='overflow' style={{ overflow: "auto", height: "130px" }}>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="accDemo" className="modalChecbox" />
                                                                        <label for="accDemo" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="accPolicy" className="modalChecbox" />
                                                                        <label for="accPolicy" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="accPolicy2" className="modalChecbox" />
                                                                        <label for="accPolicy2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Policy</labels>
                                                                    </div>
                                                                    <div className='d-flex align-items-center gap-1 mt-2'>
                                                                        <input type="checkbox" id="accDemo2" className="modalChecbox" />
                                                                        <label for="accDemo2" className="checkboxLabel"></label>
                                                                        <labels className='fs-14 fw-500 grey'>Demo2</labels>
                                                                    </div>
                                                                </div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
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

export default EditBroker