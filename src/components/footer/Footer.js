import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className='footer-div d-flex  justify-content-center'>
                            <div className='d-flex align-items-center gap-2  ps-3 pe-3 footer' style={{ height: "50px" }}>
                                <p className='fs-13 fw-500 yellowrightborder'>Balance: 2000.00</p>
                                <p className='fs-13 fw-500 yellowrightborder'>Total PnL: 10.0</p>
                                <p className='fs-13 fw-500 yellowrightborder'>Equity: 20.22</p>
                                <p className='fs-13 fw-500 yellowrightborder'>Used Margin: 20.22</p>
                                <p className='fs-13 fw-500 yellowrightborder'>Free Margin: 20.22</p>
                                <p className='fs-13 fw-500 yellowrightborder'>Margin Level: 20.22%</p>
                                <p className='fs-13 fw-500 yellowrightborder'>Total Value: 20.22%</p>
                                <p className='fs-13 fw-500 yellowrightborder'>Assets Value: 20.22%</p>
                                <p className='fs-13 fw-500 pe-3'>02/02/2022 ,10:50 UTC + 05.30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer