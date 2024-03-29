import {
  FETCH_START,
  SELECTED_PSIKOLOG,
  SUCCESS_GET_DATA,
  REMOVE_SELECTED_PSIKOLOG,
  START_SEARCH_PSIKOLOG,
  SUCCESS_SEARCH_PSIKOLOG,
  START_FILTER_PSIKOLOG,
  SUCCESS_FILTER_PSIKOLOG
} from "../action/psikologAction";

const initialState = {
  psikologs: [],
  isLoading: false,
  err: null,
};

export const selectedPsikologReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PSIKOLOG:
      return { ...state, ...payload };

    case REMOVE_SELECTED_PSIKOLOG:
      return {};

    default:
      return state;
  }
};

export const psikologsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };

    case SUCCESS_GET_DATA:
      return {
        ...state,
        psikologs: action.payload,
        isLoading: false,
      };

    case START_SEARCH_PSIKOLOG:
      return {
        ...state,
        isLoading: true,
      };

    case SUCCESS_SEARCH_PSIKOLOG:
      return {
        ...state,
        psikologs: action.payload,
        isLoading: false,
      };

    case START_FILTER_PSIKOLOG:
      return {
        ...state,
        isLoading: true,
      };

    case SUCCESS_FILTER_PSIKOLOG:
      return {
        ...state,
        psikologs: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
