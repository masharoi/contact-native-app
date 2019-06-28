import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import styles from "./styles/Contact.style.js";

export default class Contact extends React.Component {
  state = {
    word: "",
    defaultView: true
  };

  contactClicked = () => {
    this.setState({ defaultView: false });
  };

  cancelContact = () => {
    this.setState({ defaultView: true });
  };
  render() {
    const { word } = this.state;
    const { contact, username, description } = this.props;
    const defaultContactView = (
      <View>
        <View style={styles.defaultContainer}>
          <Text>{description}</Text>
        </View>
      </View>
    );
    const selectedContactView = (
      <View style={styles.selectedContainer}>
        <Button onPress={this.cancelContact} value={word} title="Cancel" />
        <TextInput
          placeholder="Guess"
          value={word}
          onChange={e => this.setState({ word: e.target.value })}
        />
        <Button onPress={contact} value={word} title="Try" />
      </View>
    );

    return (
      <TouchableWithoutFeedback onPress={this.contactClicked}>
        <View>
          <View>
            <Text>{username}</Text>
          </View>
          <View>
            {this.state.defaultView ? defaultContactView : selectedContactView}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
