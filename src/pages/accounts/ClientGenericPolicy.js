import React from 'react'
import { Col, Dropdown, Nav, Row, Tab, Tabs } from 'react-bootstrap'
import { search2Asset, searchGreyAsset } from '../../assets'
import SaveButton from '../../components/Button/Button'
import ModalTableComponent from '../../components/table/ModalTable'

const ClientGenericPolicy = () => {
    return (
        <>
            <div class="row ps-3 pb-3">
                <div className="col-lg-12 pe-4" >
                    <div className="row" style={{ borderBottom: "1px solid #ECB01C" }}>
                        <div className="col-lg-12 ps-0">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={12}>
                                        <Row style={{ borderBottom: "1px solid #ECB01C" }}>
                                            <Col sm={4} className='d-flex align-items-center' style={{ borderRight: "1px solid #ECB01C" }}>
                                                <div className='d-flex gap-2 align-items-center' >
                                                    <div>
                                                        <input type="checkbox" id="PoliciesName" class="simpleyellowCheckbox" />
                                                        <label for="PoliciesName" class="simpleyellowCheckboxLabel"></label>
                                                    </div>
                                                    <p className='fs-13 fw-600'>Policies Name</p>
                                                </div>
                                            </Col>
                                            <Col sm={8} className="ps-0">
                                                <Nav variant="pills" className="flex-row modalTabs">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="first">General Properties</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="second">Trading Properties</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="third">Yes/No Properties</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>


                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col sm={4} style={{ borderRight: "1px solid #ECB01C" }}>
                                        <div className='d-flex gap-2 align-items-center mt-2' >
                                            <div>
                                                <input type="checkbox" id="demoPolicies" class="simpleyellowCheckbox" />
                                                <label for="demoPolicies" class="simpleyellowCheckboxLabel"></label>
                                            </div>
                                            <p className='fs-13 fw-600'>Demo Policies</p>
                                        </div>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first" className='pb-5'>
                                                <div className="row pb-5">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Policy Name</p>
                                                            <div>

                                                                <input type="text" name="" id="" className="inputFileds" placeholder="Enter Policy Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>GMT Offset</p>
                                                            <div>
                                                                <select name="" id="" className="inputFileds">
                                                                    <option value="">Enter Policy Name</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Slider News</p>
                                                            <div>

                                                                <input type="text" name="" id="" className="inputFileds" placeholder="Add the News That You Want To Show Your Client" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Statement Header</p>
                                                            <div>

                                                                <input type="text" name="" id="" className="inputFileds" placeholder="Add Statement header" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Statement Footer</p>
                                                            <div>

                                                                <input type="text" name="" id="" className="inputFileds" placeholder="Add Statement Footer" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second" className='pb-5'>
                                                <div className="row pb-5">
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Liquidation Type</p>
                                                            <div>
                                                                <select name="" id="" className="inputFileds">
                                                                    <option value="">Select Liquidation Type</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Liquidation Point</p>
                                                            <div>

                                                                <input type="text" name="" id="" className="inputFileds" placeholder="Enter Liquidation Point" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Margin Call Typer</p>
                                                            <div>
                                                                <select name="" id="" className="inputFileds">
                                                                    <option value="">Select Margin Call Type</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Margin Call Value</p>
                                                            <div>

                                                                <input type="text" name="" id="" className="inputFileds" placeholder="Enter Margin Call Value" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Open Com On Close By Hedge</p>
                                                            <div>
                                                                <select name="" id="" className="inputFileds">
                                                                    <option value="">Select Com..</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Open Com On Same Day Close</p>
                                                            <div>
                                                                <select name="" id="" className="inputFileds">
                                                                    <option value="">Select Com..</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Margin Hedge Calc.</p>
                                                            <div>
                                                                <select name="" id="" className="inputFileds">
                                                                    <option value="">Select Com..</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div>
                                                            <p className='modalLabels mt-2'>Close Com. On Same Day Close</p>
                                                            <div>
                                                                <select name="" id="" className="inputFileds">
                                                                    <option value="">Select Com..</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div className="overflow" style={{ overflow: "auto", height: "300px" }}>
                                                    <ModalTableComponent>
                                                        <thead>
                                                            <tr>
                                                                <th>Privilege</th>
                                                                <th>Enabled?</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Enable Hedging</td>
                                                                <td>
                                                                    <input type="checkbox" id="enable" className="modalChecbox" />
                                                                    <label for="enable" className="checkboxLabel"></label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Sent Margin Call Email</td>
                                                                <td>
                                                                    <input type="checkbox" id="sentMargin" className="modalChecbox" />
                                                                    <label for="sentMargin" className="checkboxLabel"></label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Daily Statemment</td>
                                                                <td>
                                                                    <input type="checkbox" id="daily" className="modalChecbox" />
                                                                    <label for="daily" className="checkboxLabel"></label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Weekly Statemment</td>
                                                                <td>
                                                                    <input type="checkbox" id="weekly" className="modalChecbox" />
                                                                    <label for="weekly" className="checkboxLabel"></label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Monthly Statemment</td>
                                                                <td>
                                                                    <input type="checkbox" id="monthly" className="modalChecbox" />
                                                                    <label for="monthly" className="checkboxLabel"></label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </ModalTableComponent>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>



                        </div>
                    </div>
                </div>

                <div className="col-lg-12 mt-3" style={{ paddingLeft: "8%", paddingRight: "8%" }}>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                            <SaveButton label="Add" buttonStyle="yellow-btn" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <SaveButton label="Delete" buttonStyle="yellowOutline-btn w-100" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <SaveButton label="Update" buttonStyle="yellowOutline-btn w-100" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <SaveButton label="CLose" buttonStyle="yellowOutline-btn w-100" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ClientGenericPolicy