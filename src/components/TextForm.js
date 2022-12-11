import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success")
  };
  const handelLpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success")

  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handelClearText = (event) => {
    setText("");
  };

  const [text, setText] = useState("");
  /*const [style1, setStyle] = useState({
    backgroundColor: props.mode === "dark" ? "gray" : "white",
    color: props.mode === "dark" ? "white" : "black",
  });*/

  //const hStyle = { color: "pink" };

  /* const change = () =>{
    
      {`${backgroundColor; props.mode === "dark" ? "gray" : "white";
       color: props.mode === "dark" ? "white" : "black"}`}
    
  }*/
  return (
    <div>
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        {props.heading}
      </h1>
      <div
        className={`${props.mode === "dark" ? "TextArea" : "TextArea1"} mb-3`}
      >
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#0d0e51" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className={`${
            props.mode === "dark" ? "TextArea" : "TextArea1"
          } form-control mt-3`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handelOnChange}
          placeholder="Enter text here"
        ></textarea>
        <button
          className="btn btn-primary mt-3"
          onClick={handelUpClick}
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Convert to uppercase
        </button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button
          className="btn btn-primary mt-3"
          onClick={handelLpClick}
        >
          Convert to lowercase
        </button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button className="btn btn-primary mt-3" onClick={handelClearText}>
          Clear text
        </button>

        <span>&nbsp;&nbsp;&nbsp;</span>
        <button className="btn btn-primary mt-3" onClick={handleCopy}>
          copy text
        </button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button className="btn btn-primary mt-3" onClick={handleExtraSpace}>
          Remove extra spaces
        </button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <button className="btn btn-primary mt-3">Count Words and Text</button>
        <br />
        <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <h4>
            Words count = {text.split(" ").length} <br /> Character count ={" "}
            {text.length}
          </h4>
          <h4>time = {0.008 * text.split("").length} Minutes Read</h4>
          <br />
          <h2> Preview </h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
