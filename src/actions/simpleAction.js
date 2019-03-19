export const simpleAction = () => dispatch => {
  console.log("Dispatching simple action");
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action"
  });
};
