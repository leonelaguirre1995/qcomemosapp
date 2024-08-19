import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AndroidLarge1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge3}>
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
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Text
        style={[styles.laEsquinaDue, styles.reseasTypo]}
      >{`La Esquina Due `}</Text>
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
      <Text style={styles.calificacin}>{`Calificación `}</Text>
      <Pressable
        style={styles.googleMaps}
        onPress={() => navigation.navigate("Maps")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/googlemaps.png")}
        />
      </Pressable>
      <Image
        style={[styles.starIcon, styles.starIconPosition]}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <Image
        style={[styles.starIcon1, styles.starIconPosition]}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <Image
        style={styles.starIcon2}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.starIcon3, styles.starIconPosition]}
        contentFit="cover"
        source={require("../assets/star1.png")}
      />
      <View style={styles.androidLarge3Child} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-38.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
      </View>
      <Text style={[styles.muyRicasPizzas, styles.muyTypo]}>
        “Muy ricas pizzas y buena atención”
      </Text>
      <Text style={[styles.muyBuenLugar, styles.muyTypo]}>
        “Muy buen lugar para desayunar y almorzar”
      </Text>
      <Text
        style={[styles.estabaRicoPero, styles.muyTypo]}
      >{`“Estaba rico, pero me llego parte de la comida fría” `}</Text>
      <Text style={[styles.reseas, styles.reseasTypo]}>Reseñas</Text>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={styles.starIcon4}
        contentFit="cover"
        source={require("../assets/star2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  reseasTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  starIconPosition: {
    top: 485,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    width: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "11.39%",
    right: "81.67%",
    width: "6.94%",
    height: "3.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    borderRadius: Border.br_11xs,
    height: 231,
    width: 360,
    top: 0,
    position: "absolute",
  },
  muyTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
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
  laEsquinaDue: {
    left: 48,
    width: 246,
    height: 35,
    fontSize: FontSize.singleLineBodyBase_size,
    top: 86,
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
  },
  vector: {
    left: 27,
    top: 91,
    width: 12,
    height: 12,
    position: "absolute",
  },
  calificacin: {
    top: 487,
    left: 20,
    width: 116,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    height: 21,
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  googleMaps: {
    left: 278,
    height: 24,
    width: 24,
    top: 86,
    position: "absolute",
  },
  starIcon: {
    left: 270,
  },
  starIcon1: {
    left: 240,
  },
  starIcon2: {
    height: "3%",
    width: "6.67%",
    top: "60.63%",
    right: "35%",
    bottom: "36.38%",
    left: "58.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.38%",
    top: "60.88%",
    right: "11.11%",
    bottom: "36.75%",
    left: "83.33%",
  },
  starIcon3: {
    left: 324,
  },
  androidLarge3Child: {
    top: 547,
    left: 12,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_200,
    width: 336,
    height: 232,
    position: "absolute",
  },
  vectorIcon1: {
    top: "75.25%",
    bottom: "21.63%",
  },
  vectorIcon2: {
    top: "82.5%",
    bottom: "14.38%",
  },
  vectorIcon3: {
    top: "89.13%",
    bottom: "7.75%",
  },
  vectorIcon4: {
    height: "1.5%",
    top: "94.38%",
    right: "47.22%",
    bottom: "4.13%",
    left: "47.22%",
  },
  frameChild: {
    left: 0,
  },
  frameItem: {
    left: 720,
  },
  frameInner: {
    left: 360,
  },
  rectangleParent: {
    top: 186,
    height: 231,
    width: 360,
    left: 0,
    position: "absolute",
  },
  muyRicasPizzas: {
    top: 604,
    width: 229,
    left: 93,
    fontSize: FontSize.size_3xs,
    height: 41,
  },
  muyBuenLugar: {
    top: 660,
    left: 95,
    width: 214,
    height: 32,
  },
  estabaRicoPero: {
    top: 713,
    width: 213,
    height: 29,
    left: 93,
    fontSize: FontSize.size_3xs,
  },
  reseas: {
    top: 561,
    left: 125,
    fontSize: FontSize.size_xs,
    width: 95,
    height: 14,
  },
  vectorIcon5: {
    height: "2.5%",
    top: "70.25%",
    right: "9.17%",
    bottom: "27.25%",
    left: "85.28%",
  },
  starIcon4: {
    top: 85,
    left: 321,
    height: 25,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge3: {
    backgroundColor: Color.colorBlanchedalmond,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge1;
