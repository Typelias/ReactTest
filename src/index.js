import React from "react";
import ReactDOM from "react-dom";
import ChatWindow from "./Components/ChatWindow";

ReactDOM.render(
  <React.Fragment>
    <ChatWindow activeUser="1" />
  </React.Fragment>,
  document.getElementById("root")
);
