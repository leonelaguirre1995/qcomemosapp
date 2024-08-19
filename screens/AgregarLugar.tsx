import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AgregarLugar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.agregarLugar}>
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
      <View style={[styles.agregarLugarChild, styles.agregarPosition]} />
      <Text style={[styles.agregarUnSitio, styles.misLugaresTypo]}>
        Agregar un sitio
      </Text>
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
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <View style={[styles.agregarLugarItem, styles.agregarPosition]} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
      <View style={[styles.agregarLugarInner, styles.agregarChildLayout]} />
      <View style={[styles.lineView, styles.agregarChildLayout]} />
      <View style={[styles.agregarLugarChild1, styles.agregarChildLayout]} />
      <View style={[styles.agregarLugarChild2, styles.agregarChildLayout]} />
      <View style={styles.rectangleView} />
      <Text style={[styles.misLugares, styles.misLugaresTypo]}>
        Mis lugares
      </Text>
      <Text
        style={[styles.nombreDelSitio, styles.mesanjesTypo]}
      >{`Nombre del sitio `}</Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <Pressable
        style={styles.googleMaps}
        onPress={() => navigation.navigate("Maps")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/googlemaps2.png")}
        />
      </Pressable>
      <Text
        style={[styles.direccionDelSitio, styles.delTypo]}
      >{`Direccion del sitio `}</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector15.png")}
      />
      <Text style={[styles.informacionDelSitio, styles.delTypo]}>
        Informacion del sitio
      </Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Text style={[styles.mesanjes, styles.mesanjesTypo]}>{`Mesanjes `}</Text>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
      <Text style={[styles.fotosDelSitio, styles.delTypo]}>
        Fotos del sitio
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  agregarPosition: {
    width: 295,
    left: 33,
    position: "absolute",
  },
  misLugaresTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "15.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  agregarChildLayout: {
    height: 1,
    width: 296,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  mesanjesTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  delTypo: {
    left: 101,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorIconLayout: {
    height: "2.5%",
    width: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
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
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    height: 41,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  agregarLugarChild: {
    top: 138,
    backgroundColor: "rgba(249, 122, 3, 0.2)",
    height: 50,
  },
  agregarUnSitio: {
    top: 156,
    left: 70,
    width: 207,
    height: 42,
  },
  vector: {
    left: 26,
    top: 73,
    width: 12,
    height: 12,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.46%",
    width: "4.94%",
    top: "19.13%",
    right: "14.22%",
    bottom: "78.41%",
    left: "80.83%",
  },
  agregarLugarItem: {
    top: 188,
    backgroundColor: "rgba(179, 179, 179, 0.3)",
    height: 458,
  },
  vectorIcon1: {
    height: "2.38%",
    top: "28.63%",
    right: "78.61%",
    bottom: "69%",
    width: "5.56%",
    left: "15.83%",
  },
  agregarLugarInner: {
    top: 285,
    left: 34,
    width: 296,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
  },
  lineView: {
    top: 380,
    left: 34,
    width: 296,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
  },
  agregarLugarChild1: {
    top: 465,
    left: 32,
  },
  agregarLugarChild2: {
    top: 556,
    left: 34,
    width: 296,
    borderTopWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
  },
  rectangleView: {
    top: 679,
    left: 84,
    borderRadius: Border.br_5xs,
    backgroundColor: "rgba(249, 122, 3, 0.4)",
    height: 26,
    width: 192,
    position: "absolute",
  },
  misLugares: {
    top: 685,
    left: 120,
    width: 120,
    height: 40,
  },
  nombreDelSitio: {
    top: 233,
    left: 103,
    width: 160,
    height: 29,
  },
  vectorIcon2: {
    height: "1.5%",
    width: "2.78%",
    top: "19.63%",
    right: "81.39%",
    bottom: "78.88%",
  },
  icon1: {
    overflow: "hidden",
  },
  googleMaps: {
    left: 58,
    top: 322,
    width: 24,
    height: 24,
    position: "absolute",
  },
  direccionDelSitio: {
    top: 326,
    width: 176,
    height: 36,
  },
  vectorIcon3: {
    height: "2.75%",
    width: "6.11%",
    top: "74.63%",
    right: "76.39%",
    bottom: "22.63%",
    left: "17.5%",
  },
  informacionDelSitio: {
    top: 417,
    width: 192,
    height: 30,
  },
  vectorIcon4: {
    top: "51.25%",
    right: "78.33%",
    bottom: "46.25%",
    left: "16.11%",
  },
  mesanjes: {
    top: 597,
    left: 107,
    width: 170,
    height: 30,
  },
  vectorIcon5: {
    top: "62.38%",
    right: "77.78%",
    bottom: "35.13%",
    left: "16.67%",
  },
  fotosDelSitio: {
    top: 502,
    width: 169,
    height: 17,
  },
  agregarLugar: {
    backgroundColor: Color.colorBlanchedalmond,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AgregarLugar;
