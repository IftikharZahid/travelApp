import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 flex justify-end"
      style={{ flex: 1, alignItems: "stretch" }}
    >
      {/* Background Image */}
      <Image
        source={require("../../../assets/car.jpg")}
        className="h-full w-full absolute "
      />

      {/* Content and gradient */}
      <View className="p-5 bp-10 space-y-8">
        {/* Tranpapert background */}
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          style={{ width: wp(100), height: wp(60) }}
          star={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <View className="space-y-3 ">
          <Text
            className="text-white font-bold text-5xl"
            style={{ fontSize: wp(10) }}
          >
            Traveling made easy
          </Text>
          <Text
            className="text-neutral-200 font-medium"
            style={{ fontSize: wp(4) }}
          >
            Experience the world's best adventure around the world with us.
          </Text>
          <TouchableOpacity
            className="bg-orange-500 p-2 m-3 rounded-full"
            style={{ width: hp(30), alignSelf: "center" }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              className="text-white font-bold"
              style={{ fontSize: wp(5.5), textAlign: "center" }}
            >
              Let's go!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
