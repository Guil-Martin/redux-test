import { ADD, SUBSTRACT } from "./types";

export const addAction = (ary) => ({
  type: ADD,
  payload: { values: ary },
});

export const substractAction = (ary) => ({
  type: SUBSTRACT,
  payload: { values: ary },
});