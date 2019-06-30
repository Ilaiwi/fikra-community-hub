import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Image } from "react-native";
import { Button } from 'react-native-material-ui'
export default ({ onLoginClick }) => {
  const [username, changeUsername] = useState("");
  const [passowrd, changePassword] = useState("");

  return (
    <View style={styles.constainer}>
      <Image style={styles.img} source={{uri: 'https://www.jawwal.ps/web/images/jawwal-logo.png'}}/>
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={changeUsername}
      />
      <Text>Passowrd</Text>
      <TextInput
        style={styles.input}
        value={passowrd}
        onChangeText={changePassword}
      />
      <Button raised primary onPress={()=>{onLoginClick({passowrd, username})}} text="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#7bb958",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 200,
    paddingLeft: 10,
  },
  img: {
      width: 135,
      height: 53,
  }
});
