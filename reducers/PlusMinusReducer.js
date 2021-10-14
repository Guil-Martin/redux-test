import { ADD, SUBSTRACT } from "../actions/types";

const initialState = {
  values: [8, 14, 9, 8, 6, 5, 17],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  console.log("state", state, "action", action);
  console.log("state values", state.values, "action", action);
  console.log("type", type, "payload", payload);

  switch (type) {
    case ADD:
      return {
        values: state.values.map((v, i) => v + payload.values[i]),
      };
    case SUBSTRACT:
      return {
        values: state.values.map((v, i) => v - payload.values[i]),
      };
    default:
      return state;
  }
}
