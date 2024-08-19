import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const QComemos = () => {
  return (
    <ImageBackground
      style={styles.qComemos1}
      resizeMode="cover"
      source={require("../assets/qcomemos1.png")}
    />
  );
};

const styles = StyleSheet.create({
  qComemos1: {
    width: 9,
    height: 8,
    opacity: 0,
  },
});

export default QComemos;
