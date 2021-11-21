import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    if (text.length>0) {
      let newText = text.trim().toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase", "success");
    }
  };

  const handleLowerClick = () => {
    if (text.length>0) {
      
      let newText = text.trim().toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");
    }
  };

  const handleCamelClick = () => {
    if(text.length>0) {

      let arr = text.trim().split(/\s+/);
      let newText = "";
  
      // if there is space at end of string, word[0] becomes undefined
      arr.forEach((word, index) => {
        // word[0] will be uppercase, rest alphabets will be lowercase, plus space
        newText += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
      });
      setText(newText.trim());
      props.showAlert("Camel Cased Sucessfully", "success");
    }
  };
  
  const handleCapitalizeClick = () => {
    if(text.length>0) {

      let arr = text.trim().split(".");
      let newText = "";
  
      // if there is space at end of string, word[0] becomes undefined
      arr.forEach((word, index) => {
        // word[0] will be uppercase, rest alphabets will be lowercase, plus space
        newText += word.trim().charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ". ";
      });
      setText(newText.trim());
      props.showAlert("Title Cased", "success");
    }
  };

  const handleCopyClick = () => {
    if (text.length>0) {
      // text.select();
      // text.setSelectionRange(0, 99999); /* For mobile devices */
      navigator.clipboard.writeText(text.trim());
      props.showAlert("Copied to clipboard", "success");
    }
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      {/* in style= '{'--first curly for JS '{' --second curly for OBJECT }} */}
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <div className="row mb-2">
          <div className="col-12 col-sm-6">
            <h2>{props.heading}</h2>
          </div>
          <div className="col-12 col-sm-6">
            <h2 className={`font-monospace text-${props.mode === "light" ? "primary" : "warning"}`}>
              {text
                  .trim()
                  .split(/\s+/)
                  .filter(function (element) {
                    return element.length !== 0;
                  }).length
              }{" "}
              words | {text.length} characters
            </h2>
          </div>
        </div>
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
        <button disabled={text.length===0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpperClick}
        >
          UPPER
        </button>
        <button disabled={text.length===0}
          className="btn btn-success mx-2 my-1"
          onClick={handleLowerClick}
        >
          lower
        </button>
        <button disabled={text.length===0}
          className="btn btn-info mx-2 my-1"
          onClick={handleCapitalizeClick}
        >
          <b>Capitalize</b>
        </button>
        <button disabled={text.length===0}
          className="btn btn-warning mx-2 my-1"
          onClick={handleCamelClick}
        >
          <b>Title Case</b>
        </button>
        <button disabled={text.length===0}
          className="btn btn-secondary mx-2 my-1"
          onClick={handleCopyClick}
        >
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-dark mx-2 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <h3 className="my-3">Your text Summary</h3>
        <p>
          {(text
            .trim()
            .split(/\s+/)
            .filter(function (element) {
              return element !== "";
            }).length * 0.008).toPrecision(3)}{" "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text to preview here..."}</p>
      </div>
    </>
  );
}
