import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { psikologsReducer, selectedPsikologReducer } from "../reducer/reducer";

const allReducer = combineReducers({
  psikolog: psikologsReducer,
  psikologinfo: selectedPsikologReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
