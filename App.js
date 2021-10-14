import React from "react";
import { render } from "react-dom";
// import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import store from "./store";
import PlusMinus from "./components/PlusMinus";

render(
  <Provider store={store}>
    {console.log("store", store.getState())}
    <PlusMinus />
  </Provider>,
  document.getElementById("wrapper")
);

// const initialValues = {
//   values: [8, 14, 9, 8, 6, 5, 17],
// };

// const addAction = (ary) => ({
//   type: "ADD",
//   payload: { values: ary },
// });

// const substractAction = (ary) => ({
//   type: "SUBSTRACT",
//   payload: { values: ary },
// });

// const mathReducer = (state = initialValues, action) => {
//   switch (action.type) {
//     case "ADD":
//       return {
//         values: state.values.map((v, i) => v + action.payload.values[i]),
//       };
//     case "SUBSTRACT":
//       return {
//         values: state.values.map((v, i) => v - action.payload.values[i]),
//       };
//     default:
//       return state;
//   }
// };

// const PlusMinusContainer = connect(
//   (state) => ({ values: state.values }),
//   (dispatch) => ({
//     handleAdd: (ary) => dispatch(addAction(ary)),
//     handleSubstract: (ary) => dispatch(substractAction(ary)),
//   })
// )(PlusMinusComponent);

// const store = createStore(mathReducer, initialValues);

// function PlusMinusComponent({ values, handleAdd, handleSubstract }) {
//   return (
//     <>
//       <h1>Ajouter ou soustraire 1 à toutes les valeurs</h1>
//       {values.map((v, i) => (
//         <span key={i}> {v} /</span>
//       ))}
//       <br />
//       <button onClick={() => handleAdd([1, 1, 1, 1, 1, 1, 1])}>+</button>
//       <button onClick={() => handleSubstract([1, 1, 1, 1, 1, 1, 1])}>-</button>
//     </>
//   );
// }
