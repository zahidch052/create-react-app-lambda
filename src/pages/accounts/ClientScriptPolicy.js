import React from "react";
import { Accordion, Col, Dropdown, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { search2Asset, searchGreyAsset } from "../../assets";
import SaveButton from "../../components/Button/Button";
import ModalTable from "../../components/table/ModalTable";

const ClientScriptPolicy = () => {
  return (
    <>
      <div class="row ps-3 pb-3">
        <div className="col-lg-12 pe-4">
          <div className="row" style={{ borderBottom: "1px solid #ECB01C" }}>
            <div
              className="col-lg-4 col-md-4"
              style={{ borderRight: "1px solid #ECB01C" }}
            >
              <p className="modalLabels mt-2"> Search</p>
              <div>
                <img
                  src={searchGreyAsset}
                  alt=""
                  className="searchIcon ms-2"
                  style={{ marginTop: "5px" }}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="inputFileds"
                  style={{ paddingLeft: "30px" }}
                  placeholder="Search By Policy Name"
                />
              </div>

              <Accordion
                defaultActiveKey={["0"]}
                alwaysOpen
                className="accountsAccordian"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="d-flex gap-2 align-items-center ms-1">
                      <div>
                        <input
                          type="checkbox"
                          id="demoClient"
                          class="simpleyellowCheckbox"
                        />
                        <label
                          for="demoClient"
                          class="simpleyellowCheckboxLabel"
                        ></label>
                      </div>
                      <p className="fs-14">Market Boss Demo Client Scripts</p>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="pt-1 pb-1">
                    <Accordion defaultActiveKey={["0"]} alwaysOpen>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="d-flex gap-2 align-items-center ms-1">
                            <div>
                              <input
                                type="checkbox"
                                id="Adit"
                                class="simpleyellowCheckbox"
                              />
                              <label
                                for="Adit"
                                class="simpleyellowCheckboxLabel"
                              ></label>
                            </div>
                            <p className="fs-14">Adit</p>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="pt-1 pb-1"></Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <p className="modalLabels mt-2">Policy Name</p>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="inputFileds"
                        placeholder="Enter Policy Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center gap-1">
                    <div className="w-100">
                      <p className="modalLabels mt-2">Parent</p>
                      <div>
                        <select name="" id="" className="inputFileds">
                          <option value="">Enter Parent Name</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <p className="modalLabels mt-2">Group</p>
                      <div className="d-flex justify-content-end">
                        <input type="checkbox" id="group" className="modalChecbox" />
                        <label for="group" className="checkboxLabel modalLabels me-1"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav
                      variant="pills"
                      className="flex-row modal-dropdown-tabs"
                    >
                      <Nav.Item className="w-100">
                        <Dropdown className="mt-2">
                          <Dropdown.Toggle
                            className="inputFileds p-0 d-flex justify-content-between align-items-center ps-2 pe-2 tabs-dropdown-toggle"
                            id="dropdown-basic"
                          >
                            Can Buy/Can Sell
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Nav.Link eventKey="first">
                                Can Buy/Can Sell
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Nav.Link eventKey="second">Visibility</Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Nav.Link eventKey="third">Spread</Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Nav.Link eventKey="fourth">
                                Required Margin
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Nav.Link eventKey="fifth">
                                Min/Max Per Deal-Max Quantity
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Nav.Link eventKey="sixth">
                                Limit/Stop Offset
                              </Nav.Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Nav.Link eventKey="seventh">Commission</Nav.Link>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="row">
                          <div className="col-lg-12">
                            <ModalTable className="table">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="symbols"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="symbols"
                                        className="checkboxLabel"
                                      >
                                        Symbol
                                      </label>
                                    </div>
                                  </th>
                                  <th>Can Buy?</th>
                                  <th>Can Sell</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="symbol"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="symbol"
                                        className="checkboxLabel"
                                      >
                                        {" "}
                                        Gold Aug
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="canbuy"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="canbuy"
                                        className="checkboxLabel"
                                      ></label>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="cansell"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="cansell"
                                        className="checkboxLabel"
                                      ></label>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </ModalTable>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="row">
                          <div className="col-lg-12">
                            <ModalTable className="table">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="visibilitySymbols"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="visibilitySymbols"
                                        className="checkboxLabel"
                                      >
                                        Symbol
                                      </label>
                                    </div>
                                  </th>
                                  <th>Visible?</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="visibilitySymbol"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="visibilitySymbol"
                                        className="checkboxLabel"
                                      >
                                        Gold Aug
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <div>
                                      <input
                                        type="checkbox"
                                        id="visibile"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="visibile"
                                        className="checkboxLabel"
                                      >
                                        Gold Aug
                                      </label>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </ModalTable>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="row">
                          <div className="col-lg-12">
                            <ModalTable className="table">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="speardSymbols"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="speardSymbols"
                                        className="checkboxLabel"
                                      >
                                        Symbol
                                      </label>
                                    </div>
                                  </th>
                                  <th>Spread Type?</th>
                                  <th>Spread</th>
                                  <th>Spread Balance</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="speardSymbol"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="speardSymbol"
                                        className="checkboxLabel"
                                      >
                                        {" "}
                                        Gold Aug
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">Fixied</option>
                                      <option value="">Source+</option>
                                    </select>
                                  </td>
                                  <td>0</td>
                                  <td>0</td>
                                </tr>
                              </tbody>
                            </ModalTable>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <div className="row">
                          <div className="col-lg-12">
                            <ModalTable className="table">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="requiredMarginSymbols"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="requiredMarginSymbols"
                                        className="checkboxLabel"
                                      >
                                        {" "}
                                        Symbol
                                      </label>
                                    </div>
                                  </th>
                                  <th>Req.Margian T...</th>
                                  <th>Req. Margin</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="goldAug"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="goldAug"
                                        className="checkboxLabel"
                                      >
                                        {" "}
                                        Gold Aug
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">Fixied</option>
                                      <option value="">Percentage</option>
                                    </select>
                                  </td>
                                  <td>0</td>
                                </tr>
                              </tbody>
                            </ModalTable>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <div className="row">
                          <div className="col-lg-12">
                            <ModalTable className="table">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="dealMaxQuantitySymbols"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="dealMaxQuantitySymbols"
                                        className="checkboxLabel"
                                      >
                                        {" "}
                                        Symbol
                                      </label>
                                    </div>
                                  </th>
                                  <th>Min/Deal</th>
                                  <th>Max/Deal</th>
                                  <th>Max Quantity</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="dealMaxQuantitySymbol"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="dealMaxQuantitySymbol"
                                        className="checkboxLabel"
                                      >
                                        {" "}
                                        Gold Aug
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">0.1</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">100.0</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">1000.00</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </ModalTable>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="sixth">
                        <div className="row">
                          <div className="col-lg-12">
                            <ModalTable className="table">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="limitStopSymbols"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="limitStopSymbols"
                                        className="checkboxLabel"
                                      >
                                        Symbol
                                      </label>
                                    </div>
                                  </th>
                                  <th>Limit Offset</th>
                                  <th>Stop Offset</th>
                                  <th>Limit Offset T..</th>
                                  <th>Stop Offset T..</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="limitStopSymbol"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="limitStopSymbol"
                                        className="checkboxLabel"
                                      >
                                        {" "}
                                        Gold Aug
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">0</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">2</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">Fixed</option>
                                      <option value="">High/Low</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">Fixed</option>
                                      <option value="">High/Low</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </ModalTable>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="seventh">
                        <div className="row">
                          <div className="col-lg-12">
                            <ModalTable className="table">
                              <thead>
                                <tr>
                                  <th>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="commisionSymbols"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="commisionSymbols"
                                        className="checkboxLabel"
                                      >
                                        Symbol
                                      </label>
                                    </div>
                                  </th>
                                  <th>Open Com. T..</th>
                                  <th>Open C...</th>
                                  <th>Close Com T..</th>
                                  <th>Limit C...</th>
                                  <th>Intraday C...</th>
                                  <th>Intraday.</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex gap-2 align-items-center">
                                      <input
                                        type="checkbox"
                                        id="commisionSymbol"
                                        className="modalChecbox"
                                      />
                                      <label
                                        for="commisionSymbol"
                                        className="checkboxLabel"
                                      >
                                        {" "}
                                        Gold Aug
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">Fixed</option>
                                      <option value="">Percenta..</option>
                                      <option value="">Point</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">0</option>
                                      <option value="">1</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">Fixed</option>
                                      <option value="">Percenta..</option>
                                      <option value="">Point</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">0</option>
                                      <option value="">1</option>
                                      <option value="">2</option>
                                      <option value="">3</option>
                                      <option value="">4</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">Fixed</option>
                                      <option value="">Percenta..</option>
                                      <option value="">Point</option>
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      name=""
                                      id=""
                                      className="ModaltableSelect"
                                    >
                                      <option value="">0</option>
                                      <option value="">1</option>
                                      <option value="">2</option>
                                      <option value="">3</option>
                                      <option value="">4</option>
                                    </select>
                                  </td>
                                </tr>
                              </tbody>
                            </ModalTable>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </div>

        <div
          className="col-lg-12 mt-2"
          style={{ paddingLeft: "8%", paddingRight: "8%" }}
        >
          <div className="row">
            <div className="col-lg-3 col-md-3 col-6 mt-2">
              <SaveButton label="Add" buttonStyle="yellow-btn" />
            </div>
            <div className="col-lg-3 col-md-3 col-6 mt-2">
              <SaveButton
                label="Delete"
                buttonStyle="yellowOutline-btn w-100"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-6 mt-2">
              <SaveButton
                label="Update"
                buttonStyle="yellowOutline-btn w-100"
              />
            </div>
            <div className="col-lg-3 col-md-3 col-6 mt-2">
              <SaveButton label="CLose" buttonStyle="yellowOutline-btn w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientScriptPolicy;
