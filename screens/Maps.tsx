import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Maps = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.maps}
      onPress={() => navigation.navigate("AndroidLarge2")}
    >
      <Image
        style={styles.mapMakerItuzaingBuenosA}
        contentFit="cover"
        source={require("../assets/-map-maker-ituzaing-buenos-aires-province-argentina-standard.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mapMakerItuzaingBuenosA: {
    position: "absolute",
    top: -530,
    left: -476,
    width: 1275,
    height: 1672,
  },
  maps: {
    backgroundColor: Color.colorBlanchedalmond,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Maps;
