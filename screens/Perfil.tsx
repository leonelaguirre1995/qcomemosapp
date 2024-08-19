import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfil}>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconLayout]}
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
          style={[styles.timeLight, styles.timeLightLayout]}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("AndroidLarge")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={styles.accountCircleIcon}
        contentFit="cover"
        source={require("../assets/accountcircle.png")}
      />
      <View style={styles.perfilChild} />
      <Text
        style={[styles.misDatosPersonales, styles.misFlexBox]}
      >{`Mis datos personales `}</Text>
      <Image
        style={[styles.arrowRightThickIcon, styles.arrowIconLayout]}
        contentFit="cover"
        source={require("../assets/arrowrightthick.png")}
      />
      <Image
        style={[styles.arrowRightThickIcon1, styles.misReseasPosition]}
        contentFit="cover"
        source={require("../assets/arrowrightthick.png")}
      />
      <Image
        style={[styles.arrowRightThickIcon2, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/arrowrightthick.png")}
      />
      <Image
        style={[styles.arrowRightThickIcon3, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/arrowrightthick.png")}
      />
      <Image
        style={[styles.perfilItem, styles.perfilLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.perfilInner, styles.perfilLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.lineIcon, styles.perfilLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.perfilChild1, styles.perfilLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.misReseas, styles.misReseasPosition]}>
        Mis reseñas
      </Text>
      <Text style={[styles.misLugares, styles.misFlexBox]}>Mis lugares</Text>
      <Text style={[styles.preferenciaDeComidas, styles.misFlexBox]}>
        Preferencia de comidas
      </Text>
      <Text style={[styles.cerrarSesin, styles.misFlexBox]}>Cerrar sesión</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector18.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: 0,
    right: 0,
    top: 0,
  },
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  timeLightLayout: {
    height: 21,
    position: "absolute",
  },
  misFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  arrowIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  misReseasPosition: {
    top: 424,
    position: "absolute",
  },
  arrowIconPosition: {
    left: 295,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  perfilLayout: {
    height: 1,
    width: 295,
    left: 29,
    position: "absolute",
  },
  notchIcon: {
    height: 30,
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
    overflow: "hidden",
  },
  statusBar: {
    height: 41,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 22,
    top: 79,
    width: 12,
    height: 12,
    position: "absolute",
  },
  accountCircleIcon: {
    top: 89,
    left: 109,
    width: 142,
    height: 143,
    position: "absolute",
    overflow: "hidden",
  },
  perfilChild: {
    top: 448,
    left: 35,
    borderRadius: Border.br_5xs,
    width: 289,
    height: 37,
    position: "absolute",
  },
  misDatosPersonales: {
    top: 323,
    width: 248,
    height: 27,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    left: 33,
    color: Color.colorBlack,
    position: "absolute",
  },
  arrowRightThickIcon: {
    top: 322,
    left: 298,
    position: "absolute",
  },
  arrowRightThickIcon1: {
    left: 297,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  arrowRightThickIcon2: {
    top: 532,
  },
  arrowRightThickIcon3: {
    top: 623,
  },
  perfilItem: {
    top: 349,
  },
  perfilInner: {
    top: 563,
  },
  lineIcon: {
    top: 659,
  },
  perfilChild1: {
    top: 456,
  },
  misReseas: {
    width: 192,
    height: 39,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    left: 33,
  },
  misLugares: {
    width: 196,
    height: 34,
    top: 532,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    left: 33,
    color: Color.colorBlack,
    position: "absolute",
  },
  preferenciaDeComidas: {
    top: 629,
    width: 231,
    height: 36,
    fontFamily: FontFamily.recursiveRegular,
    fontSize: FontSize.singleLineBodyBase_size,
    left: 33,
    color: Color.colorBlack,
    position: "absolute",
  },
  cerrarSesin: {
    top: 758,
    left: 227,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.singleLineBodyBase,
    width: 127,
    height: 21,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.25%",
    width: "5%",
    top: "94.75%",
    right: "5%",
    bottom: "3%",
    left: "90%",
    maxHeight: "100%",
  },
  perfil: {
    backgroundColor: Color.colorBlanchedalmond,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Perfil;
