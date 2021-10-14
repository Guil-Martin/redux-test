import React from "react";
import { connect } from "react-redux";
import { addAction, substractAction } from "../actions/PlusMinusActions";

const PlusMinus = (
  { values = [8, 14, 9, 8, 6, 5, 17], handleAdd, handleSubstract },
  ...props
) => {
  console.log(values, handleAdd, handleSubstract, props);
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

const mapStateToProps = (state) => ({ values: state.values });

console.log("PlusMinus mapStateToProps", mapStateToProps);

export default connect(mapStateToProps, (dispatch) => ({
  handleAdd: (ary) => dispatch(addAction(ary)),
  handleSubstract: (ary) => dispatch(substractAction(ary)),
}))(PlusMinus);
