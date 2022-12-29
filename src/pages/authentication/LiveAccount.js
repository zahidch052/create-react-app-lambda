import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  keyAsset,
  loginLogoAsset,
  mailAsset,
  personAsset,
  phoneAsset,
} from "../../assets";
import Button from "../../components/Button/Button";
import { userRegister } from "../../Store/features/users/usersSlice";
import "./authentication.css";

const LiveAccount = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    username: Yup.string().required("Username is required"),
    mobile_number: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    // .matches(
    //   /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})/,
    //   "Password must contains atleast one number, one alphabet and one special character."
    // ),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match."
    ),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("broker_id", 1);
    formData.append("fname", values.fname);
    formData.append("lname", values.lname);
    formData.append("email", values.email);
    formData.append("username", values.username);
    formData.append("mobile_number", values.mobile_number);
    formData.append("password", values.password);
    formData.append("password_confirmation", values.password_confirmation);
    dispatch(userRegister(formData));
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "#D9D9D9", height: "100%" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="row">
              <div className="col-12 backgroundWite mt-4 mb-4 ps-4 pe-4">
                <center>
                  <img
                    src={loginLogoAsset}
                    className="mt-3"
                    width="209.42px"
                    height="119px"
                    alt=""
                  />
                </center>
                <h5 className="loginHedaing text-center mt-2">
                Open Live Account
                </h5>
                <div className="row">
                  <div className="col-lg-6 mt-2">
                    <label className="loginLabels mt-2">First Name</label>
                    <div>
                      <img
                        src={personAsset}
                        alt=""
                        width="26px"
                        height="26px"
                        className="loginsIcons mt-1 ms-1"
                      />
                      <input
                        type="text"
                        {...register("fname")}
                        // value={fname}
                        // onChange={(e) => setFname(e.target.value)}
                        className="demologinFields"
                        placeholder="Enter First name"
                      />
                      {errors.fname && (
                        <p className="text-danger">{errors.fname.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <label className="loginLabels mt-2">Last Name</label>
                    <div>
                      <img
                        src={personAsset}
                        alt=""
                        width="26px"
                        height="26px"
                        className="loginsIcons mt-1 ms-1"
                      />
                      <input
                        type="text"
                        {...register("lname")}
                        // value={lname}
                        // onChange={(e) => setLname(e.target.value)}
                        className="demologinFields"
                        placeholder="Enter Last name"
                      />
                      {errors.lname && (
                        <p className="text-danger">{errors.lname.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <label className="loginLabels mt-2">User Name</label>
                    <div>
                      <img
                        src={personAsset}
                        alt=""
                        width="26px"
                        height="26px"
                        className="loginsIcons mt-1 ms-1"
                      />
                      <input
                        type="email"
                        {...register("username")}
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                        className="demologinFields"
                        placeholder="Enter User name"
                      />
                      {errors.username && (
                        <p className="text-danger">{errors.username.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <label className="loginLabels mt-2">Email</label>
                    <div>
                      <img
                        src={mailAsset}
                        alt=""
                        width="21px"
                        height="17px"
                        className="loginsIcons mt-2 ms-2"
                      />
                      <input
                        type="email"
                        {...register("email")}
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        className="demologinFields"
                        placeholder="Enter valid Email"
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <label className="loginLabels mt-2">Password</label>
                    <div>
                      <img
                        src={keyAsset}
                        alt=""
                        width="17px"
                        height="17px"
                        className="loginsIcons mt-2 ms-2"
                      />
                      <input
                        type="password"
                        {...register("password")}
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        className="demologinFields"
                        placeholder="Enter Password"
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <label className="loginLabels mt-2">Confirm Password</label>
                    <div>
                      <img
                        src={keyAsset}
                        alt=""
                        width="17px"
                        height="17px"
                        className="loginsIcons mt-2 ms-2"
                      />
                      <input
                        type="password"
                        {...register("password_confirmation")}
                        // value={password_confirmation}
                        // onChange={(e) =>
                        //   setPassword_confirmation(e.target.value)
                        // }
                        className="demologinFields"
                        placeholder="Enter Confirm Password"
                      />
                      {errors.password_confirmation && (
                        <p className="text-danger">
                          {errors.password_confirmation.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <label className="loginLabels mt-2">Phone Number</label>
                    <div>
                      <img
                        src={phoneAsset}
                        alt=""
                        width="22px"
                        height="22px"
                        className="loginsIcons mt-2 ms-2"
                      />
                      <input
                        type="number"
                        {...register("mobile_number")}
                        // value={mobile_number}
                        // onChange={(e) => setMobile_number(e.target.value)}
                        className="demologinFields"
                        placeholder="Enter Phone Number"
                      />
                      {errors.mobile_number && (
                        <p className="text-danger">
                          {errors.mobile_number.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 mt-2">
                    <label className="loginLabels mt-2">Country</label>
                    <div>
                      <select className="demoselectFields">
                        <option value="">Select Country</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-5 mb-5 pb-2">
                    <Button
                      label="Open Live Account"
                      buttonStyle="demologinbtn"
                      // onClick={() => submitHandler()}
                      onClick={handleSubmit(onSubmit)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveAccount;
