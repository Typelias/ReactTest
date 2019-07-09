import React, { Component } from "react";
import Message from "./Message";

class ChatWindow extends Component {
  state = {
    activeUser: this.props.activeUser,
    messages: [
      { ID: 1, userID: "1", message: "Hej" },
      { ID: 2, userID: "2", message: "Tja" },
      { ID: 3, userID: "1", message: "Läget?" },
      { ID: 4, userID: "2", message: "Bra" },
      { ID: 5, userID: "2", message: "Själv?" },
      { ID: 6, userID: "1", message: "Bara bra" }
    ]
  };

  render() {
    return (
      <div className="chatWindow">
        {this.state.messages.map(message => (
          <Message
            key={message.ID}
            userID={message.userID}
            activeUser={this.state.activeUser}
            message={message.message}
          />
        ))}
      </div>
    );
  }
}

export default ChatWindow;
