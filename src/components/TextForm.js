import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    // console.log("uppercase clicked!\nTEXT:: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalizeClick = () => {
    let arr = text.split(" ");
    let newText = "";

    // if there is space at end of string, word[0] becomes undefined
    arr.forEach((word, index) => {
      let space = " ";
      if (index === arr.length - 1) {
        space = "";
      }

      // word[0] will be uppercase, rest alphabets will be lowercase, plus space
      newText += word[0].toUpperCase() + word.slice(1).toLowerCase() + space;
      
    });
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
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
            placeholder="Enter text here.."
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpperClick}
        >
          UPPER
        </button>
        <button
          className="btn btn-success mx-2 my-1"
          onClick={handleLowerClick}
        >
          lower
        </button>
        <button
          className="btn btn-warning mx-2 my-1"
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words &amp; {text.length} characters
          <br />
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
