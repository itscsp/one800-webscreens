import { combineReducers } from "redux";
import flickReducer from "./flick";

const rootReducer = combineReducers({
  flickType: flickReducer,
});

export default rootReducer;
