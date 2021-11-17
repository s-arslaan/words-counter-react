import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    // console.log("uppercase clicked!\nTEXT:: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCapitalizeClick = () => {
    let arr = text.split(" ");
    let newText = "";

    // if there is space at end of string, word[0] becomes undefined
    arr.forEach((word, index) => {
      // word[0] will be uppercase, rest alphabets will be lowercase, plus space
      newText += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
    });
    setText(newText.trim());
    props.showAlert("Capitalized every word", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
    // let newText = "";
    // setText(newText);
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
      {/* in style= '{'--first curly for JS '{' --second curly for OBJECT }} */}
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here.."
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="9"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#282C34",
              color: props.mode === "light" ? "black" : "white",
            }}
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
          <b>Capitalize</b>
        </button>
        <button
          className="btn btn-secondary mx-2 my-1"
          onClick={handleCopyClick}
        >
          Copy
        </button>
        <button className="btn btn-dark mx-2 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <h2 className="my-3">Your text Summary</h2>
        <p>
          {/* {text.length>0? text.split(" ").length : '0'} words  */}
          {
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element !== "";
              }).length
          }{" "}
          words &amp; {text.length} characters
          <br />
          {text
            .trim()
            .split(" ")
            .filter(function (element) {
              return element !== "";
            }).length * 0.008}{" "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text to preview here..."}</p>
      </div>
    </>
  );
}
