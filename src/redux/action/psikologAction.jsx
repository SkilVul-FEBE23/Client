import axios from "axios";

export const GET_PSIKOLOGS = "GET_PSIKOLOGS";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_DATA = "SUCCESS_GET_DATA";
export const SELECTED_PSIKOLOG = "SELECTED_PSIKOLOG";
export const REMOVE_SELECTED_PSIKOLOG = "REMOVE_SELECTED_PSIKOLOG";
export const START_SEARCH_PSIKOLOG = "START_SEARCH_PSIKOLOG";
export const SUCCESS_SEARCH_PSIKOLOG = "SUCCESS_SEARCH_PSIKOLOG";
export const START_FILTER_PSIKOLOG = "START_FILTER_PSIKOLOG";
export const SUCCESS_FILTER_PSIKOLOG = "SUCCESS_FILTER_PSIKOLOG";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function getDataUsers(data) {
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

export const startSearchDataPsikolog = () => {
  return {
    type: START_SEARCH_PSIKOLOG,
  };
};

export const searchDataPsikolog = (data) => {
  return {
    type: SUCCESS_SEARCH_PSIKOLOG,
    payload: data,
  };
};
export const startFilterDataPsikolog = () => {
  return {
    type: START_FILTER_PSIKOLOG,
  };
};

export const FilterDataPsikolog = (data) => {
  return {
    type: SUCCESS_FILTER_PSIKOLOG,
    payload: data,
  };
};



export const getUsers = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const result = await axios.get(
      "https://febe23-server-production.up.railway.app/users"
    );
    dispatch(getDataUsers(result.data));
  };
};


export const getPsikologs = () => {
  return async (dispatch) => {
    //ubang isloading menjadi true
    dispatch(fetchStart());

    // get data psikolog dengan axios
    const result = await axios.get(
      "https://febe23-server-production.up.railway.app/partners"
    );
    dispatch(getDataUsers(result.data));
  };
};


export const searchPsikologs = (searchTerm) => {
  return async (dispatch) => {
    //ubang isloading menjadi true
    dispatch(startSearchDataPsikolog());

    // get data psikolog dengan axios
    const result = await axios.get(
      `https://febe23-server-production.up.railway.app/partners/search/${searchTerm}`
    );
    dispatch(searchDataPsikolog(result.data));
  };
};

export const filterPsikologs = (filterTerm) => {
  return async (dispatch) => {
    //ubang isloading menjadi true
    dispatch(startFilterDataPsikolog());

    // get data psikolog dengan axios
    const result = await axios.get(
      `https://febe23-server-production.up.railway.app/partners/lokasi/${filterTerm}`
    );
    dispatch(FilterDataPsikolog(result.data));
  };
};

