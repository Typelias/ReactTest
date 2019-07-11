import React, { Component } from "react";

class Inputbox extends Component {
  state = {};

  send = () => {
    let inputBox = document.getElementById("inputText");
    if (inputBox.value === "") {
      return;
    }
    this.props.onSend(inputBox.value);
    inputBox.value = "";
  };

  render() {
    return (
      <div id="Inputbox">
        <input id="inputText" type="text" placeholder="Enter message" />
        <button id="send" onClick={() => this.send()}>
          Send
        </button>
        {document.addEventListener("DOMContentLoaded", function() {
          document
            .getElementById("inputText")
            .addEventListener("keydown", function(event) {
              if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("send").click();
              }
            });
        })}
      </div>
    );
  }
}

export default Inputbox;
