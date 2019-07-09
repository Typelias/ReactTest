import React, { Component } from "react";

class Message extends Component {
  state = {
    userID: this.props.userID,
    text: this.props.message,
    activeUser: this.props.activeUser
  };

  getClassName = () => {
    console.log(this.state);
    if (this.state.userID === this.state.activeUser) {
      return "activeUser message";
    }
    return "standardMessage message";
  };

  render() {
    return <p className={this.getClassName()}>{this.state.text}</p>;
  }
}

export default Message;
