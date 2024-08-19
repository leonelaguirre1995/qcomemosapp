import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const PrimerVision2 = () => {
  return (
    <View style={styles.primerVision}>
      <Image
        style={styles.primerVisionChild}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={styles.qComemos1}
        contentFit="cover"
        source={require("../assets/q-comemos-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  primerVisionChild: {
    top: -1531,
    left: -1751,
    width: 3862,
    height: 3862,
    position: "absolute",
  },
  qComemos1: {
    top: 316,
    left: 96,
    width: 169,
    height: 169,
    position: "absolute",
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

export default PrimerVision2;
