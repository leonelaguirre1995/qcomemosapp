import * as React from "react";
import { StyleSheet, View } from "react-native";

const Star = () => {
  return <View style={styles.star} />;
};

const styles = StyleSheet.create({
  star: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default Star;
