import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaMailBulk,
  FaCalendarAlt,
  FaHistory,
  FaUsers,
  FaHome,
  FaFileAlt,
  FaNewspaper,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { logoAsset } from "../../assets";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/account",
      name: "Account",
      icon: <FaUserAlt />,
    },
    {
      path: "/trade",
      name: "Trade",
      icon: <FaRegChartBar />,
    },
    {
      path: "/history",
      name: "History",
      icon: <FaHistory />,
    },
    {
      path: "/economicCalendar",
      name: "Economic Calendar",
      icon: <FaCalendarAlt />,
    },
    {
      path: "/news",
      name: "News",
      icon: <FaNewspaper />,
    },
    {
      path: "/mails",
      name: "Mails",
      icon: <FaMailBulk />,
    },
    {
      path: "/liveUsers",
      name: "Live User",
      icon: <FaUsers />,
    },
    {
      path: "/summary",
      name: "Summary",
      icon: <FaFileAlt />,
    },
    {
      path: "/report",
      name: "Report",
      icon: <FaFileAlt />,
    },
  ];
  return (
    <div className="d-flex p-0">
      <div className="bg-white sidebar-div">
        <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              <div
                className="d-flex align-items-end"
                style={{ width: "180px" }}
              >
                <img src={logoAsset} alt="" />
                <div className="fs-16 fw-700 brandName">Market Boss</div>
              </div>
            </h1>
            <div
              style={{ marginLeft: isOpen ? "0px" : "6px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="links"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>
        <div>
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
