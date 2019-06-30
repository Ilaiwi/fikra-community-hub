import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  FlatList
} from "react-native";
import { Avatar, Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Attendance from "./Attendance";
import moment from 'moment'
export default ({ events, user, onAttend, onViewEvent }) => {
  return (
    <View style={styles.constainer}>
      <View style={styles.attendance}>
        <Attendance image={user.image} name={user.name} rating={user.rating} />
      </View>
      <FlatList
        data={events}
        renderItem={({ item }) => {
          const hasAttended =  item.attendance.find(i => i.name === user.name)
          return <EventCard event={item} hasAttended={hasAttended} onAttend={onAttend} onViewEvent={onViewEvent} />
        }}
      />
    </View>
  );
};

function EventCard({ event, hasAttended, onAttend, onViewEvent  }) {
  const { image, title, description, date, hours } = event
  const hasPassed = date.subtract().isBefore(moment())
  return (
    <Card
      title={title}
      image={{ uri: image }}
      style={{ width: "100%" }}
      containerStyle={{ margin: 0 }}
      imageStyle={{opacity: hasPassed? 0.6:1}}
      onPress={() => {onViewEvent(event)}}
    >
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 3}}>
        <Text style={{ marginBottom: 10 }}>{description}</Text>
      </View>
      <View style={{flex: 1, width: '100%'}}>
        <Text style={{textAlign: 'center', fontWeight: 500}}>
          {date.format(`d MMMM`)}
        </Text>
        <Text style={{textAlign: 'center', fontWeight: 500}}>
          {`${hours} h`}
        </Text>
      </View>
    </View>
      <Button
        backgroundColor="#03A9F4"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        disabled={hasPassed || hasAttended}
        title={hasPassed? 'Passed' : hasAttended? 'Attending!' : "Volunteer"}
        onPress={() => onAttend(event)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    width: "100%"
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
  },
  attendance: {
    marginTop: 5,
    paddingBottom: 10,
    borderBottomColor: `gray`,
    borderBottomWidth: 2,
  }
});
