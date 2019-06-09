/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from "react-native";
import Chat from "./Chat";

import io from "socket.io-client";

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      started: false
    };
    // console.log(this.socket);
    // this.socket = io("http://10.0.2.2:5000", {
    //   jsonp: false,
    //   transports: ["websocket"]
    // });
    // this.socket.connect();
    //
    // console.log(this.socket);
    // this.socket.on("connect", () => {
    //   console.log("connected to socket server");
    // });
    // this.send_message = () => {
    //   console.log("sending message from client");
    //   this.socket.emit("join_room", {
    //     username: "Masha"
    //   });
    // };
  }

  update_username = text => {
    this.setState({ username: text });
  };

  start_game = () => {
    this.setState({ started: true });
  };

  render() {
    const { started, username } = this.state;
    const init_screen = (
      <View>
        <TextInput
          placeholder="Username"
          value={this.state.username}
          onChangeText={this.update_username}
        />
        <Button title="Start Game" onPress={this.start_game}></Button>
      </View>
    );
    const chat_screen = <Chat username={username}/>;
    console.log(username);
    return <View>{started ? chat_screen : init_screen}</View>;
  }
}
