import { useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { addNewAsset, deleteAsset, editAsset, graphIconAsset, hideAsset, plusAsset, search2Asset } from '../../assets/index';
import Button from '../../components/Button/Button';
import TableComponent from '../../components/table/Table'
import EntryMarketModal from './EntryMarketModal';
const WatchlistTabs = () => {

    const [showSearch, setShowSearch] = useState()
    const [showEntryMarket, setShowEntryMarket] = useState(false);

    const entryMarketModalHandler = () => {
        setShowEntryMarket((prev) => !prev);
    };
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={8}>
                        {/* <div className='d-flex align-items-center'> */}
                        <Nav variant="pills" className="tabsStyling">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Watchlist</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Favorite</Nav.Link>
                            </Nav.Item>
                            <Button label="Add New watchlist" iconPrev={plusAsset} buttonStyle="yellowOutline-btn ms-3" />

                        </Nav>
                    </Col>
                    <Col sm={4} className="d-flex justify-content-end">
                        <div className="d-flex gap-3 align-items-center ms-auto">
                            {showSearch &&
                                <div>
                                    <img src={search2Asset} alt="" className='searchIcon ms-2 mt-2' />
                                    <input type="text" name="" id="" className='dashboardSearch' placeholder='Search' />
                                </div>
                            }
                            {!showSearch &&
                                <img src={search2Asset} width="20px" height="20px" alt=""
                                    onClick={() => setShowSearch(!showSearch)}
                                />
                            }
                            <img src={deleteAsset} width="18px" height="20px" alt="" />
                            <img src={hideAsset} width="24px" height="20px" alt="" />
                            <img src={graphIconAsset} width="17px" height="17px" alt="" />
                            <img src={editAsset} width="14px" height="20px" alt="" />
                            <img src={addNewAsset} width="20px" height="20px" alt="" onClick={() => entryMarketModalHandler()} />
                        </div>
                        {showEntryMarket && (
                            <EntryMarketModal
                                entryMarketModalHandler={entryMarketModalHandler}
                            />
                        )}
                    </Col>
                    {/* </div> */}


                    <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <TableComponent>
                                    <thead>
                                        <tr>
                                            <th>Select</th>
                                            <th>Symbol</th>
                                            <th>Bid</th>
                                            <th>Ask</th>
                                            <th>Last</th>
                                            <th>Chg$</th>
                                            <th>Chg%</th>
                                            <th>Qty</th>
                                            <th>Mkt Cap</th>
                                            <th>Spread</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="" id="" className='checkbox-square' />
                                            </td>
                                            <td>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <div className='tableCoinName'>
                                                        <p className='fs-14 fw-400'>G</p>
                                                    </div>
                                                    <p className='fs-16 fw-700'>Gold</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className='fs-14 fw-600 red'>000.00</p>
                                            </td>
                                            <td>
                                                <p className='fs-14 fw-600 blue'>000.00</p>
                                            </td>
                                            <td>000.00</td>
                                            <td>000.00</td>
                                            <td>000.00</td>
                                            <td>0.00%</td>
                                            <td>000.00K</td>
                                            <td>000.00K</td>
                                        </tr>
                                    </tbody>
                                </TableComponent>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <TableComponent>
                                    <thead>
                                        <tr>
                                            <th>Select</th>
                                            <th>Symbol</th>
                                            <th>Bid</th>
                                            <th>Ask</th>
                                            <th>Last</th>
                                            <th>Chg$</th>
                                            <th>Chg%</th>
                                            <th>Qty</th>
                                            <th>Mkt Cap</th>
                                            <th>Spread</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" name="" id="" className='checkbox-square' />
                                            </td>
                                            <td>
                                                <div className='d-flex gap-2 align-items-center'>
                                                    <div className='tableCoinName'>
                                                        <p className='fs-14 fw-400'>G</p>
                                                    </div>
                                                    <p className='fs-16 fw-700'>Gold</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p className='fs-14 fw-600 red'>000.00</p>
                                            </td>
                                            <td>
                                                <p className='fs-14 fw-600 blue'>000.00</p>
                                            </td>
                                            <td>000.00</td>
                                            <td>000.00</td>
                                            <td>000.00</td>
                                            <td>0.00%</td>
                                            <td>000.00K</td>
                                            <td>000.00K</td>
                                        </tr>
                                    </tbody>
                                </TableComponent>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default WatchlistTabs