import React from 'react'
import "./ModalTable.css"

const ModalTable = ({ children }) => {
    return (
        <div className="row d-flex justify-content-center mt-3 ms-0 me-0 customScrollbar" style={{ overflow: "auto", height: "250px" }}>
            <div className="col-12 p-0">
                <table className="modalTable">
                    {children}
                </table>
            </div>
        </div>
    )
}

export default ModalTable