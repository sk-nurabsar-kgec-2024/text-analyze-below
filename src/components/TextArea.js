import { useState } from "react";

export default function TextArea(props) {
    const [text, setText] = useState('')

    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handelLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!", "success");
    };
    const handelCapitalizedClick = () => {
      let newText = text[0].toUpperCase() + text.slice(1);
      setText(newText);
      props.showAlert("Converted to Capitalize!", "success");
    };
    const handelExtraSpace = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Remove Spece Extra!", "success");
    }
    const handelCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Your text is coppied!", "success");
    }
    const textClear = () => {
      let newText = (" ");
      setText(newText);
      props.showAlert("Text is Clear!", "success");
    };
    const handelOnChange = (event) => {
        setText(event.target.value)
    }
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#008B8B" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3 mx-1" onClick={handelUpClick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-secondary my-3 mx-1"
            onClick={handelLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-secondary my-3 mx-1"
            onClick={handelCapitalizedClick}
          >
            Capitalized Case
          </button>
          <button
            className="btn btn-danger my-3 mx-1"
            onClick={handelExtraSpace}
          >
            Remove Space Extra
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={handelCopy}>
            Copy text
          </button>
          <button className="btn btn-danger my-3 mx-1" onClick={textClear}>
            Clear
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes Reads</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter the New text"}</p>
      </div>
    </>
  );
}
