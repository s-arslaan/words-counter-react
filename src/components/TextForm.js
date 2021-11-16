import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here..");

  const handleUpClick = () => {
    // console.log("uppercase clicked!\nTEXT:: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
