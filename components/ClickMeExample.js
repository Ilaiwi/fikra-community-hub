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
  TextInput
} from "react-native";

type Props = {};
export default class ClickMeExample extends Component<Props> {
  state = {
    x: 5
  };

  clickMe = () => {
    this.setState({ x: 6 });
  };

  render() {
    return (
      <React.Fragment>
        <View style={styles.red}>
          <Text>Hello world! {this.state.x}</Text>
        </View>
        <View style={styles.blue}>
          <Button onPress={this.clickMe} title="click here" />
        </View>
        <View style={styles.input}> 
          <TextInput />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  red: {
    backgroundColor: "red",
    flex: 1
  },
  blue: {
    backgroundColor: "blue",
    flex: 1
  },
  input : {
    flex : 2,
  }
});
