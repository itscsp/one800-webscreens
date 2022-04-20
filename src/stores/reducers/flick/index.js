import { TOGGLE } from "./action_types";

const INITIAL_STATE = {
  videoType: "fix",
};
const flickReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE: {
      return {
        ...state,
        videoType: action.payload,
      };
    }
    default:
      return state;
  }
};

export default flickReducer;
