import React, { Component } from "react";
import datatype from "prop-types";

class R018_PropsDatatype extends Component {
  render() {
    let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        <p>StringProps:{String}</p>
        <p>NumberProps:{Number}</p>
        <p>BoolenProps:{Boolean}</p>
        <p>ArrayProps:{Array}</p>
        <p>ObjectJsonProps:{JSON.stringify(ObjectJson)}</p>
        <p>FunctionProps:{Function}</p>
      </div>
    );
  }
}
R018_PropsDatatype.propTypes = {
  Stirng: datatype.number,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func
};
export default R018_PropsDatatype;
