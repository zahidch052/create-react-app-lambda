import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthHeaders from "../../../utils/setAuthHeaders";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const LOGIN = Object.freeze({
  FALSE: "false",
  IDLE: "idle",
  SUCCESS: "success",
});
export const userSlice = createSlice({
  name: "userData",
  initialState: {
    user: [],

    status: STATUSES.IDLE,
    login: LOGIN.IDLE,
  },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    statusReset(state, action) {
      state.login = LOGIN.IDLE;
      state.status = STATUSES.IDLE;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setLogin(state, action) {
      state.login = action.payload;
    },
    logout(state, action) {
      state.login = LOGIN.IDLE;
      state.user = null;
    },
  },
});

export const { login, setStatus, setLogin, logout, statusReset } =
  userSlice.actions;
export default userSlice.reducer;

// login user
export function userLogin(data) {
  return async function userLoginThunk(dispatch, state) {
    try {
      dispatch(setStatus(STATUSES.LOADING));
      const res = await axios.post(
        `https://soft.zamstudios.com/public/api/login`,
        data
      );

      if (res.data.status === true) {
        console.log(res.data);
        setAuthHeaders(res.data.data.token);
        dispatch(setLogin(res.data.status));

        dispatch(login(res.data));
      } else dispatch(setLogin(res.data.status));

      //   dispatch(add(res));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// register user
export function userRegister(data) {
  return async function userRegisterThunk(dispatch, state) {
    try {
      dispatch(setStatus(STATUSES.LOADING));
      const res = await axios.post(
        `https://soft.zamstudios.com/public/api/register`,
        data
      );
      console.log(res);
      if (res.data.status === true) {
        dispatch(setLogin(res.data.status));
        dispatch(login(res.data));
      } else dispatch(setLogin(res.data.status));

      //   dispatch(add(res));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// register logout
export function userLogout(token) {
  return async function userLogoutThunk(dispatch, state) {
    try {
      dispatch(setStatus(STATUSES.LOADING));
      console.log(token);
      dispatch(logout());
      const res = await axios.post(
        `https://soft.zamstudios.com/public/api/logout`
      );

      if (res.data.status === true) {
        dispatch(logout());
      }
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
