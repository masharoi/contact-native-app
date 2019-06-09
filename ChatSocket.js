import React, { Component } from "react";
import io from "socket.io-client";

export default class ChatSocket extends Component {
  constructor(props) {
    super(props);
    this.socket = io("http://10.0.2.2:5000", {
      jsonp: false,
      transports: ["websocket"]
    });
    this.socket.connect();
    this.socket.on("connect", () => {
      console.log("connected to socket server");
    });
    this.socket.on("new contact", function(data) {
      addContact(data);
    });

    this.socket.on("joined", function(data) {
      console.log("Here is the data on joined ", data);
      setRoom(data["room"]);
    });

    const addContact = message => {
      console.log("adding new contact" + message.description);
      this.setState({ contacts: [...this.state.contacts, message] });
    };

    const setRoom = room => {
      this.setState({ room });
    };

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.socket.on("contact", function(data) {
      addMessage(data);
    });
    this.contact = ev => {
      ev.preventDefault();
      this.socket.emit("contact", {
        username: this.props.username,
        message: this.state.guess
      });
      this.setState({ guess: "" });
    };

    this.new_contact = ev => {
      ev.preventDefault();
      this.socket.emit("new contact", {
        username: this.props.username,
        word: this.state.contact_word,
        description: this.state.description,
        room: this.state.room
      });
      this.setState({ description: "", contact_word: "" });
    };

    this.join_room = () => {
      console.log(this.props.username + " is joining the room");
      this.socket.emit("join_room", {
        username: this.props.username
      });
    };
  }
}
