import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const PrimerVision1 = () => {
  return (
    <View style={styles.primerVision}>
      <Image
        style={[styles.primerVisionChild, styles.qComemos1Position]}
        contentFit="cover"
        source={require("../assets/group-21.png")}
      />
      <Image
        style={[styles.qComemos1, styles.qComemos1Position]}
        contentFit="cover"
        source={require("../assets/q-comemos-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  qComemos1Position: {
    left: 96,
    top: 316,
    position: "absolute",
  },
  primerVisionChild: {
    width: 168,
    height: 168,
  },
  qComemos1: {
    width: 169,
    height: 169,
  },
  primerVision: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkorange_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PrimerVision1;
