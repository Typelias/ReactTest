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
        <input id="inputText" type="text" />
        <button onClick={() => this.send()}>Send</button>
      </div>
    );
  }
}

export default Inputbox;
