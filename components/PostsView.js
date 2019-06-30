import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Image,
  FlatList
} from "react-native";
export default ({ onPostClick, user, posts }) => {
  const [postText, changePost] = useState("");
  return (
    <View style={styles.constainer}>
      <Image
        style={styles.img}
        source={{ uri: "https://www.jawwal.ps/web/images/jawwal-logo.png" }}
      />
      <DetailsSection user={user} />
      <View style={styles.listWrapper}>
        <FlatList
          data={posts}
          renderItem={({ item, index }) => {
            return (
              <Text style={styles.item} key={index}>{`${item.name}: ${
                item.post
              }`}</Text>
            );
          }}
        />
      </View>
      <View style={styles.postWrapper}>
        <TextInput
          style={styles.input}
          value={postText}
          multiline
          onChangeText={changePost}
        />
        <Button
          onPress={() => {
            onPostClick(postText);
            changePost("");
          }}
          title="Post"
        />
      </View>
    </View>
  );
};

function DetailsSection({ user: { name, email, username, id } }) {
  return (
    <View style={styles.detailsWrapper}>
      <Text>User:</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "#7bb958",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 35,
    paddingLeft: 20
  },
  input: {
    backgroundColor: "white",
    height: 100,
    width: 300,
    paddingLeft: 10
  },
  img: {
    width: 135,
    height: 53
  },
  item: {
    textAlign: "left"
  },
  listWrapper: {
    flex: 1,
    width: "100%"
  },
  detailsWrapper: {
    flex: 1
  },
  postWrapper: {
    flex: 1
  }
});
