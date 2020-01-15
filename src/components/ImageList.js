import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ImageItem } from "./ImageItem";

export const ImageList = ({ data, open }) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      keyExtractor={img => img.id}
      renderItem={({ item }) => <ImageItem item={item} onPress={open} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
