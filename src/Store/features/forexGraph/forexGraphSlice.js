import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
export const graphSlice = createSlice({
  name: "graphData",
  initialState: { data: [], coinInf: [], status: STATUSES.IDLE },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add(state, action) {
      state.data = [];
      action.payload.data.values.forEach((val) => {
        state.data.push({
          x: val.datetime,
          y: [val.open, val.high, val.low, val.close],
        });
      });
    },
    coinInf(state, action) {
      state.coinInf = action.payload.data;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { add, setStatus, coinInf } = graphSlice.actions;
export default graphSlice.reducer;

// get graph data
export function fetchGraphData(time) {
  return async function fetchGraphDataThunk(dispatch, state) {
    try {
      dispatch(setStatus(STATUSES.LOADING));
      const res = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=AAPL&interval=${time}&apikey=fd1418192dae47dc864e348d608dd2e4`
      );

      dispatch(add(res));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
export function fetchCurrencyData(coinType) {
  return async function fetchCurrencyDataThunk(dispatch, state) {
    try {
      dispatch(setStatus(STATUSES.LOADING));
      const res = await axios.get(
        `https://api.twelvedata.com/quote?symbol=${coinType}&apikey=fd1418192dae47dc864e348d608dd2e4`
      );

      dispatch(coinInf(res));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
//https://api.twelvedata.com/quote?symbol=AAPL&apikey=fd1418192dae47dc864e348d608dd2e4
