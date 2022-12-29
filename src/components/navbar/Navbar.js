import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  bellAsset,
  logoutAsset,
  profileAsset,
  settingsAsset,
  themeIconAsset,
} from "../../assets";
import { userLogout } from "../../Store/features/users/usersSlice";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { logout } from "../../Store/features/users/usersSlice";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [theme, setTheme] = useState("light-theme");
  const ToggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  const notify = () => {
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/demo/account" ||
      location.pathname === "/live/account"
    )
      if (userData.login === true) {
        navigate("/dashboard");
      }
  }, [userData, navigate, location]);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="row mt-3 mb-3">
        <div className="col-lg-12 ">
          <div className="navbackground p-2 ">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <p className="fs-24 fw-500">DashBoard</p>
              </div>
              <div className="col-lg-8 col-md-8 d-flex justify-content-end">
                <div className="d-flex gap-4 align-items-center mobileViewHide">
                  <p className="fs-14 fw-600 me-4" style={{ color: "#2C2C2C" }}>
                    English
                  </p>
                  <div className="d-flex gap-3 align-items-center">
                    {theme === "light-theme" ? (
                      <img
                        src={themeIconAsset}
                        width="24px"
                        height="24px"
                        alt=""
                        onClick={() => ToggleTheme()}
                      />
                    ) : (
                      <FaMoon onClick={() => ToggleTheme()} />
                    )}
                    <img
                      src={settingsAsset}
                      width="24px"
                      height="24px"
                      alt=""
                    />
                    <img src={bellAsset} width="18px" height="20px" alt="" />
                    <img
                      src={logoutAsset}
                      onClick={() => {
                        navigate("/login");
                        notify();
                        dispatch(userLogout(userData.user.data.token));
                      }}
                      width="23px"
                      height="21px"
                      alt=""
                    />
                  </div>

                  <div className="d-flex align-items-center gap-1">
                    <p className="fs-14 fw-400">
                      {userData.user.data.user.username}
                    </p>
                    <img src={profileAsset} alt="" width="34px" height="34px" />
                  </div>
                </div>

                <div className="d-flex gap-2 align-items-center laptopViewHide">
                  <p className="fs-14 fw-600 me-4" style={{ color: "#2C2C2C" }}>
                    English
                  </p>
                  <img src={bellAsset} width="18px" height="20px" alt="" />
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="default"
                      className="d-flex align-items-center"
                      id="dropdown-basic"
                    >
                      <div className="d-flex align-items-center gap-1">
                        <p className="fs-14 fw-500">John Doe</p>
                        <img
                          src={profileAsset}
                          alt=""
                          width="34px"
                          height="34px"
                        />
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <div
                          className="d-flex align-items-center gap-3"
                          onClick={() => ToggleTheme()}
                        >
                          {theme === "light-theme" ? (
                            <img
                              src={themeIconAsset}
                              width="24px"
                              height="24px"
                              alt=""
                              onClick={() => ToggleTheme()}
                            />
                          ) : (
                            <FaMoon onClick={() => ToggleTheme()} />
                          )}
                          <p className="mb-0">Theme</p>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="d-flex gap-3">
                          <img
                            src={settingsAsset}
                            width="24px"
                            height="24px"
                            alt=""
                          />
                          <p className="mb-0">Setting</p>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="d-flex gap-3">
                          <img
                            src={logoutAsset}
                            width="23px"
                            height="21px"
                            alt=""
                          />
                          <p className="mb-0">Logout</p>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
