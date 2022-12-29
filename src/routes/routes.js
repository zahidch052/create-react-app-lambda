import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../pages/dashboard/Dashboard";
import Account from "../pages/accounts/Accounts";
import Trade from "../pages/trade/Trade";
import History from "../pages/history/History";
import EconomicCalender from "../pages/economicCalender/EconomicCalender";
import Mails from "../pages/mail/Mail";
import LiveUsers from "../pages/liveUsers/LiveUsers";
import Summary from "../pages/summary/Summary";
import News from "../pages/news/News";
import CreateNewUser from "../pages/accounts/CreateNewUser";
import EditBroker from "../pages/accounts/EditBroker";
import Login from "../pages/authentication/Login";
import DemoAccount from "../pages/authentication/DemoAccount";
import ForgotPassword from "../pages/authentication/ForgotPassword";
import { useSelector } from "react-redux";
import LiveAccount from "../pages/authentication/LiveAccount";
import Report from "../pages/reports/Report";
const Routing = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <BrowserRouter>
      {userData.login === true ? (
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />

            <Route path="/trade" element={<Trade />} />
            <Route path="/history" element={<History />} />
            <Route path="/economicCalendar" element={<EconomicCalender />} />
            <Route path="/news" element={<News />} />
            <Route path="/mails" element={<Mails />} />
            <Route path="/liveUsers" element={<LiveUsers />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/createNewUser" element={<CreateNewUser />} />
            <Route path="/editBroker" element={<EditBroker />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Sidebar>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo/account" element={<DemoAccount />} />
          <Route path="/forgot/password" element={<ForgotPassword />} />
          <Route path="/live/account" element={<LiveAccount />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Routing;
