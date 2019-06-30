import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Image } from "react-native";
import { Button } from "react-native-material-ui";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
export default ({ rating, name, image }) => {
  const avatarProps = image
    ? {
        source: {
          uri: image
        }
      }
    : {
        icon: { name: "user", type: "font-awesome" }
      };
  return (
    <View style={styles.constainer}>
      <Avatar size={50} rounded {...avatarProps} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.stars}>
        {[0, 1, 2, 3, 4, 5].map(index => {
          if (index > rating) {
            return <Icon size={20} name="star-outlined" />;
          }
          return <Icon size={20} color="#FFD700" name="star" />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    height: 50,
    width: "100%",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  name: {
    marginLeft: 5,
    fontSize: 20
  },
  stars: {
    flexDirection: "row"
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 200,
    paddingLeft: 10
  },
  img: {
    width: 135,
    height: 53
  }
});
