import React from 'react'
import { useState } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { mailAsset } from '../../assets'
import TableComponent from '../../components/table/Table'

const LiveUsers = () => {
    return (
        <>
            <div className=" bg-white rounded">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='align-items-center ps-3 pe-3'>
                        <Col sm={12}>
                            <Nav variant="pills" className="tabsStyling">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Live User</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <TableComponent>
                                        <thead>
                                            <tr>
                                                <th>Login Time</th>
                                                <th>User Type</th>
                                                <th>User Name</th>
                                                <th>Name Acc</th>
                                                <th>IP Address</th>
                                                <th>Device Type</th>
                                                <th>MAC Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <p className='fs-14 fw-400 green'>2022/05/01, 01:00</p>
                                                </td>
                                                <td>Broker</td>
                                                <td>Charli@321</td>
                                                <td>Charli</td>
                                                <td>192.168.20.2</td>
                                                <td>0000.0000</td>
                                                <td>0000.0000</td>
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

export default LiveUsers