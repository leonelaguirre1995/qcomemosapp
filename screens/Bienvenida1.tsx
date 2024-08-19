import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Bienvenida1 = () => {
  return (
    <ImageBackground
      style={[styles.bienvenidaIcon, styles.timeLightLayout]}
      resizeMode="cover"
      source={require("../assets/bienvenida1.png")}
    >
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
        style={[styles.bienvenidaChild, styles.bienvenidaLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={[styles.bienvenidaItem, styles.bienvenidaLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={[styles.bienvenido, styles.bienvenidoClr]}>Bienvenido!</Text>
      <Text style={[styles.buscaExactamenteLo, styles.bienvenidoClr]}>
        Busca exactamente lo que deseas y encontraremos los mejores
        lugares cercanos.
      </Text>
    </ImageBackground>
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
  bienvenidaLayout: {
    height: 205,
    width: 215,
    position: "absolute",
  },
  bienvenidoClr: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
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
    height: 41,
  },
  statusBar1: {
    top: 1,
  },
  bienvenidaChild: {
    top: 44,
    left: 18,
  },
  bienvenidaItem: {
    top: 277,
    left: 136,
  },
  bienvenido: {
    marginLeft: -132,
    top: 123,
    left: "50%",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    width: 159,
    height: 67,
  },
  buscaExactamenteLo: {
    top: 332,
    right: 29,
    fontSize: FontSize.singleLineBodyBase_size,
    textAlign: "center",
    width: 175,
    height: 107,
  },
  bienvenidaIcon: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Bienvenida1;
