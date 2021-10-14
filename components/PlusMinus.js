import React from "react";
import { connect } from "react-redux";
import { addAction, substractAction } from "../actions/PlusMinusActions";

const PlusMinus = ({ values, addAction, substractAction }, ...props) => {
  console.log(values, addAction, substractAction, props);
  return (
    <>
      <h1>Ajouter ou soustraire 1 à toutes les valeurs</h1>
      {values.map((v, i) => (
        <span key={i}> {v} /</span>
      ))}
      <br />
      <button onClick={() => handleAdd([1, 1, 1, 1, 1, 1, 1])}>+</button>
      <button onClick={() => handleSubstract([1, 1, 1, 1, 1, 1, 1])}>-</button>
    </>
  );
};

const PlusMinusContainer = (state) => ({ values: state.values });

console.log("PlusMinusContainer", PlusMinusContainer);

export default connect(PlusMinusContainer, (dispatch) => ({
  handleAdd: (ary) => dispatch(addAction(ary)),
  handleSubstract: (ary) => dispatch(substractAction(ary)),
}))(PlusMinus);
