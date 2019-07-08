import React, { Component } from "react";
import Message from "./Message";

class ChatWindow extends Component {
  state = {
    activeUser: this.props.activeUser
  };

  readFile = () => {};

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="chatWindow">
        <Message userID="1" activeUser={this.activeUser} />
        <Message userID="2" activeUser={this.activeUser} />
      </div>
    );
  }
}

export default ChatWindow;
