import * as types from "../actions/ActionTypes";

const initialState = {
  serialNumber: "",
  aaBatteries: 0,
  dBatteries: 0,
  parallelPort: false,
  strikes: 0
};

const simpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SERIAL:
      return Object.assign({}, state, {
        serialNumber: action.payload.serialNumber
      });
    case types.UPDATE_AA_BATTERIES:
      return Object.assign({}, state, {
        aaBatteries: action.payload.aaBatteries
      });
    case types.UPDATE_D_BATTERIES:
      return Object.assign({}, state, {
        dBatteries: action.payload.dBatteries
      });
    case types.UPDATE_PARALLEL_PORT:
      return Object.assign({}, state, {
        parallelPort: action.payload.parallelPort
      });
    case types.UPDATE_STRIKES:
      return Object.assign({}, state, {
        strikes: action.payload.strikes
      });
    default:
      return state;
  }
};

export default simpleReducer;
