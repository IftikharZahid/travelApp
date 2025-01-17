import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { theme } from "../theme";
import { categoryData } from "../constants";

export default function Categories() {
  return (
    <View style={{marginTop:10}}>
      <View className="mx-5 flex-row justify-between items-center">
        <Text
          style={{ fontSize: wp(4) }}
          className="font-semibold text-neutral-700 "
        >
          Categories
        </Text>
        <TouchableOpacity className=" ">
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, }}
        style={{marginTop:15}}
      >
        {categoryData.map((cat, index) => {
          return (
            <TouchableOpacity
              key={index}
              className="flex items-center mx-1.5 " 
            >
              <Image
                source={cat.image}
                className="rounded-3xl"
                style={{ width: wp(20), height: wp(18) }}
              />
              <Text className="text-neutral-700 font-medium" style={{fontSize:wp(3)}}>{cat.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
