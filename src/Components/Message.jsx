import React, { Component } from "react";

class Message extends Component {
  state = {
    userID: this.props.uID,
    text: "Temporary test",
    activeUser: this.props.activeUser
  };

  getClassName = () => {
    if (this.state.userID === this.state.activeUser) {
      return "activeUser message";
    }
    return "standardMessage message";
  };

  render() {
    return <div className={this.getClassName()}>{this.state.text}</div>;
  }
}

export default Message;
