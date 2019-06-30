import React, { useState } from "react";
import { FlatList,StyleSheet, TextInput, Text, View, Image } from "react-native";
import { Button } from "react-native-material-ui"
import Attendance from "./Attendance";
export default ({ attendances ,event,onJoin}) => {
  const [username, changeUsername] = useState("");
  const [passowrd, changePassword] = useState("");
  const img1="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
  const seed=[{name:"sudqi",rating:4,image:img1},{name:"sudqi",rating:3,image:img1},{name:"sudqi",rating:1,image:img1},{name:"sudqi",rating:2,image:img1}]
  return (
    <View style={styles.constainer}>
      {/* <Image style={styles.img} source={{uri: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/c8/8d6df01eb311e6b5f5f786b289d8ba/pythondatascience_specialization_final.png?auto=format%2Ccompress&dpr=1&w=400'}}/> */}
      <Image style={styles.img} source={{uri: event.image}}/>
      <View style={styles.description}>
        <Text style={styles.title} >{event.title}</Text>
        <Text>Description: {event.description}</Text>
      </View>
      <View style={{margin:10,borderColor:"#e5e5e5"}}>
      <Text >People Who Are Comming Too: </Text>
</View>
      <FlatList data={event.attendance} renderItem={({ item, index }) =>
        <View style={styles.attend}>
          <Attendance style={{ margin: 20 }} rating={item.rating} name={item.name} image={item.image} key={index} />
        </View>
      } />

      <Button sytle={styles.button} raised primary onPress={()=>onJoin(event)} text="Join" />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#fafcfc",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 200,
    paddingLeft: 10,
  },
  img: {
      width: '100%',
      height: '35%',
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
  },
  attend:{
    padding:10
  },
  description:{
    padding:5,
    borderBottomWidth:1,
    borderBottomColor:"#e5e5e5"
    
  },
});
