import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  eyeAsset,
  hideAsset,
  keyAsset,
  loginLogoAsset,
  logoAsset,
  mailAsset,
  searchAsset,
  thinClientAsset,
} from "../../assets";
import Button from "../../components/Button/Button";
import { statusReset, userLogin } from "../../Store/features/users/usersSlice";
import "./authentication.css";


const Login = () => {
 
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  // const [email, setEmail] = useState("");
  const [eye, setEye] = useState(false);
  // const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    if (userData.login === false) {
      toast.error("Id or Password is incorrect");
      dispatch(statusReset());
    }
  }, [userData.login, dispatch]);

  // const submitHandler = () => {
  //   const formData = new FormData();

  //   formData.set("login", email);
  //   formData.set("password", password);

  //   console.log("formData", formData);
  //   dispatch(userLogin(formData));
  // };

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("login", values.email);
    formData.append("password", values.password);
    dispatch(userLogin(formData));
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "#D9D9D9", height: "100vh" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="row">
              {/* <div className="col-lg-12 d-flex justify-content-center">
              <img src={loginLogoAsset} width="209.42px" height="119px" alt="" />
            </div> */}
              <div className="col-12 backgroundWite mt-4 ps-4 pe-4">
                <center>
                  <img
                    src={loginLogoAsset}
                    className="mt-3"
                    width="209.42px"
                    height="119px"
                    alt=""
                  />
                </center>
                <h5 className="loginHedaing text-center mt-3 mb-3">Login</h5>
                <div>
                  <img
                    src={thinClientAsset}
                    alt=""
                    width="48px"
                    height="32px"
                    className="loginsIcons mt-1"
                  />
                  <button
                    className="loginFields text-start fw-700 lightBlack"
                    onClick={handleShow}
                  >
                    MarketBoss Broker
                  </button>
                </div>
                <label className="loginLabels mt-2">Email</label>
                <div>
                  <img
                    src={mailAsset}
                    alt=""
                    width="25px"
                    height="24px"
                    className="loginsIcons mt-2 ms-2"
                  />
                  <input
                    type="email"
                    // value={email}
                    placeholder="Enter your email address"
                    // onChange={(e) => setEmail(e.target.value)}
                    {...register("email")}
                    className="loginFields fw-700 lightBlack"
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>

                <label className="loginLabels mt-2">Password</label>
                <div>
                  <img
                    src={keyAsset}
                    alt=""
                    width="22px"
                    height="22px"
                    className="loginsIcons mt-2 ms-2"
                  />
                  <input
                    type={eye === false ? "password" : "text"}
                    // value={password}
                    placeholder="Enter your password"
                    // onChange={(e) => setPassword(e.target.value)}
                    {...register("password")}
                    className="loginFields"
                  />
                  {!eye && (
                    <img
                      src={eyeAsset}
                      alt=""
                      width="22px"
                      height="15px"
                      className="eyeIcons"
                      onClick={() => setEye(!eye)}
                    />
                  )}
                  {eye && (
                    <img
                      src={hideAsset}
                      alt=""
                      width="25px"
                      height="20px"
                      className="eyeIcons"
                      style={{ marginTop: "-30px" }}
                      onClick={() => setEye(!eye)}
                    />
                  )}
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>

                <div className="d-flex mt-4">
                  <div className="d-flex align-items-center gap-2">
                    <input type="checkbox" />
                    <p className="fs-12">Remember me</p>
                  </div>
                  <NavLink
                    to="/forgot/password"
                    className="loginLabels ms-auto"
                  >
                    Forgot Password?
                  </NavLink>
                </div>

                <Button
                  label="Login"
                  buttonStyle="loginbtn mt-3"
                  onClick={handleSubmit(onSubmit)}
                />

                <div className="d-flex gap-3 align-items-center mt-3">
                  <div
                    className=" w-100 "
                    style={{ border: "1px solid #BFBFBF" }}
                  ></div>
                  <p className="fs-12">OR</p>
                  <div
                    className=" w-100 "
                    style={{ border: "1px solid #BFBFBF" }}
                  ></div>
                </div>
                <NavLink to="/demo/account">
                  <Button
                    label="Open Demo Account"
                    buttonStyle="demoAccount-btn mt-3"
                  />
                </NavLink>
                <NavLink to="/live/account">
                  <Button
                    label="Open Live Account"
                    buttonStyle="liveAccount-btn mt-3 mb-4"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        className="selectBrokerModal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Broker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img
              src={searchAsset}
              alt=""
              className="searchIcon ms-2"
              width="20px"
              height="20px"
            />
            <input
              type="text"
              className="searchBroker"
              placeholder="Search Broker"
            />
          </div>

          <h5
            className="fs-16 mt-3"
            style={{ letterSpacing: "0.004em", color: "#273852" }}
          >
            Recent Broker
          </h5>
          <div>
            <div className="d-flex gap-2 align-items-center mt-3">
              <img src={logoAsset} width="40px" height="28px" alt="" />
              <NavLink to="/demo/account" className="fs-12 fs-500 text-black decoration-none">
                Market Boss Demo
              </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
