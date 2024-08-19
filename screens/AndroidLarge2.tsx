import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AndroidLarge2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.androidLarge5}>
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
        style={styles.vector}
        onPress={() => navigation.navigate("AndroidLarge")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <View style={styles.androidLarge5Child} />
      <Text style={styles.calificacin}>{`Calificación `}</Text>
      <Image
        style={[styles.starIcon, styles.starIconLayout]}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <Image
        style={[styles.starIcon1, styles.starIconLayout]}
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
        style={[styles.starIcon3, styles.starIconLayout]}
        contentFit="cover"
        source={require("../assets/star3.png")}
      />
      <Text style={[styles.elJardin, styles.elJardinLayout]}>El Jardin</Text>
      <Pressable
        style={[styles.googleMaps, styles.starIconLayout]}
        onPress={() => navigation.navigate("Maps")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/googlemaps1.png")}
        />
      </Pressable>
      <Text style={[styles.excelenteLugarBuena, styles.lugarTypo]}>
        "Excelente lugar, buena ambientación, rica comida y cerveza fría"
      </Text>
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
      <Text style={[styles.buenLugarBuena, styles.lugarTypo]}>
        "Buen lugar, buena comida, en la semana tiene menús del día que son
        ricos"
      </Text>
      <Text style={[styles.pedimosTequeosY, styles.starIcon4Layout]}>
        "Pedimos tequeños y unas papas para picar, llegaron calentitos y super
        ricos"
      </Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-33.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-34.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.reseas, styles.reseasTypo]}>{`Reseñas `}</Text>
      <Image
        style={[styles.starIcon4, styles.starIcon4Layout]}
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
  starIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  vectorIconLayout1: {
    width: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  elJardinLayout: {
    height: 35,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  lugarTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
  },
  vectorIconLayout: {
    left: "8.06%",
    right: "85%",
    width: "6.94%",
    height: "3.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  starIcon4Layout: {
    height: 25,
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_11xs,
    height: 231,
    width: 360,
    top: 0,
    position: "absolute",
  },
  reseasTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
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
  vector: {
    left: 32,
    width: 12,
    height: 12,
    top: 89,
    position: "absolute",
  },
  androidLarge5Child: {
    top: 542,
    left: 11,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_200,
    width: 336,
    height: 238,
    position: "absolute",
  },
  calificacin: {
    top: 485,
    left: 17,
    textAlign: "left",
    width: 116,
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    height: 21,
    position: "absolute",
  },
  starIcon: {
    left: 264,
    top: 482,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  starIcon1: {
    left: 234,
    top: 482,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  starIcon2: {
    height: "3%",
    width: "6.67%",
    top: "60.25%",
    right: "37.22%",
    bottom: "36.75%",
    left: "56.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.38%",
    top: "60.5%",
    right: "12.78%",
    bottom: "37.13%",
    left: "81.67%",
  },
  starIcon3: {
    left: 318,
    top: 482,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  elJardin: {
    left: 48,
    width: 246,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    height: 35,
    top: 89,
  },
  icon2: {
    overflow: "hidden",
  },
  googleMaps: {
    left: 271,
    top: 86,
  },
  excelenteLugarBuena: {
    top: 599,
    left: 66,
    width: 251,
    height: 28,
    position: "absolute",
  },
  vectorIcon1: {
    top: "74.88%",
    bottom: "22%",
  },
  vectorIcon2: {
    top: "88.25%",
    bottom: "8.63%",
  },
  vectorIcon3: {
    top: "81.38%",
    bottom: "15.5%",
  },
  buenLugarBuena: {
    top: 651,
    left: 75,
    width: 245,
    height: 35,
    position: "absolute",
  },
  pedimosTequeosY: {
    top: 708,
    left: 70,
    width: 262,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
  },
  vectorIcon4: {
    height: "1.5%",
    top: "94.13%",
    right: "47.5%",
    bottom: "4.38%",
    left: "46.94%",
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
    top: 179,
    height: 231,
    width: 360,
    left: 0,
    position: "absolute",
  },
  vectorIcon5: {
    height: "2.5%",
    top: "69%",
    right: "11.11%",
    bottom: "28.5%",
    left: "83.33%",
  },
  reseas: {
    top: 552,
    left: 133,
    fontSize: FontSize.size_xs,
    width: 77,
    height: 8,
    position: "absolute",
  },
  starIcon4: {
    top: 83,
    left: 314,
    width: 25,
    overflow: "hidden",
  },
  androidLarge5: {
    backgroundColor: Color.colorBlanchedalmond,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge2;
