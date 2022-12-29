import axios from "axios";

const setAuthHeaders = (token) => {
  if (token) {
    console.log(token);
    axios.defaults.headers = {
      Authorization: token,
    };
  } else delete axios.defaults.headers.Authorization;
};

export default setAuthHeaders;
