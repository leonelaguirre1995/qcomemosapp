import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Rectangle1 from "../components/Rectangle1";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const AndroidLarge = () => {
  const [magnifyIconVisible, setMagnifyIconVisible] = useState(false);
  const navigation = useNavigation();

  const openMagnifyIcon = useCallback(() => {
    setMagnifyIconVisible(true);
  }, []);

  const closeMagnifyIcon = useCallback(() => {
    setMagnifyIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.androidLarge2, styles.iconLayout2]}>
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <Image
            style={[styles.notchIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={[styles.statusIcons, styles.component1FlexBox]}>
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
        <Image
          style={[styles.buildIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/build.png")}
        />
        <Image
          style={styles.botonesCarruIcon}
          contentFit="cover"
          source={require("../assets/botones-carru.png")}
        />
        <Text style={styles.tuPrximoLugar}>¡ Tu próximo lugar favorito !</Text>
        <Image
          style={styles.qComemos2}
          contentFit="cover"
          source={require("../assets/q-comemos-2.png")}
        />
        <Image
          style={[styles.percentIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/percent.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.faceWomanProfileIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facewomanprofile.png")}
        />
        <Pressable
          style={[styles.miPerfil, styles.ajustesPosition]}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Text style={[styles.miPerfil1, styles.ajustes1Typo]}>Mi perfil</Text>
        </Pressable>
        <Text style={[styles.favoritos, styles.ajustes1Typo]}>Favoritos</Text>
        <Text style={[styles.promociones, styles.ajustes1Typo]}>
          Promociones
        </Text>
        <Pressable
          style={[styles.ajustes, styles.ajustesPosition]}
          onPress={() => navigation.navigate("AndroidLarge3")}
        >
          <Text style={[styles.ajustes1, styles.ajustes1Typo]}>Ajustes</Text>
        </Pressable>
        <Pressable
          style={styles.groupParent}
          onPress={() => navigation.navigate("AndroidLarge1")}
        >
          <Pressable
            style={styles.instanceLayout}
            onPress={() => navigation.navigate("AndroidLarge1")}
          >
            <Image
              style={[styles.groupChild, styles.instanceLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-24.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.instanceContainer, styles.instanceLayout]}
            onPress={() => navigation.navigate("AndroidLarge2")}
          >
            <Image
              style={[styles.groupChild, styles.instanceLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-25.png")}
            />
          </Pressable>
          <View style={[styles.instanceContainer, styles.instanceLayout]}>
            <Image
              style={[styles.groupChild, styles.instanceLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-26.png")}
            />
          </View>
          <View style={[styles.instanceContainer, styles.instanceLayout]}>
            <Image
              style={[styles.groupChild, styles.instanceLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-27.png")}
            />
          </View>
          <View style={[styles.instanceContainer, styles.instanceLayout]}>
            <Image
              style={[styles.groupChild, styles.instanceLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-28.png")}
            />
          </View>
        </Pressable>
        <View style={[styles.component1, styles.component1FlexBox]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector19.png")}
          />
        </View>
        <Pressable
          style={[styles.magnify, styles.iconLayout]}
          onPress={openMagnifyIcon}
        >
          <Image
            style={[styles.icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/magnify.png")}
          />
        </Pressable>
        <Image
          style={[styles.fileImagePlusIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fileimageplus.png")}
        />
        <Pressable
          style={[styles.agregarLugar, styles.ajustesPosition]}
          onPress={() => navigation.navigate("AgregarLugar")}
        >
          <Text style={[styles.agregarLugar1, styles.ajustes1Typo]}>
            Agregar lugar
          </Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={magnifyIconVisible}>
        <View style={styles.magnifyIconOverlay}>
          <Pressable style={styles.magnifyIconBg} onPress={closeMagnifyIcon} />
          <Rectangle1 onClose={closeMagnifyIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: "100%",
    overflow: "hidden",
  },
  statusBarPosition: {
    left: 0,
    top: 0,
  },
  iconLayout1: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component1FlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  iconPosition: {
    top: 750,
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  ajustesPosition: {
    top: 777,
    position: "absolute",
  },
  ajustes1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
  },
  instanceLayout: {
    height: 383,
    width: 336,
  },
  notchIcon: {
    height: 30,
    left: 0,
    top: 0,
    right: 0,
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
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  buildIcon: {
    left: 31,
    height: 25,
    width: 25,
    position: "absolute",
  },
  botonesCarruIcon: {
    top: 625,
    left: 105,
    width: 150,
    height: 15,
    position: "absolute",
  },
  tuPrximoLugar: {
    top: 182,
    left: 30,
    fontSize: 17,
    textAlign: "center",
    width: 299,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.recursiveRegular,
    position: "absolute",
  },
  qComemos2: {
    top: 61,
    left: 126,
    width: 103,
    height: 104,
    position: "absolute",
  },
  percentIcon: {
    top: 748,
    left: 92,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.38%",
    width: "5.56%",
    top: "93.88%",
    right: "27.5%",
    bottom: "3.75%",
    left: "66.94%",
    maxHeight: "100%",
  },
  faceWomanProfileIcon: {
    left: 302,
    top: 750,
    overflow: "hidden",
  },
  miPerfil1: {
    width: 84,
    height: 31,
  },
  miPerfil: {
    left: 293,
  },
  favoritos: {
    left: 227,
    width: 47,
    height: 8,
    top: 777,
    position: "absolute",
  },
  promociones: {
    left: 80,
    width: 56,
    height: 11,
    top: 777,
    position: "absolute",
  },
  ajustes1: {
    width: 49,
    height: 12,
  },
  ajustes: {
    left: 26,
  },
  groupChild: {
    left: 0,
    top: 0,
    height: 383,
    position: "absolute",
  },
  instanceContainer: {
    marginLeft: 627,
  },
  groupParent: {
    top: 226,
    left: 12,
    width: 336,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon1: {
    height: 20,
    width: 25,
  },
  component1: {
    top: 58,
    left: 24,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlanchedalmond,
    borderWidth: 1,
    width: 50,
    height: 42,
    justifyContent: "center",
    padding: Padding.p_base,
    overflow: "hidden",
    backgroundColor: Color.colorBlanchedalmond,
  },
  magnifyIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  magnifyIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  magnify: {
    left: 307,
    top: 67,
  },
  fileImagePlusIcon: {
    top: 749,
    left: 168,
    overflow: "hidden",
  },
  agregarLugar1: {
    width: 69,
    height: 28,
  },
  agregarLugar: {
    left: 150,
  },
  androidLarge2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorBlanchedalmond,
  },
});

export default AndroidLarge;
