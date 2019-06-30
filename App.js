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
import Attendance from "./components/Attendance";
import EventListView from "./components/EventListView";
import moment from "moment";

const attendance = [
  {
    rating: 4,
    name: "Sudqi Jawabra",
    image:
      "https://scontent.fjrs10-1.fna.fbcdn.net/v/t31.0-1/c297.243.868.868a/16251865_1523214177703792_1699321312497583815_o.jpg?_nc_cat=107&_nc_oc=AQlpXhgXOD6aho0Ge2jTxJ0Rs3HUzYrFgE3xZVD6b8XovwTUtIUni1gF4MU_y-SK7Tg&_nc_ht=scontent.fjrs10-1.fna&oh=a76e7aa3d27b7d1725e0348b5bda8b32&oe=5DC4C3BA"
  },
  {
    rating: 5,
    name: "Nagahm Jawabra",
    image:
      "https://scontent.fjrs10-1.fna.fbcdn.net/v/t1.0-1/65293927_2264903896938029_8761189656944443392_n.jpg?_nc_cat=105&_nc_oc=AQmcoY9NUP8aQsJQCOVYAvRU91t0viIH-0sFsIL58ivi85G91KmtZJgoQw3MYV6eCOo&_nc_ht=scontent.fjrs10-1.fna&oh=293048dc7d87fdda3775cac5bf26fb16&oe=5DBCCFF7"
  },
  {
    rating: 1,
    name: "Ahmad Ilaiwi",
    image:
      "https://scontent.fjrs10-1.fna.fbcdn.net/v/t1.0-9/12278939_10154616365362004_4982155938375022821_n.jpg?_nc_cat=109&_nc_oc=AQmt49K5TRWKd2Qw4SyjHDqIwcxVy1TnwrNj6SOGy_g9okjJltBjnSJ0NjeXPNT6lEA&_nc_ht=scontent.fjrs10-1.fna&oh=4d6a79689c8926f36023a13a1732baa5&oe=5DBD0B43"
  },
  {
    rating: 3,
    name: "Hussam Sharaf",
    image:
      "https://scontent.fjrs10-1.fna.fbcdn.net/v/t1.0-9/61446165_2409094379140820_2017333485957545984_o.jpg?_nc_cat=109&_nc_oc=AQmgEnXyXIzTR1_YZymnzYzLUf4CVVxcSXlpKtPSTpYYggewtJ39dXiQa6BcPnsc23w&_nc_ht=scontent.fjrs10-1.fna&oh=9c113f5d0445733077bcb92019fb6cc9&oe=5DC1FB45"
  }
];

type Props = {};
export default class App extends Component<Props> {
  state = {
    page: "login",
    user: {
      rating: 4,
      name: "Sudqi Jawabra",
      image:
        "https://scontent.fjrs10-1.fna.fbcdn.net/v/t31.0-1/c297.243.868.868a/16251865_1523214177703792_1699321312497583815_o.jpg?_nc_cat=107&_nc_oc=AQlpXhgXOD6aho0Ge2jTxJ0Rs3HUzYrFgE3xZVD6b8XovwTUtIUni1gF4MU_y-SK7Tg&_nc_ht=scontent.fjrs10-1.fna&oh=a76e7aa3d27b7d1725e0348b5bda8b32&oe=5DC4C3BA"
    },
    events: [
      {
        image:
          "https://ak2.picdn.net/shutterstock/videos/19294792/thumb/11.jpg",
        title: "Machiene learning",
        description:
          "Need some volunteers for Machiene learning workshop at Fikra!",
        date: moment().add(2, "d"),
        hours: 2,
        attendance: [attendance[1]]
      },
      {
        image:
          "https://envato-shoebox-0.imgix.net/9fc2/d220-e310-447b-8c1c-bc722bdac634/syda_0244711.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=ef1ff966908e3384b2136101e7179254",
        title: "Clean Park",
        description: "Volunteers needed to clean the public park",
        date: moment().add(4, "d"),
        hours: 4,
        attendance: [attendance[0], attendance[2]]
      },
      {
        image: "http://www.maannews.com/Photos/373562C.jpg",
        title: "Marthoon origanizeers",
        description:
          "We need people to help setup the right of movment marthoon",
        date: moment().subtract(2, "d"),
        hours: 8,
        attendance: attendance,
      }
    ]
  };

  handleLogin = user => {
    this.setState({
      user: {
        rating: 4,
        name: "Sudqi Jawabra",
        image:
          "https://scontent.fjrs10-1.fna.fbcdn.net/v/t31.0-1/c297.243.868.868a/16251865_1523214177703792_1699321312497583815_o.jpg?_nc_cat=107&_nc_oc=AQlpXhgXOD6aho0Ge2jTxJ0Rs3HUzYrFgE3xZVD6b8XovwTUtIUni1gF4MU_y-SK7Tg&_nc_ht=scontent.fjrs10-1.fna&oh=a76e7aa3d27b7d1725e0348b5bda8b32&oe=5DC4C3BA"
      },
      page: "eventList"
    });
  };

  handleAttend = (event) => {
    console.log(event)
    //TODO: SEDQUI PLEASE FILL THIS OR I WILL KILL YOU
  }
  handleViewEvent = (event) => {
    
  }

  handlePostSave = post => {};

  componentDidMount() {}

  render() {
    return (
      <ThemeContext.Provider value={getTheme()}>
        <View style={styles.container}>
          {this.state.page === "login" ? (
            <LoginView onLoginClick={this.handleLogin} />
          ) : null}
          {this.state.page === "eventList" ? (
            <EventListView onAttend={this.handleAttend} onViewEvent={this.handleViewEvent} user={this.state.user} events={this.state.events} />
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
    alignItems: "center",
    marginTop: 30,
  }
});
