import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here..");

  const handleUpperClick = () => {
    // console.log("uppercase clicked!\nTEXT:: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
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
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.length} characters and {text.split(" ").length} words
          <br />
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <p>
          <h3>Preview</h3>
          <p>{text}</p>
        </p>
      </div>
    </>
  );
}
