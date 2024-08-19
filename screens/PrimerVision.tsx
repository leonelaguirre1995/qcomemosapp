import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const PrimerVision = () => {
  return <View style={styles.primerVision} />;
};

const styles = StyleSheet.create({
  primerVision: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkorange_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PrimerVision;
