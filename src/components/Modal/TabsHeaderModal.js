import React, { Children } from 'react';
import './Modal.css';
// import "../ResponsiveText.css";
import { Modal } from "react-bootstrap";
export default function ({ show, size, icon, title, handleClose, children, className }) {
    return (
        <Modal
            size={size}
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className={className}
        >
            {/* <Modal.Header closeButton >
                <Modal.Title className="d-flex">
                    <img src={icon} alt="" />
                    <h5 className="title fontsize-15">{title}</h5>
                </Modal.Title>
            </Modal.Header> */}
            {children}
        </Modal>
    )
}