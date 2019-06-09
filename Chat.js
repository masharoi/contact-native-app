import React from "react";
import ChatSocket from "./ChatSocket";
import Contact from "./Contact";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from "react-native";
import styles from './styles/Chat.style.js';

export default class Chat extends ChatSocket {
  constructor(props) {
    super(props);

    this.state = {
      room: null,
      message: "",
      guess: "",
      contact_word: "",
      description: "",
      contacts: [],
      messages: []
    };
    this.join_room();
  }
  render() {
    const { room } = this.state;
    const empty_state = <Text style={styles.emptyState}> Be the first one to create Contact!</Text>;
    const non_empty_state = (
      <View style={styles.nonEmptyStateContainer}>
        {this.state.contacts.map(message => {
          return (
            <Contact
              username={message.username}
              description={message.description}
              contact={this.contact}
            />
          );
        })}
      </View>
    );
    return (
      <View style={styles.container}>
        <Text>The room is {room}</Text>

        {this.state.contacts.length == 0 ? empty_state : non_empty_state}

          <View>
          <View>
            <TextInput
              placeholder="Word"
              value={this.state.contact_word}
              onChangeText={text => this.setState({ contact_word: text })}
            />
            <TextInput
              placeholder="Description"
              value={this.state.description}
              onChangeText={text => this.setState({ description: text })}
            />
          </View>
          <Button onPress={this.new_contact} title="New Contact" />
        </View>
      </View>
    );
  }
}
