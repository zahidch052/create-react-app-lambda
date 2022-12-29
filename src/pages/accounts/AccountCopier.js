import React from "react";
import { Accordion, Col, Dropdown, Nav, Row, Tab, Tabs } from "react-bootstrap";
import { search2Asset, searchGreyAsset } from "../../assets";
import SaveButton from "../../components/Button/Button";
import ModalTable from "../../components/table/ModalTable";

const AccountCopier = () => {
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
                          id="copierDemoClient"
                          class="simpleyellowCheckbox"
                        />
                        <label
                          for="copierDemoClient"
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
                                id="copierAdit"
                                class="simpleyellowCheckbox"
                              />
                              <label
                                for="copierAdit"
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
                <div className="col-lg-6 col-md-6">
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
                        <input type="checkbox" id="accGroup" className="modalChecbox" />
                        <label for="accGroup" className="checkboxLabel modalLabels me-1"></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 mt-2">
                  <div>
                    <select name="" id="" className="inputFileds">
                      <option value="">Market Handling</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <ModalTable className="table">
                    <thead>
                      <tr>
                        <th>
                          <div className="d-flex gap-2 align-items-center">
                            <input
                              type="checkbox"
                              id="accountCopierSymbols"
                              className="modalChecbox"
                            />
                            <label
                              for="accountCopierSymbols"
                              className="checkboxLabel"
                            >
                              Symbol
                            </label>
                          </div>
                        </th>
                        <th>Enanble</th>
                        <th>Same dire...</th>
                        <th>Types To Mirror</th>
                        <th>Oder To Mirror</th>
                        <th>Percentage</th>
                        <th>Shippage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            <input
                              type="checkbox"
                              id="accountCopierSymbol"
                              className="modalChecbox"
                            />
                            <label
                              for="accountCopierSymbol"
                              className="checkboxLabel"
                            >
                              {" "}
                              Gold Aug
                            </label>
                          </div>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="accountCopierEnable"
                            className="modalChecbox"
                          />
                          <label
                            for="accountCopierEnable"
                            className="checkboxLabel"
                          ></label>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="accountCopierSameDire"
                            className="modalChecbox"
                          />
                          <label
                            for="accountCopierSameDire"
                            className="checkboxLabel"
                          ></label>
                        </td>
                        <td>
                          <select name="" id="" className="ModaltableSelect">
                            <option value="">New</option>
                            <option value="">Both</option>
                            <option value="">Close</option>
                            <option value="">Buy</option>
                          </select>
                        </td>
                        <td>
                          <select name="" id="" className="ModaltableSelect">
                            <option value="">Sell</option>
                            <option value="">Both</option>
                            <option value="">Buy</option>
                          </select>
                        </td>
                        <td>
                          <select name="" id="" className="ModaltableSelect">
                            <option value="">0</option>
                          </select>
                        </td>
                        <td>
                          <select name="" id="" className="ModaltableSelect">
                            <option value="">0</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </ModalTable>
                </div>
              </div>
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

export default AccountCopier;
