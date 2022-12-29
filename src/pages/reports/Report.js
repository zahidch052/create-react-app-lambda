import React from 'react'
import { Col, Nav, NavDropdown, Row, Tab } from 'react-bootstrap'
import MoneyTransactionReport from './MoneyTransactionReport'
import UsersDetailsReport from './UsersDetailsReport'


const Report = () => {
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bg-white rounded">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="moneyTransacrtion" >
                                <Row className='align-items-center ps-3 pe-3'>
                                    <Col sm={12}>
                                        <Nav variant="pills" className="tabsStyling">
                                            <Nav.Item>
                                                <Nav.Link eventKey="moneyTransacrtion">Money Transactions Report</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="userDetails">Users Details Report</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                {/* <Nav.Link eventKey="openPositions">Open Positions Reports</Nav.Link> */}
                                                <Nav.Link eventKey="openPositions">
                                                    <NavDropdown title="Open Positions Reports" id="nav-dropdown">
                                                        <NavDropdown.Item eventKey="3.1">Detailed Open Positions</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item eventKey="3.2">Net Open Positions</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                {/* <Nav.Link eventKey="historyReport">History Report</Nav.Link> */}
                                                <Nav.Link eventKey="historyReport">
                                                    <NavDropdown title="History Report" id="nav-dropdown">
                                                        <NavDropdown.Item eventKey="4.1">Close History Report</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item eventKey="4.2">Open History Report</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="pendingOrders">Pending Orders Report</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                {/* <Nav.Link eventKey="financialStanding">Financial Standing Report</Nav.Link> */}
                                                <Nav.Link eventKey="financialStanding">
                                                    <NavDropdown title="Financial Standing Report" id="nav-dropdown">
                                                        <NavDropdown.Item eventKey="5.1">Detailed Financial Standing</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item eventKey="5.2">Net Financial Standing</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item eventKey="5.2">Financial Standing History</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="loginReport">Login Report</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                {/* <Nav.Link eventKey="roboOrders">Robo Orders Report</Nav.Link> */}
                                                <Nav.Link eventKey="roboOrders">
                                                    <NavDropdown title="Robo Orders Report" id="nav-dropdown">
                                                        <NavDropdown.Item eventKey="8.1">Open Robo Orders Report</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item eventKey="8.2">Close Robo Orders Report</NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tradeBook">Trade Book Report</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>

                                    <Col sm={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="moneyTransacrtion">
                                                <MoneyTransactionReport />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="userDetails">
                                                <UsersDetailsReport />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="openPositions">
                                                3
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="historyReport">
                                                4
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="pendingOrders">
                                                5
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="financialStanding">
                                                6
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="loginReport">
                                                7
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="roboOrders">
                                                8
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tradeBook">
                                                9
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Report