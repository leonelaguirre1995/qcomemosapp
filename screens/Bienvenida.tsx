import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Bienvenida = () => {
  return (
    <View style={[styles.bienvenida, styles.timeLightLayout]}>
      <View style={[styles.statusBar, styles.statusPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.statusIcons}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={[styles.timeLight, styles.timeLightLayout]}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.statusBar1, styles.statusPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.statusIcons}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light1.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light1.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery--light1.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={[styles.timeLight, styles.timeLightLayout]}
          contentFit="cover"
          source={require("../assets/time--light1.png")}
        />
      </View>
      <Image
        style={styles.bienvenidaChild}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={styles.bienvenido}>
        <Text style={styles.bienvenido1}>Bienvenido</Text>
        <Text style={styles.text}>!</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLightLayout: {
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  statusPosition: {
    height: 41,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  statusBar: {
    top: 0,
  },
  image1Icon: {
    left: -60,
    width: 420,
    height: 809,
    top: 0,
    position: "absolute",
  },
  statusBar1: {
    top: 6,
  },
  bienvenidaChild: {
    top: 44,
    left: 18,
    width: 215,
    height: 205,
    position: "absolute",
  },
  bienvenido1: {
    fontFamily: FontFamily.recursiveRegular,
  },
  text: {
    fontFamily: FontFamily.frauncesRegular,
  },
  bienvenido: {
    marginLeft: -126,
    top: 122,
    left: "50%",
    fontSize: FontSize.size_5xl,
    color: Color.colorGray_300,
    textAlign: "left",
    width: 162,
    height: 71,
    position: "absolute",
  },
  bienvenida: {
    backgroundColor: Color.colorBlanchedalmond,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Bienvenida;
