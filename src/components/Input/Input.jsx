import React from "react";
import './Input.css';

function Input(props) {
  return (
    // <div className="input__container">
      <input
        required
        onChange={(event) => props.setValue(event.target.value)}
        value={props.value}
        type={props.type}
        name={props.name}
        id={props.id}
        className={"input " + props.className}
        placeholder={props.placeholder}
      />
    // </div>
  );
}

export default Input;
