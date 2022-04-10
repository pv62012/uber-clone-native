import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import logo from "../assets/Uber-logo.jpg";
import NavOption from "../components/NavOption";
const logoUri = Image.resolveAssetSource(logo).uri;
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`pt-10 pl-5`}>
        <Image
          // source={require("../assets/Uber-logo.jpg")}
          source={{ uri: logoUri }}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
        />
        <NavOption />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {},
});
