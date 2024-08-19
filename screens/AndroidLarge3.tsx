import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AndroidLarge3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge6}>
      <View style={styles.statusBar}>
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
            source={require("../assets/wifi-signal--light2.png")}
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
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("AndroidLarge")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.googleMaps, styles.googleMapsLayout]}
        onPress={() => navigation.navigate("Maps")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/googlemaps2.png")}
        />
      </Pressable>
      <Text style={[styles.ajustes, styles.ajustesTypo]}>Ajustes</Text>
      <Text style={[styles.gestionDeUbicacion, styles.ajustesTypo]}>
        Gestion de ubicacion
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <Text
        style={[styles.notificaciones, styles.notificacionesTypo]}
      >{`Notificaciones `}</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Text style={[styles.informacinLegal, styles.notificacionesTypo]}>
        Información legal
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector22.png")}
      />
      <Text style={[styles.ayudaAlUsuario, styles.notificacionesTypo]}>
        Ayuda al usuario
      </Text>
      <Image
        style={[styles.lockCheckOutlineIcon, styles.googleMapsLayout]}
        contentFit="cover"
        source={require("../assets/lockcheckoutline.png")}
      />
      <Text style={[styles.privacidad, styles.ajustesTypo]}>Privacidad</Text>
      <View style={[styles.androidLarge6Child, styles.androidChildLayout]} />
      <View style={[styles.androidLarge6Item, styles.androidChildLayout]} />
      <View style={[styles.androidLarge6Inner, styles.androidChildLayout]} />
      <View style={[styles.lineView, styles.androidChildLayout]} />
      <View style={[styles.androidLarge6Child1, styles.androidChildLayout]} />
      <View style={[styles.androidLarge6Child2, styles.androidChildLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  googleMapsLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  ajustesTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    left: "9.17%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  notificacionesTypo: {
    left: 89,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    position: "absolute",
  },
  androidChildLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    height: 30,
    maxWidth: "100%",
    left: 0,
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
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    right: 10,
    left: -10,
    height: 41,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vector: {
    left: 27,
    top: 81,
    width: 12,
    height: 12,
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  googleMaps: {
    left: 28,
    top: 192,
    height: 24,
  },
  ajustes: {
    top: 77,
    left: 142,
    width: 160,
    height: 33,
  },
  gestionDeUbicacion: {
    top: 196,
    left: 88,
    width: 230,
    height: 13,
  },
  vectorIcon: {
    height: "2.63%",
    top: "35%",
    bottom: "62.38%",
    right: "85.83%",
    width: "5%",
    maxHeight: "100%",
    left: "9.17%",
  },
  notificaciones: {
    top: 280,
    width: 202,
    height: 24,
  },
  vectorIcon1: {
    height: "2.5%",
    width: "5.56%",
    top: "57.63%",
    right: "85.28%",
    bottom: "39.88%",
  },
  informacinLegal: {
    top: 460,
    width: 181,
    height: 21,
  },
  vectorIcon2: {
    height: "2.25%",
    top: "70.38%",
    bottom: "27.38%",
    right: "85.83%",
    width: "5%",
    maxHeight: "100%",
    left: "9.17%",
  },
  ayudaAlUsuario: {
    top: 563,
    width: 194,
    height: 27,
  },
  lockCheckOutlineIcon: {
    top: 365,
    left: 29,
    height: 24,
    overflow: "hidden",
  },
  privacidad: {
    top: 363,
    left: 90,
    width: 180,
    height: 38,
  },
  androidLarge6Child: {
    top: 160,
  },
  androidLarge6Item: {
    top: 242,
  },
  androidLarge6Inner: {
    top: 330,
  },
  lineView: {
    top: 421,
  },
  androidLarge6Child1: {
    top: 523,
  },
  androidLarge6Child2: {
    top: 615,
  },
  androidLarge6: {
    backgroundColor: Color.colorBlanchedalmond,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge3;
