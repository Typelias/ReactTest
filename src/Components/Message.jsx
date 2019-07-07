import React, { Component } from "react";

class Message extends Component {
  state = {
    userID: this.props.uID,
    text: "Temporary test",
    activeUser: this.props.activeUser
  };

  getClassName = () => {
    if (this.state.userID === this.state.activeUser) {
      return "activeUser";
    }
    return "standardMessage";
  };

  render() {
    return (
      <div className={getClassName() + " message"}> {this.state.Message}</div>
    );
  }
}

export default Message;
