import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import CloseSummary from './CloseSummary'
import OpenSummary from './OpenSummary'

const Summary = () => {
    return (
        <>
            <div className="bg-white rounded">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row className='align-items-center ps-3 pe-3'>
                        <Col sm={12}>
                            <Nav variant="pills" className="tabsStyling">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Open Summary</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Close Summary</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        {/* </Row> */}
                        {/* <Row className='bg-white rounded'> */}
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <OpenSummary />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <CloseSummary />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    )
}

export default Summary