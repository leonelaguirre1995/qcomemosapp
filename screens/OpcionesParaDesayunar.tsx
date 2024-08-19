import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const OpcionesParaDesayunar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.opcionesParaDesayunar}>
      <Text style={styles.opcionesParaComenzar}>
        Opciones para comenzar con fuerza la mañana!
      </Text>
      <Text style={styles.filtros}>Filtros</Text>
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
        style={styles.wrapper}
        onPress={() => navigation.navigate("AndroidLarge1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-27.png")}
        />
      </Pressable>
      <Image
        style={styles.opcionesParaDesayunarChild}
        contentFit="cover"
        source={require("../assets/ellipse-28.png")}
      />
      <Text style={[styles.laEsquinaDue, styles.laEsquinaDueTypo]}>
        La Esquina Due 
      </Text>
      <Text style={[styles.cafeMartinez, styles.laEsquinaDueTypo]}>
        Cafe Martinez
      </Text>
      <Text style={[styles.ubicacin, styles.ubicacinTypo]}>Ubicación</Text>
      <Text style={[styles.ubicacin1, styles.ubicacinTypo]}>Ubicación</Text>
      <Text style={[styles.reseas, styles.reseasTypo]}>{`Reseñas `}</Text>
      <Text style={[styles.reseas1, styles.reseasTypo]}>{`Reseñas `}</Text>
      <Text style={[styles.text, styles.textTypo]}>3.5</Text>
      <Pressable
        style={[styles.googleMaps, styles.googleLayout]}
        onPress={() => navigation.navigate("Maps")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/googlemaps.png")}
        />
      </Pressable>
      <Image
        style={[styles.googleMapsIcon, styles.googleLayout]}
        contentFit="cover"
        source={require("../assets/googlemaps.png")}
      />
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={require("../assets/star4.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>4.2</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
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
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  laEsquinaDueTypo: {
    height: 33,
    width: 164,
    fontSize: FontSize.size_sm,
    left: 124,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  ubicacinTypo: {
    width: 108,
    fontSize: FontSize.size_xs,
    height: 18,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  reseasTypo: {
    height: 11,
    fontSize: FontSize.size_xs,
    width: 85,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  googleLayout: {
    height: 24,
    width: 24,
    left: 318,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  opcionesParaComenzar: {
    top: 62,
    left: 78,
    fontSize: 20,
    textAlign: "center",
    width: 214,
    height: 76,
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  filtros: {
    top: 225,
    left: 42,
    fontSize: FontSize.size_3xs,
    width: 82,
    height: 22,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  vector: {
    top: 88,
    width: 12,
    height: 12,
    left: 17,
    position: "absolute",
  },
  wrapper: {
    height: 85,
    width: 85,
    top: 324,
    left: 17,
    position: "absolute",
  },
  opcionesParaDesayunarChild: {
    top: 430,
    left: -6,
    width: 132,
    height: 126,
    position: "absolute",
  },
  laEsquinaDue: {
    top: 319,
  },
  cafeMartinez: {
    top: 448,
  },
  ubicacin: {
    left: 246,
    height: 18,
    top: 400,
  },
  ubicacin1: {
    left: 245,
    top: 529,
    height: 18,
  },
  reseas: {
    left: 137,
    top: 400,
  },
  reseas1: {
    left: 126,
    top: 529,
  },
  text: {
    left: 310,
    width: 28,
    height: 15,
    top: 324,
    fontSize: FontSize.size_5xs,
  },
  icon2: {
    overflow: "hidden",
  },
  googleMaps: {
    top: 393,
  },
  googleMapsIcon: {
    top: 521,
    overflow: "hidden",
  },
  starIcon: {
    top: 447,
    left: 282,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    top: 453,
    left: 306,
    width: 36,
    height: 18,
  },
  vectorIcon: {
    top: "66.13%",
    right: "41.67%",
    bottom: "31.88%",
    left: "52.22%",
    width: "6.11%",
    height: "2%",
    maxHeight: "100%",
  },
  vectorIcon1: {
    height: "1.75%",
    width: "4.17%",
    top: "27.75%",
    right: "91.67%",
    bottom: "70.5%",
    left: "4.17%",
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
    left: 0,
    right: 0,
    top: 0,
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
  },
  vectorIcon2: {
    top: "50%",
    right: "39.72%",
    bottom: "48%",
    left: "54.17%",
    width: "6.11%",
    height: "2%",
    maxHeight: "100%",
  },
  opcionesParaDesayunar: {
    backgroundColor: Color.colorBlanchedalmond,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default OpcionesParaDesayunar;
