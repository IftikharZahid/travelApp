import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../../components/categories";
import SortCategories from "../../components/sortCategories";
import Destinations from "../../components/destinations";

const ios = Platform.ios == "ios";
const topMargin = ios ? "mt-2" : "mt-4";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6 " + topMargin}
      >
        {/* Avatar */}
        <View className="mx-5 flex-row justify-between items-center mb-8">
          <Text
            className="font-bold text-neutral-700 "
            style={{ fontSize: wp(7) }}
          >
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/avatar.jpg")}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        {/*Search Bar */}
        <View className="mx-3 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color={"gray"} />
            <TextInput
              placeholder="Sreach destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
          {/* Categories */}
          <View className="mb-4">
            <Categories />
          </View>
          {/* Sort Category */}
          <View className="mb-4">
            <SortCategories />
          </View>
          {/* Destinations */}
          <View>
            <Destinations />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
