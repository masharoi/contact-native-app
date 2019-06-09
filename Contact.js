import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from "react-native";
import styles from './styles/Contact.style.js';

export default class Contact extends React.Component {
  state = {
    word: "",
    defaultView: true
  };
  handleMouseEnter = () => {
    this.setState({ defaultView: false });
  };

  handleMouseLeave = () => {
    this.setState({ defaultView: true });
  };
  render() {
    const { word } = this.state;
    const { contact, username, description } = this.props;
    const defaultContactView = (
      <View style={styles.container}>
        <Text>{description}</Text>
      </View>
    );
    const selectedContactView = (
      <View>
        <TextInput
          placeholder="Guess"
          value={word}
          onChange={e => this.setState({ word: e.target.value })}
        />
        <Button
          onPress={contact}
          value={word}
          title="Try"
        ></Button>
      </View>
    );

    return (
      <View
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <View>
          <Text>{username}</Text>
        </View>
        <View>
          {this.state.defaultView ? defaultContactView : selectedContactView}
        </View>
      </View>
    );
  }
}
