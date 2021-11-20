import React from "react";

export default function Alert(props) {
  return (
    <div style={{height: '60px'}}>

    {/* props.alert if null then function wont return anything (as all JSX code will be converted to JS) */}
    {props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.msg}</strong>
      </div>
    )}
    </div>
  );
}
