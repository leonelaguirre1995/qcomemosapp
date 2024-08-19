import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border } from "../GlobalStyles";

const Rectangle = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.rectangleParent}
      onPress={() => navigation.navigate("Login")}
    >
      <Image
        style={styles.componentChild}
        contentFit="cover"
        source={require("../assets/rectangle-43.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  componentChild: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleParent: {
    width: 296,
    height: 361,
  },
});

export default Rectangle;
