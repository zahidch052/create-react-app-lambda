import React from 'react'
import ModalComponent from '../../components/Modal/TabsHeaderModal'
import { Modal } from "react-bootstrap";
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import { closeAsset } from '../../assets';
import ClientScriptPolicy from './ClientScriptPolicy';
import ClientGenericPolicy from './ClientGenericPolicy';
import RoboPolicy from './RoboPolicy';
import AccountCopier from './AccountCopier';
import AgentCommission from './AgentCommission';


const ClientScriptPolicyModal = (props) => {
    return (
        <ModalComponent
            size="xl"
            show={true}
        // handleClose={props.clientScriptModalHandler}
        // title="Entry Market"
        >
            <Modal.Body className="overflow pt-0 pb-0 ps-0" style={{ height: "80vh" }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={12} style={{ borderBottom: "1px solid #ECB01C" }}>
                            <Nav variant="pills" className="flex-row modalTabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Client Symbol Policiy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Client Generic Policiy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Robo Policiy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Account Copier</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Agent Commission</Nav.Link>
                                </Nav.Item>
                                <img src={closeAsset} className="cursor ms-auto" alt="" onClick={props.clientScriptModalHandler} />
                            </Nav>


                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <ClientScriptPolicy />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <ClientGenericPolicy />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <RoboPolicy />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <AccountCopier />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <AgentCommission />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Modal.Body>
        </ModalComponent >
    )
}

export default ClientScriptPolicyModal