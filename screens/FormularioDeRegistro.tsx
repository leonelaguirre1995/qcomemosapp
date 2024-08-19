import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  FontFamily,
  FontSize,
  StyleVariable,
  Color,
} from "../GlobalStyles";

const FormularioDeRegistro = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.formularioDeRegistro, styles.timeLightLayout]}
      onPress={() => navigation.navigate("AndroidLarge")}
    >
      <Pressable
        style={[styles.formRegister, styles.button2Border]}
        onPress={() => navigation.navigate("AndroidLarge")}
      >
        <View style={styles.inputField}>
          <Text style={styles.label}>Email</Text>
          <Text style={[styles.description, styles.errorTypo]}>
            Description
          </Text>
          <View style={[styles.input, styles.inputFlexBox]}>
            <Text style={[styles.value, styles.buttonTypo]}>Value</Text>
          </View>
          <Text style={[styles.error, styles.errorTypo]}>Error</Text>
        </View>
        <View style={styles.inputField1SpaceBlock}>
          <Text style={styles.label}>Password</Text>
          <Text style={[styles.description, styles.errorTypo]}>
            Description
          </Text>
          <View style={[styles.input, styles.inputFlexBox]}>
            <Text style={[styles.value, styles.buttonTypo]}>Value</Text>
          </View>
          <Text style={[styles.error, styles.errorTypo]}>Error</Text>
        </View>
        <View style={styles.inputField1SpaceBlock}>
          <View style={[styles.checkboxAndLabel, styles.inputFlexBox]}>
            <Image
              style={[styles.checkboxIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/checkbox.png")}
            />
            <Text style={[styles.label2, styles.label2Typo]}>Label</Text>
          </View>
          <View style={[styles.checkboxAndLabel, styles.inputFlexBox]}>
            <View style={styles.iconLayout} />
            <Text style={[styles.description2, styles.label2Typo]}>
              Description
            </Text>
          </View>
        </View>
        <View style={[styles.buttonGroup, styles.inputField1SpaceBlock]}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Image
              style={[styles.starIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/star5.png")}
            />
            <Text style={[styles.button1, styles.buttonTypo]}>Button</Text>
            <Image
              style={[styles.xIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/x.png")}
            />
          </View>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={[styles.starIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/star6.png")}
            />
            <Text style={[styles.button3, styles.buttonTypo]}>Register</Text>
            <Image
              style={[styles.xIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/x1.png")}
            />
          </View>
        </View>
      </Pressable>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.statusBarPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.inputFlexBox]}>
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
      <Image
        style={styles.qComemos3}
        contentFit="cover"
        source={require("../assets/q-comemos-31.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  timeLightLayout: {
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
  button2Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  errorTypo: {
    marginTop: 8,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    lineHeight: 22,
    fontSize: FontSize.singleLineBodyBase_size,
  },
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttonTypo: {
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    fontSize: FontSize.singleLineBodyBase_size,
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  label2Typo: {
    marginLeft: 12,
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    lineHeight: 22,
    fontSize: FontSize.singleLineBodyBase_size,
    flex: 1,
  },
  inputField1SpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    padding: StyleVariable.space300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: StyleVariable.radius200,
    overflow: "hidden",
    flex: 1,
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
  label: {
    textAlign: "left",
    fontFamily: FontFamily.singleLineBodyBase,
    lineHeight: 22,
    fontSize: FontSize.singleLineBodyBase_size,
    color: Color.textDefaultDefault,
    alignSelf: "stretch",
  },
  description: {
    color: Color.textDefaultSecondary,
    alignSelf: "stretch",
  },
  value: {
    color: Color.textDefaultTertiary,
    flex: 1,
  },
  input: {
    paddingHorizontal: StyleVariable.space400,
    paddingVertical: StyleVariable.space300,
    minWidth: 240,
    borderRadius: StyleVariable.radius200,
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: Color.borderDefaultDefault,
    borderStyle: "solid",
    backgroundColor: Color.backgroundDefaultDefault,
    overflow: "hidden",
  },
  error: {
    color: Color.textDefaultDefault,
  },
  inputField: {
    alignSelf: "stretch",
  },
  checkboxIcon: {
    borderRadius: StyleVariable.radius100,
  },
  label2: {
    color: Color.textDefaultDefault,
  },
  checkboxAndLabel: {
    alignSelf: "stretch",
  },
  description2: {
    color: Color.textDefaultSecondary,
  },
  starIcon: {
    display: "none",
  },
  button1: {
    color: Color.textNeutralDefault,
    marginLeft: 8,
  },
  xIcon: {
    marginLeft: 8,
    display: "none",
  },
  button: {
    display: "none",
  },
  button3: {
    color: Color.textBrandOnBrand,
    marginLeft: 8,
  },
  button2: {
    backgroundColor: Color.colorDarkorange_100,
    borderColor: Color.borderBrandDefault,
    marginLeft: 16,
    borderWidth: 1,
    borderStyle: "solid",
    padding: StyleVariable.space300,
    justifyContent: "center",
  },
  buttonGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  formRegister: {
    top: 237,
    left: 22,
    width: 320,
    height: 361,
    padding: StyleVariable.space600,
    minWidth: 320,
    borderColor: Color.borderDefaultDefault,
    backgroundColor: Color.backgroundDefaultDefault,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    borderRadius: Border.br_xl,
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
    marginLeft: 4,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
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
  qComemos3: {
    top: 61,
    left: 128,
    width: 103,
    height: 104,
    position: "absolute",
  },
  formularioDeRegistro: {
    backgroundColor: Color.colorBlanchedalmond,
    width: "100%",
    height: 800,
    flex: 1,
  },
});

export default FormularioDeRegistro;
