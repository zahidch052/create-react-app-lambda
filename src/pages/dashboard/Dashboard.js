import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import CandelChart from "./CandelChart";
import {
  fullScreenIconAsset,
  search2Asset,
  editAsset,
  deleteAsset,
  searchGreyAsset,
  demoAccountAsset,
  demoCharlieAsset,
  manAsset,
} from "../../assets/index";
import WatchlistTabs from "./WatchlistTabs";
import { Accordion } from "react-bootstrap";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import {
  fetchGraphData,
  fetchCurrencyData,
} from "../../Store/features/forexGraph/forexGraphSlice";

import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const coinInf = useSelector((state) => state.graphData.coinInf);

  const [data, setData] = useState([]);
  const [time, setTime] = useState("1min");
  const dispatch = useDispatch();

  // console.log(" data");
  // console.log(ApiData);
  useEffect(() => {
    dispatch(fetchGraphData(time));
  }, [time]);
  useEffect(() => {
    dispatch(fetchCurrencyData("AAPL"));
  }, []);

  const handle = useFullScreenHandle();
  const accountsHandle = useFullScreenHandle();

  return (
    <>
      <div className="container-fluid p-0 overflow pb-5">
        <div className="row">
          <div className="col-lg-8 mb-3">
            <FullScreen handle={handle}>
              <div className="backgroundWhite" style={{ height: "370px" }}>
                {/* //coin info */}
                {coinInf ? (
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-3 col-7">
                          <div className="media d-flex gap-2 align-items-center">
                            <div className="coinName">
                              <p className="fs-14 fw-500 black">S</p>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 fs-14 fw-600 black">
                                {coinInf.symbol}
                              </h5>
                              <p className="fs-12 fw-600">{coinInf.name}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-5">
                          <div>
                            <p className="fs-22 fw-400 black">00,000.00</p>
                            <p
                              className="fs-12 fw-500 green"
                            >
                              Market Open
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                          <div>
                            <p className="fs-16 fw-400 pink">-00000.00</p>
                            <p className="fs-16 fw-400 pink">-0000.00%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div className="row">
                        <div className="col-lg-12 d-flex">
                          <div className="ms-lg-5">
                            <div className="d-flex gap-3">
                              <p className="fs-16 fw-500 black">
                                <span className="grey">0</span> {coinInf.open}
                              </p>
                              <p className="fs-16 fw-500 black">
                                <span className="grey">H </span> {coinInf.high}
                              </p>
                            </div>
                            <div className="d-flex gap-3">
                              <p className="fs-16 fw-500 pink">
                                <span className="grey">L</span> {coinInf.low}
                              </p>
                              <p className="fs-16 fw-500 pink">
                                <span className="grey">C</span> {coinInf.close}
                              </p>
                              <p
                                className="fs-16 fw-500 green">
                                <span className="grey">Vol</span>{" "}
                                {coinInf.volume}
                              </p>
                            </div>
                          </div>
                          {!handle.active && (
                            <img
                              src={fullScreenIconAsset}
                              width="24px"
                              height="24px"
                              alt=""
                              className="ms-auto"
                              onClick={handle.enter}
                            />
                          )}
                          {handle.active && (
                            <img
                              src={fullScreenIconAsset}
                              width="24px"
                              height="24px"
                              alt=""
                              className="ms-auto"
                              onClick={handle.exit}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-3 col-7">
                          <div className="media d-flex gap-2 align-items-center">
                            <div className="coinName">
                              <p className="fs-14 fw-500 black">S</p>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 fs-14 fw-600 black">SYMB</h5>
                              <p className="fs-12 fw-600">Stock description</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-5">
                          <div>
                            <p className="fs-22 fw-400 black">00,000.00</p>
                            <p
                              className="fs-12 fw-500 green"
                            >
                              Market Open
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                          <div>
                            <p className="fs-16 fw-400 pink">-00000.00</p>
                            <p className="fs-16 fw-400 pink">-0000.00%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div className="row">
                        <div className="col-lg-12 d-flex">
                          <div className="ms-lg-5">
                            <div className="d-flex gap-3">
                              <p className="fs-16 fw-500 black">
                                <span className="grey">0</span> 21 105.10
                              </p>
                              <p className="fs-16 fw-500 black">
                                <span className="grey">H </span> 21 105.10
                              </p>
                            </div>
                            <div className="d-flex gap-3">
                              <p className="fs-16 fw-500 pink">
                                <span className="grey">L</span> 21 088.90
                              </p>
                              <p className="fs-16 fw-500 pink">
                                <span className="grey">C</span> 21 000.76 -4.34
                                (-0.02%)
                              </p>
                              <p
                                className="fs-16 fw-500"
                                style={{ color: "#23A971" }}
                              >
                                <span className="grey">Vol</span> 30
                              </p>
                            </div>
                          </div>
                          {!handle.active && (
                            <img
                              src={fullScreenIconAsset}
                              width="24px"
                              height="24px"
                              alt=""
                              className="ms-auto"
                              onClick={handle.enter}
                            />
                          )}
                          {handle.active && (
                            <img
                              src={fullScreenIconAsset}
                              width="24px"
                              height="24px"
                              alt=""
                              className="ms-auto"
                              onClick={handle.exit}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="row mt-2 border-bottom pb-2">
                  <div className="col-lg-5 setWidthDropsdown-1024">
                    <div className="d-flex gap-2">
                      <select name="" id="" className="chartinfo">
                        <option value="">Chart Type</option>
                      </select>

                      <select name="" id="" className="chartinfo">
                        <option value="">Indicators</option>
                      </select>

                      <select name="" id="" className="chartinfo">
                        <option value="">Objects</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 setWidthDateButtonBtn-1024">
                    <div className="radio_container">
                      <input
                        type="radio"
                        name="radio"
                        id="one"
                        onClick={(e) => setTime("1min")}
                        className="graphDate"
                      />
                      <label htmlFor="one">1m</label>
                      <input
                        type="radio"
                        name="radio"
                        id="two"
                        onClick={(e) => setTime("5min")}
                        className="graphDate"
                      />
                      <label htmlFor="two">5m</label>
                      <input
                        type="radio"
                        name="radio"
                        id="three"
                        onClick={(e) => setTime("15min")}
                        className="graphDate"
                      />
                      <label htmlFor="three">15m</label>
                      <input
                        type="radio"
                        name="radio"
                        id="four"
                        onClick={(e) => setTime("30min")}
                        className="graphDate"
                      />
                      <label htmlFor="four">30m</label>
                      <input
                        type="radio"
                        name="radio"
                        id="five"
                        onClick={(e) => setTime("45min")}
                        className="graphDate"
                      />
                      <label htmlFor="five">45m</label>

                      <input
                        type="radio"
                        name="radio"
                        id="six"
                        onClick={(e) => setTime("1h")}
                        className="graphDate"
                      />
                      <label htmlFor="six">1h</label>
                      <input
                        type="radio"
                        name="radio"
                        id="seven"
                        onClick={(e) => setTime("2h")}
                        className="graphDate"
                      />
                      <label htmlFor="seven">2h</label>
                      <input
                        type="radio"
                        name="radio"
                        id="eight"
                        onClick={(e) => setTime("4h")}
                        className="graphDate"
                      />
                      <label htmlFor="eight">4h</label>
                      <input
                        type="radio"
                        name="radio"
                        id="nine"
                        onClick={(e) => setTime("1day")}
                        className="graphDate"
                      />
                      <label htmlFor="nine">1D</label>
                      <input
                        type="radio"
                        name="radio"
                        id="ten"
                        onClick={(e) => setTime("1week")}
                        className="graphDate"
                      />
                      <label htmlFor="ten">1W</label>
                      <input
                        type="radio"
                        name="radio"
                        id="eleven"
                        onClick={(e) => setTime("1month")}
                        className="graphDate"
                      />
                      <label htmlFor="eleven">1M</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <CandelChart />
                  </div>
                </div>
              </div>
            </FullScreen>
          </div>
          <div className="col-lg-4">
            <FullScreen handle={accountsHandle}>
              <div className="backgroundWhite">
                <div className="d-flex align-items-center">
                  <div>
                    <p className="fs-16 fw-600 yellow ms-2">Account</p>
                    <p className="accounts-heading mb-0"></p>
                  </div>
                  <div className="d-flex gap-2 align-items-center ms-auto">
                    <img src={search2Asset} width="18px" height="18px" alt="" />
                    <img src={deleteAsset} width="19px" height="19px" alt="" />
                    <img src={editAsset} width="18px" height="18px" alt="" />
                    {!accountsHandle.active && (
                      <img
                        src={fullScreenIconAsset}
                        width="24px"
                        height="24px"
                        alt=""
                        className="ms-auto"
                        onClick={accountsHandle.enter}
                      />
                    )}
                    {accountsHandle.active && (
                      <img
                        src={fullScreenIconAsset}
                        width="24px"
                        height="24px"
                        alt=""
                        className="ms-auto"
                        onClick={accountsHandle.exit}
                      />
                    )}
                    {/* <img src={fullScreenIconAsset} width="24px" height="24px" alt="" /> */}
                  </div>
                </div>
                <hr className="mt-2" />

                <div style={{ height: "300px", overflow: "auto" }}>
                  <Accordion
                    defaultActiveKey={["0"]}
                    alwaysOpen
                    className="accountsAccordian"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="d-flex gap-2 align-items-center ms-1">
                          <img src={demoAccountAsset} alt="" />
                          <p className="fs-14">Market Boss Demo Accounts (3)</p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-1 pb-1">
                        <Accordion defaultActiveKey={["0"]} alwaysOpen>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <div className="d-flex gap-2 align-items-center ms-1">
                                <img src={demoCharlieAsset} alt="" />
                                <p className="mb-0">Demo Chali</p>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body className="pt-1 pb-1">
                              <div className="ms-4">
                                <div className="d-flex align-items-center gap-1 mt-2">
                                  <img src={manAsset} alt="" />
                                  <p className="fs-14 fw-500 grey">
                                    100101653: Demo
                                  </p>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Accordion
                    defaultActiveKey={["0"]}
                    alwaysOpen
                    className="accountsAccordian"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="d-flex gap-2 align-items-center ms-1">
                          <img src={demoAccountAsset} alt="" />
                          <p className="fs-14 grey">
                            Market Boss Broker Accounts (3)
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-1 pb-1">
                        <Accordion defaultActiveKey={["0"]} alwaysOpen>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <div className="d-flex gap-2 align-items-center ms-1">
                                <img src={demoCharlieAsset} alt="" />
                                <p className="mb-0">Demo Chali</p>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body className="pt-1 pb-1">
                              <div className="ms-4">
                                <div className="d-flex align-items-center gap-1 mt-2">
                                  <img src={manAsset} alt="" />
                                  <p className="fs-14 fw-500 grey">
                                    100101653: Demo
                                  </p>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </FullScreen>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-12 mt-2">
            <div className="backgroundWhite h-100">
              {/* <div className="d-flex align-items-center"> */}
              <div>
                <WatchlistTabs />
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
