import * as types from "./ActionTypes";

export const updateSerial = newSerial => dispatch => {
  dispatch({
    type: types.UPDATE_SERIAL,
    payload: {
      serialNumber: newSerial
    }
  });
};

export const updateAaBatteries = newCount => dispatch => {
  dispatch({
    type: types.UPDATE_AA_BATTERIES,
    payload: {
      aaBatteriesCount: newCount
    }
  });
};

export const updateDBatteries = newCount => dispatch => {
  dispatch({
    type: types.UPDATE_D_BATTERIES,
    payload: {
      dBatteriesCount: newCount
    }
  });
};
