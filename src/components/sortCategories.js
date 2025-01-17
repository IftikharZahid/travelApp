import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../theme";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState("Popular");

  return (
    <View className="flex-row justify-around items-center mx-2 bg-neutral-100 rounded-full p-2 px-4 space-x-2">
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort;
        // let activeButtonClass = isActive ? "bg-white shadow" : "";

        return (
          <TouchableOpacity
            onPress={() => setActiveSort(sort)}
            key={index}
            className="p-2 px-3 rounded-full flex"
            style={{
              backgroundColor: isActive ? "#ffffff" : "transparent",
              shadowColor: isActive ? "#000" : "transparent",
              shadowOpacity: isActive ? 0.1 : 0,
              shadowRadius: isActive ? 4 : 0,
            }}
          >
            <Text
              className="font-semibold"
              style={{
                fontSize: wp(4),
                color: isActive ? theme.text : "rgba(0,0,0,0.6)",
              }}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
