import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  return (
    <ImageBackground
      style={[styles.loginIcon, styles.loginIconLayout]}
      resizeMode="cover"
      source={require("../assets/login.png")}
    >
      <Image
        style={styles.qComemos1}
        contentFit="cover"
        source={require("../assets/q-comemos-11.png")}
      />
      <Image
        style={styles.pexelsWillpicturethis2641886Icon}
        contentFit="cover"
        source={require("../assets/pexelswillpicturethis2641886-1.png")}
      />
      <View style={styles.loginChild} />
      <Text style={[styles.qComemos, styles.qComemosTypo]}>Q’ Comemos</Text>
      <View style={[styles.loginItem, styles.loginLayout]} />
      <View style={[styles.loginInner, styles.loginLayout]} />
      <Text style={[styles.createAccount, styles.timeLightLayout]}>
        Create Account
      </Text>
      <Text style={[styles.ingresaTuEmail, styles.qComemosTypo]}>
        Ingresa tu email
      </Text>
      <Text style={[styles.youDontHaveContainer, styles.orLoginWithTypo]}>
        <Text style={styles.youDontHave}>{`You Don’t have an account ? `}</Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.loginChild1, styles.loginChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.loginChild2, styles.loginChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Text style={[styles.orLoginWith, styles.orLoginWithTypo]}>
        Or Login with
      </Text>
      <View style={styles.statusBar}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
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
        style={styles.qComemos3}
        contentFit="cover"
        source={require("../assets/q-comemos-3.png")}
      />
      <View style={[styles.statusBar1, styles.notchIconPosition]}>
        <Image
          style={[styles.notchIcon, styles.notchIconPosition]}
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
      <View style={styles.google}>
        <Text style={styles.google1}>Google</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginIconLayout: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  qComemosTypo: {
    fontFamily: FontFamily.recursiveRegular,
    textAlign: "left",
  },
  loginLayout: {
    width: 275,
    borderRadius: Border.br_3xs,
    left: 47,
    position: "absolute",
  },
  timeLightLayout: {
    height: 21,
    position: "absolute",
  },
  orLoginWithTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    height: "1.13%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "37.22%",
    right: "58.06%",
    width: "4.72%",
    height: "1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginChildLayout: {
    width: 107,
    top: 643,
    maxHeight: "100%",
    position: "absolute",
  },
  notchIconPosition: {
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  qComemos1: {
    top: 298,
    left: 275,
    width: 9,
    height: 9,
    position: "absolute",
  },
  pexelsWillpicturethis2641886Icon: {
    top: -54,
    width: 360,
    height: 860,
    left: 0,
    position: "absolute",
  },
  loginChild: {
    top: 173,
    left: 38,
    borderRadius: 15,
    backgroundColor: "#131313",
    width: 284,
    height: 52,
    opacity: 0.8,
    position: "absolute",
  },
  qComemos: {
    top: 180,
    left: 84,
    fontSize: 32,
    color: "#fefefe",
    width: 237,
    height: 39,
    textAlign: "left",
    position: "absolute",
  },
  loginItem: {
    top: 457,
    backgroundColor: Color.backgroundDefaultDefault,
    height: 40,
  },
  loginInner: {
    top: 520,
    backgroundColor: Color.colorDarkorange_100,
    height: 39,
  },
  createAccount: {
    top: 529,
    left: 121,
    fontSize: 15,
    width: 163,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
    fontFamily: FontFamily.recursiveRegular,
  },
  ingresaTuEmail: {
    top: 468,
    left: 60,
    fontSize: 13,
    color: "rgba(84, 81, 81, 0.58)",
    textAlign: "left",
    position: "absolute",
  },
  youDontHave: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
  },
  signUp: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  youDontHaveContainer: {
    top: 745,
    left: 68,
    color: "rgba(255, 255, 255, 0.6)",
    width: 225,
    height: 17,
  },
  vectorIcon: {
    width: "2.78%",
    top: "86.63%",
    right: "57.22%",
    bottom: "12.25%",
    left: "40%",
  },
  vectorIcon1: {
    top: "87.13%",
    bottom: "11.88%",
  },
  vectorIcon2: {
    width: "1.11%",
    top: "86.25%",
    right: "61.94%",
    bottom: "12.63%",
    left: "36.94%",
  },
  vectorIcon3: {
    top: "85.63%",
    bottom: "13.38%",
  },
  loginChild1: {
    left: 22,
  },
  loginChild2: {
    left: 218,
  },
  orLoginWith: {
    top: 634,
    left: 137,
    fontFamily: FontFamily.outfitRegular,
    width: 73,
    height: 14,
    color: Color.backgroundDefaultDefault,
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
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
    width: 54,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  statusBar: {
    top: -118,
    right: -149,
    left: 149,
    height: 41,
    position: "absolute",
    overflow: "hidden",
  },
  qComemos3: {
    top: 46,
    left: 122,
    width: 103,
    height: 104,
    position: "absolute",
  },
  statusBar1: {
    height: 41,
  },
  google1: {
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.backgroundDefaultDefault,
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  google: {
    top: 686,
    left: 166,
    width: 52,
    height: 20,
    position: "absolute",
  },
  loginIcon: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
