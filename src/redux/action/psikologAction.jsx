import axios from "axios";

export const GET_PSIKOLOGS = "GET_PSIKOLOGS";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_DATA = "SUCCESS_GET_DATA";
export const SELECTED_PSIKOLOG = "SELECTED_PSIKOLOG";
export const REMOVE_SELECTED_PSIKOLOG = "REMOVE_SELECTED_PSIKOLOG";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function getDataPsikologs(data) {
  return {
    type: SUCCESS_GET_DATA,
    payload: data,
  };
}

export const selectedPsikolog = (psikolog) => {
  return {
    type: SELECTED_PSIKOLOG,
    payload: psikolog,
  };
};

export const removeSelectedPsikolog = () => {
  return {
    type: REMOVE_SELECTED_PSIKOLOG,
  };
};

export const getPsikologs = () => {
  return async (dispatch) => {
    //ubang isloading menjadi true
    dispatch(fetchStart());

    // get data psikolog dengan axios
    const result = await axios.get(
      "https://6347c70edb76843976b1f3f8.mockapi.io/psikolog"
    );
    dispatch(getDataPsikologs(result.data));
  };
};