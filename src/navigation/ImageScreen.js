import React from "react";
import { View, StyleSheet, Image } from "react-native";

export function ImageScreen({ navigation }) {
  const image = navigation.getParam("image");

  return (
    <View>
      <Image source={{ uri: image["url-big"] }} style={styles.img} />
    </View>
  );
}

ImageScreen.navigationOptions = ({ navigation }) => {
  const name = navigation.getParam("image").name || "Author unknown";

  return {
    headerTitle: name
  };
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%"
  }
});
