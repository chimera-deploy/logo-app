import axios from 'axios';

const baseURL = window.CHIMERA_ENDPOINT.includes("localhost")
  ? `http://localhost:9080`
  : `http://${window.CHIMERA_ENDPOINT}/logo`;

const init = {
  apiVersion: "",
  chimeraEndpoint: baseURL,
};

const reducer = (state=init, action) => {
  switch (action.type) {
    case "GET_VERSION": {
      return {
         ...state,
         apiVersion: action.payload.version
      };
    }
    default: {
      return state;
    }
  };
};

export const getLogo = () => {
  return async dispatch => {
    const response = await axios.get(baseURL);
    dispatch({ type: "GET_VERSION", payload: response.data });
  };
};

export default reducer;
