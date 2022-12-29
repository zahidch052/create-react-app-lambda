import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  addPersonAsset,
  deleteAsset,
  demoAccountAsset,
  demoCharlieAsset,
  dollorAsset,
  editAsset,
  fullScreenIconAsset,
  mailAsset,
  manAsset,
  search2Asset,
} from "../../assets";
import { Link } from "react-router-dom";
import MoneyTransactionModal from "./MoneyTransactionModal";
import { Accordion } from "react-bootstrap";

const Accounts = () => {
  const [showSearch, setShowSearch] = useState();
  const accountsHandle = useFullScreenHandle();
  const [showMoneyTransaction, setShowMoneyTransaction] = useState(false);

  const moneyTransactionModalHandler = () => {
    setShowMoneyTransaction((prev) => !prev);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="backgroundWhite">
          <div className="d-flex align-items-center">
            <div>
              <p className="fs-16 fw-600 yellow ms-2">Account</p>
              <p className="accounts-heading mb-0"></p>
            </div>
            <div className="d-flex gap-2 align-items-center ms-auto me-2">
              {showSearch && (
                <div>
                  <img
                    src={search2Asset}
                    alt=""
                    className="searchIcon ms-2 mt-2"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="dashboardSearch"
                    placeholder="Search"
                  />
                </div>
              )}
              {!showSearch && (
                <img
                  src={search2Asset}
                  width="15px"
                  height="15px"
                  alt=""
                  onClick={() => setShowSearch(!showSearch)}
                />
              )}
              <img
                src={dollorAsset}
                width="20px"
                height="20px"
                alt=""
                className="cursor"
                onClick={() => moneyTransactionModalHandler()}
              />
              {showMoneyTransaction && (
                <MoneyTransactionModal
                  moneyTransactionModalHandler={moneyTransactionModalHandler}
                />
              )}
              <img
                src={deleteAsset}
                width="19px"
                height="19px"
                alt=""
                className="cursor"
              />
              <Link to="/createNewUser">
                <img src={addPersonAsset} width="20px" height="20px" alt="" />
              </Link>
              <Link to="/editBroker">
                <img src={editAsset} width="14px" height="14px" alt="" />
              </Link>
              <img
                src={mailAsset}
                width="14px"
                height="14px"
                alt=""
                className="cursor"
              />
            </div>
          </div>
          <hr className="mt-2" />

          <div
            className="overflow"
            style={{ height: "50vh", overflow: "auto" }}
          >
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
                            <p className="fs-14 fw-500 grey">100101653: Demo</p>
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
                            <p className="fs-14 fw-500 grey">100101653: Demo</p>
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
      </div>
    </>
  );
};

export default Accounts;
