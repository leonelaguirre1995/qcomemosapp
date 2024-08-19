import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Google = () => {
  return (
    <View style={styles.google}>
      <View style={[styles.property1default, styles.property1defaultLayout]}>
        <Text style={[styles.google1, styles.googleTypo]}>Google</Text>
      </View>
      <View style={[styles.property1variant2, styles.property1defaultLayout]}>
        <Text style={[styles.google2, styles.googleTypo]}>Google</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    height: 20,
    width: 52,
    left: 20,
    position: "absolute",
  },
  googleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  google1: {
    color: Color.backgroundDefaultDefault,
  },
  property1default: {
    top: 20,
  },
  google2: {
    color: Color.colorBlack,
  },
  property1variant2: {
    top: 60,
  },
  google: {
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 92,
    height: 100,
    overflow: "hidden",
  },
});

export default Google;
