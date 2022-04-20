import { TOGGLE } from "../reducers/flick/action_types";

export const changeFlick = (value) => (dispatch) => {
  dispatch({
    type: TOGGLE,
    payload: value,
  });
};
