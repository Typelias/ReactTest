import React, { Component } from "react";
import Message from "./Message";
import Inputbox from "./Inputbox";

class ChatWindow extends Component {
  state = {
    activeUser: this.props.activeUser,
    messages: [
      { ID: 1, userID: "1", message: "Hej!" },
      { ID: 2, userID: "2", message: "Tja!" },
      { ID: 3, userID: "1", message: "Läget?" },
      { ID: 4, userID: "2", message: "Bra" },
      { ID: 5, userID: "2", message: "Själv?" },
      { ID: 6, userID: "1", message: "Bara bra" },
      { ID: 7, userID: "2", message: "Hej Olivia" },
      { ID: 8, userID: "1", message: "Det här är kul va" }
    ]
  };

  handleSend = input => {
    let messages = [...this.state.messages];
    let last = messages[messages.length - 1].ID;
    last++;
    messages.push({ ID: last, userID: this.state.activeUser, message: input });

    this.setState({ messages: messages });
    console.log(this.state.messages);
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
        <Inputbox onSend={this.handleSend} />
      </div>
    );
  }
}

export default ChatWindow;
