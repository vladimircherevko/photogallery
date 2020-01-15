import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { ImageList } from "../components/ImageList";
import { getImageInfo } from "../store/actions";
import { THEME } from "../theme";

export function MainScreen({ navigation }) {
  const openImage = image => {
    navigation.navigate("Image", { image });
  };
  const dispatch = useDispatch();

  const { images, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(getImageInfo());
  }, []);

  useEffect(() => {
    navigation.setParams({ error: !!error });
  }, [error]);

  if (error) {
    return (
      <View style={styles.wrap}>
        <Text style={styles.text}>{error}</Text>
      </View>
    );
  }

  if (loading)
    return (
      <View style={styles.wrap}>
        <ActivityIndicator color={THEME.MAIN_COLOR} size="large" />
      </View>
    );

  return <ImageList data={images} open={openImage} />;
}
MainScreen.navigationOptions = ({ navigation }) => {
  const error = navigation.getParam("error");
  if (error)
    return {
      headerTitle: "Error",
      headerStyle: {
        backgroundColor: THEME.DANGER_COLOR
      },
      headerTintColor: THEME.DANGER_TEXT_COLOR
    };
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
