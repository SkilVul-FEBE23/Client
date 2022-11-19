import {
  FETCH_START,
  SELECTED_PSIKOLOG,
  SUCCESS_GET_DATA,
  REMOVE_SELECTED_PSIKOLOG,
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

    default:
      return state;
  }
};
