import React from 'react'
import { useState } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { mailAsset } from '../../assets'
import TableComponent from '../../components/table/Table'
import EmailModal from './EmailModal'

const Mail = () => {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const emailModalHandler = () => {
        setShowEmailModal((prev) => !prev);
    }
    return (
        <>
            <div className=" bg-white rounded">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='align-items-center ps-3 pe-3'>
                        <div className="col-5">
                            <Nav variant="pills" className="tabsStyling">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Mail Box</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="col-7">
                            <div className='d-flex justify-content-end'>
                                <img src={mailAsset} width="18px" height="18px" alt="" className='cursor' onClick={() => emailModalHandler()} />
                            </div>
                            {showEmailModal &&
                                <EmailModal emailModalHandler={emailModalHandler} />
                            }
                        </div>
                        {/* </Col> */}
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <TableComponent>
                                        <thead>
                                            <tr>
                                                <th>Login Time</th>
                                                <th>Email</th>
                                                <th>Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p className='fs-14 fw-400 green'>2022/05/01, 01:00</p>
                                                </td>
                                                <td>DemoAccount@Gmail.com</td>
                                                <td>Demo Account Message ........................</td>
                                            </tr>
                                        </tbody>
                                    </TableComponent>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>

    )
}

export default Mail