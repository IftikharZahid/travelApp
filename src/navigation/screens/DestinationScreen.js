import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import {
  ChevronLeftIcon,
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  SunIcon,
} from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../theme";

// Files Import Section ending

export default function DestinationScreen(props) {
  // Business Logic Design Area
  const item = props.route.params;
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View className="bg-white flex-1">
      {/* Destination Image */}
      <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
      <Text>DestinationScreen</Text>
      {/* StatusBar */}
      <StatusBar style={"light"} />
      {/* back button */}

      <SafeAreaView className="flex-row justify-between items-center w-full absolute">
        {/* goback Button */}
        <TouchableOpacity
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          className="p-2 rounded-full ml-4"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={4} color={"white"} />
        </TouchableOpacity>
        {/* favourite button */}
        <TouchableOpacity
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          className="p-2 rounded-full mr-4"
          onPress={() => setIsLiked(!isLiked)}
        >
          <HeartIcon
            size={wp(7)}
            strokeWidth={4}
            color={isLiked ? "red" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {/* Title & description & booking button */}
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start ">
            <Text
              className="font-bold flex-1 text-neutral-700 "
              style={{ fontSize: wp(7) }}
            >
              {item.title}
            </Text>
            <Text
              style={{ fontSize: wp(7), color: theme.text }}
              className="font-semibold"
            >
              $ {item.price}
            </Text>
          </View>
          <Text
            style={{ fontSize: wp(3.7) }}
            className="text-neutral-700 tracking-wide mb-2"
          >
            {item.longdescription}
          </Text>
          <View className="flex-row justify-between mx-1 ">
            <View className="flex-row space-x-2 items-start">
              <ClockIcon size={wp(7)} color={"skyblue"} />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700 "
                >
                  {item.duration}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Duration</Text>
              </View>
            </View>
            <View className=" flex-row space-x-2 items-start ">
              <MapPinIcon size={wp(7)} color={"red"} />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700 "
                >
                  {item.distance}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Distance</Text>
              </View>
            </View>
            <View className=" flex-row space-x-2 items-start ">
              <SunIcon size={wp(7)} color={"orange"} />
              <View className="flex space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700 "
                >
                  {item.weather}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Sunny</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
        className="bg-orange-500 mb-6 mx-auto flex justify-center rounded-full"
                    style={{ width: hp(30),height:wp(15) }}
          // className="mb-6 mx-auto flex justify-center rounded-full"
        >
          <Text
            className="text-white font-bold"
            style={{ fontSize: wp(5.5), textAlign: "center" }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
