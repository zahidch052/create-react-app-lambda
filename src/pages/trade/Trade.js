import React from 'react'
import { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import CloseCheckedModal from './CloseCheckedModal';
import DeleteCheckedModal from './DeleteCheckedModal';
import DuplicateCheckedModal from './DuplicateCheckedModal';
import HedgeCheckedModal from './HedgeCheckedModal';
import TradeTable from './TradeTable';
import UpdateTradeModal from './UpdateTradeModal';
import NetTradeTable from "./NetTradeTable"
import OrderTable from "./OrderTable"

const Trade = () => {

    const [showCloseChecked, setShowCloseChecked] = useState(false);
    const [showUpdateTrade, setShowUpdateTrade] = useState(false);
    const [showDuplicateChecked, setShowDuplicateChecked] = useState(false);
    const [showHedgeChecked, setShowHedgeChecked] = useState(false);




    const closeCheckedModalHandler = () => {
        setShowCloseChecked((prev) => !prev);
    };

    const updateTradeModalHandler = () => {
        setShowUpdateTrade((prev) => !prev);
    };
    const duplicateCheckedModalHandler = () => {
        setShowDuplicateChecked((prev) => !prev);
    };
    const hedgeCheckedModalHandler = () => {
        setShowHedgeChecked((prev) => !prev);
    };


    return (
        <>
            <div className="bg-white rounded">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='p-3'>
                        <Col sm={5}>
                            <Nav variant="pills" className="tabsStyling">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Trade</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Net Trade</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Orders</Nav.Link>
                                </Nav.Item>
                                <Button label="New order" buttonStyle="yellowOutline-btn ms-3" />
                            </Nav>
                        </Col>
                        <Col sm={7} className="p-0 pe-lg-3 d-none d-sm-block">
                            <div className='d-flex align-items-center justify-content-end gap-lg-2 gap-md-2 gap-1'>
                                <Button label="Update Trade" buttonStyle="yellowOutline-btn" onClick={() => updateTradeModalHandler()} />
                                <Button label="Close Checked" buttonStyle="yellowOutline-btn" onClick={() => closeCheckedModalHandler()} />
                                <Button label="Duplicate Checked" buttonStyle="yellowOutline-btn" onClick={() => duplicateCheckedModalHandler()} />
                                <Button label="Hedge Checked" buttonStyle="yellowOutline-btn" onClick={() => hedgeCheckedModalHandler()} />
                            </div>
                            {showCloseChecked &&
                                <CloseCheckedModal closeCheckedModalHandler={closeCheckedModalHandler} />
                            }
                            {showUpdateTrade &&
                                <UpdateTradeModal updateTradeModalHandler={updateTradeModalHandler} />
                            }
                            {showDuplicateChecked &&
                                <DuplicateCheckedModal duplicateCheckedModalHandler={duplicateCheckedModalHandler} />
                            }
                            {showHedgeChecked &&
                                <HedgeCheckedModal hedgeCheckedModalHandler={hedgeCheckedModalHandler} />
                            }

                        </Col>
                        <Col sm={6} className="mt-2 d-md-none d-lg-none">
                            <div className='d-flex align-items-center justify-content-end gap-2'>
                                <Button label="Update Trade" buttonStyle="yellowOutline-btn w-100" onClick={() => updateTradeModalHandler()} />
                                <Button label="Close Checked" buttonStyle="yellowOutline-btn w-100" onClick={() => closeCheckedModalHandler()} />
                            </div>
                            {showCloseChecked &&
                                <CloseCheckedModal closeCheckedModalHandler={closeCheckedModalHandler} />
                            }
                            {showUpdateTrade &&
                                <UpdateTradeModal updateTradeModalHandler={updateTradeModalHandler} />
                            }
                        </Col>
                        <Col sm={6} className="mt-2 d-md-none d-lg-none">
                            <div className='d-flex align-items-center justify-content-end gap-2'>
                                <Button label="Duplicate Checked" buttonStyle="yellowOutline-btn w-100" onClick={() => duplicateCheckedModalHandler()} />
                                <Button label="Hedge Checked" buttonStyle="yellowOutline-btn w-100" onClick={() => hedgeCheckedModalHandler()} />
                            </div>
                            {showCloseChecked &&
                                <CloseCheckedModal closeCheckedModalHandler={closeCheckedModalHandler} />
                            }
                            {showUpdateTrade &&
                                <UpdateTradeModal updateTradeModalHandler={updateTradeModalHandler} />
                            }
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <TradeTable />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <NetTradeTable />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <OrderTable />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    )
}

export default Trade