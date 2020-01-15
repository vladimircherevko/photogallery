import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export const ImageItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} activeOpacity={0.7}>
    <View style={styles.wrap}>
      <ImageBackground source={{ uri: item["url-small"] }} style={styles.img}>
        <View style={styles.textWrap}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        {item.text && (
          <View style={styles.textWrap}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 15,
    overflow: "hidden"
  },
  img: {
    justifyContent: "space-between",
    width: "100%",
    height: 200
  },
  textWrap: {
    backgroundColor: "rgba(0,0,0,.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%"
  },
  text: {
    color: "#fff",
    fontSize: 20
  }
});
