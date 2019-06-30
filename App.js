/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import LoginView from "./components/LoginView";
import PostsView from "./components/PostsView";
import { COLOR, ThemeContext, getTheme } from "react-native-material-ui";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    page: "login",
    user: undefined,
    posts: []
  };

  handleLogin = user => {
    const username = user.username.toLowerCase();
    const password = user.passowrd.toLowerCase();
    // fetch(
    //   `http://sadekj.herokuapp.com/signIn/${JSON.stringify({
    //     password,
    //     username
    //   })}`
    // ).then(res => {
    //   res.json().then(data => {
    this.setState({
      user: {
        name: username,
        email: "aa@aa",
        username: username,
        id: 2
      },
      page: "chat"
    });
    //   });
    // });
  };

  handlePostSave = post => {};

  componentDidMount() {}

  render() {
    return (
      <ThemeContext.Provider value={getTheme()}>
        <View style={styles.container}>
          {this.state.page === "login" ? (
            <LoginView onLoginClick={this.handleLogin} />
          ) : null}
          {this.state.page === "chat" ? (
            <PostsView
              onPostClick={this.handlePostSave}
              user={this.state.user}
              posts={this.state.posts}
            />
          ) : null}
        </View>
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
