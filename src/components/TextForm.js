// text is the initial text = "enter text here"
// setText is the modified text, used to store value when the onclick event is clicked and text is modified
// useState must be imported to use the state method. ususally known as hook
// hook was invented for us to use state and other react features without writing a class component. made for functional component.

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")

  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")

  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("The text has been all cleared!", "success")

  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success")

  };

  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!", "success")

  };

  // const handleSubmitClick = () => {
  //   let newText = text.concat("Thank you! Your response has been submitted");
  //   setText(newText);
  //   props.showAlert("The text has been submitted!", "success")

  // };

  //on change is necessary as it helps to write on the text area
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
           style={{backgroundColor: props.mode === 'dark' ? '#393838' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'} }
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2"  onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        {/* <button className="btn btn-primary mx-2"  onClick={handleSubmitClick}>
          Submit
        </button> */}

        <button className="btn btn-primary mx-2"  onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2"  onClick={handleExtraSpace}>
          Remove Extra Space
        </button>

        <button className="btn btn-primary mx-2 my-2"  onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className="my-2">Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h1>Preview</h1>
        <p>{text.length>0 ? text: 'Enter something in the textfield to preview it here.'}</p>
      </div>
    </>
  );
}
