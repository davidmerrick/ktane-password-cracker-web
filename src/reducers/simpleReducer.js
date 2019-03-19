import * as types from "../actions/ActionTypes";

const initialState = {
  serialNumber: ""
};

const simpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SERIAL:
      return Object.assign({}, state, {
        serialNumber: action.payload.serialNumber
      });
    default:
      return state;
  }
};

export default simpleReducer;
