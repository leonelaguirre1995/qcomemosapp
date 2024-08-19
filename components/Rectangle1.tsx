import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Rectangle1 = ({ onClose }) => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={[styles.componentChild, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-39.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.buscarPosition]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.buscar, styles.buscarPosition]}>{`Buscar `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_5xs,
  },
  buscarPosition: {
    top: "21.89%",
    position: "absolute",
  },
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "42.7%",
    width: "7.44%",
    right: "67.54%",
    bottom: "35.41%",
    left: "25.03%",
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_5xs,
  },
  buscar: {
    height: "56.22%",
    width: "84.77%",
    left: "39.38%",
    fontSize: FontSize.singleLineBodyBase_size,
    fontFamily: FontFamily.recursiveRegular,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  vectorParent: {
    width: 195,
    height: 37,
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_5xs,
  },
});

export default Rectangle1;
