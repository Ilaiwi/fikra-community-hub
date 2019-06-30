import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Image } from "react-native";
import { Button } from 'react-native-material-ui'
import { Input } from 'react-native-elements';

export default ({ onLoginClick }) => {
  const [username, changeUsername] = useState("");
  const [passowrd, changePassword] = useState("");

  return (
    <View style={styles.constainer}>
      <Image style={styles.img} source={{uri: 'https://cdn.discordapp.com/attachments/556087197871374366/594848736300236816/logo.PNG'}}/>
      {/* <Text>Username</Text> */}
      <View style={{width: 300}}>

      <Input
        style={styles.input}
        value={username}
        onChangeText={changeUsername}
        placeholder="Username"
        />
      {/* <Text>Passowrd</Text> */}
      <Input
        style={styles.input}
        value={passowrd}
        onChangeText={changePassword}
        placeholder="Password"
        />
        </View>
      <View style={{marginTop: 20,}}>
      <Button  raised primary onPress={()=>{onLoginClick({passowrd, username})}} text="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 100,
    paddingLeft: 10,
    marginTop: 5,
  },
  img: {
      width: 200,
      height: 100,
  }
});
