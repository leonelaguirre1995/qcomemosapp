import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const Bienvenida2 = () => {
  return (
    <ImageBackground
      style={[styles.bienvenidaIcon, styles.timeLightLayout]}
      resizeMode="cover"
      source={require("../assets/bienvenida.png")}
    >
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.statusBarPosition]}
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
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.statusBarPosition]}
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
        source={require("../assets/ellipse-17.png")}
      />
      <Image
        style={[styles.bienvenidaItem, styles.bienvenidaLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={[styles.bienvenidaInner, styles.bienvenidaLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Text style={styles.bienvenido}>Bienvenido!</Text>
      <Text style={[styles.buscaExactamenteLo, styles.buscaExactamenteLoTypo]}>
        Busca exactamente lo que deseas y encontraremos los mejores lugares para
        vos.
      </Text>
      <Text style={[styles.notificacionesQueTe, styles.buscaExactamenteLoTypo]}>
        Notificaciones que te envían lo que necesitas saber tan
        pronto como llegues.
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  timeLightLayout: {
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  statusBarPosition: {
    left: 0,
    right: 0,
    top: 0,
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
  buscaExactamenteLoTypo: {
    textAlign: "center",
    fontSize: FontSize.singleLineBodyBase_size,
    color: Color.colorGray_300,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
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
    height: 41,
  },
  bienvenidaChild: {
    top: 44,
    left: 18,
    width: 225,
    height: 203,
    position: "absolute",
  },
  bienvenidaItem: {
    top: 277,
    left: 136,
  },
  bienvenidaInner: {
    top: 549,
    left: 34,
  },
  bienvenido: {
    marginLeft: -119,
    top: 122,
    left: "50%",
    fontSize: 22,
    textAlign: "left",
    width: 159,
    height: 71,
    color: Color.colorGray_300,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  buscaExactamenteLo: {
    top: 332,
    right: 29,
    width: 175,
    height: 107,
  },
  notificacionesQueTe: {
    top: 610,
    left: 43,
    width: 194,
    height: 113,
  },
  bienvenidaIcon: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default Bienvenida2;
