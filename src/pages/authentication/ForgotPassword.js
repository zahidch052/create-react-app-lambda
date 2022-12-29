import React from 'react';
import "./authentication.css"
import Button from '../../components/Button/Button'
import { loginLogoAsset,  mailAsset,  } from '../../assets'

const ForgotPassword = () => {
    return (
        <>
            <div className='container-fluid' style={{ background: "#D9D9D9", height: "100vh" }}>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className='row'>
                            {/* <div className="col-lg-12 d-flex justify-content-center">
              <img src={loginLogoAsset} width="209.42px" height="119px" alt="" />
            </div> */}
                            <div className="col-12 backgroundWite mt-4 ps-4 pe-4" style={{ paddingBottom: "200px" }}>
                                <center>
                                    <img src={loginLogoAsset} className="mt-3" width="209.42px" height="119px" alt="" />
                                </center>
                                <h5 className='loginHedaing text-center mt-3 mb-3'>Forgot Password</h5>

                                <label className='loginLabels mt-2'>Email</label>
                                <div>
                                    <img src={mailAsset} alt="" width="25px" height="24px" className='loginsIcons mt-2 ms-2' />
                                    <input type="email" name="" id="" className='loginFields'
                                        placeholder='example@gmail.com'
                                        style={{ marginBottom: "80px" }} />
                                </div>

                                <Button label="Forgot Password" buttonStyle="loginbtn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ForgotPassword