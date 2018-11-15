import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  number: state
});

const mapDispatchToProps = dispatch => ({
  addAction: () => dispatch({ type: "ADD" }),
  addTenAction: () => dispatch({ type: "ADD10" }),
  resetAction: () => dispatch({ type: "RESET" }),
  removeAction: () => dispatch({ type: "REMOVE" }),
  removeTenAction: () => dispatch({ type: "REMOVE10" })
});

const CounterComponent = ({
  number,
  addAction,
  addTenAction,
  resetAction,
  removeAction,
  removeTenAction
}) => (
  <div>
    <p>{number}</p>
    <button onClick={addAction}>ADD_ONE</button>
    <button onClick={addTenAction}>ADD_TEN</button>
    <button onClick={resetAction}>RESET</button>
    <button onClick={removeAction}>REMOVE_ONE</button>
    <button onClick={removeTenAction}>REMOVE_TEN</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
