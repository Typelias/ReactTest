import React from "react";
import ReactDOM from "react-dom";
import ChatWindow from "./Components/ChatWindow";

ReactDOM.render(
  <React.Fragment>
    <h1>Hello world</h1>
    <ChatWindow activeUser="1" />
  </React.Fragment>,
  document.getElementById("root")
);
