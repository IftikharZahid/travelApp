import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { sortCategoryData } from "../constants";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { theme } from "../theme";

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState("Popular");

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
      {/* Sort Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#f5f5f5",
          borderRadius: 24,
          padding: 8,
        }}
      >
        {sortCategoryData.map((sort, index) => {
          const isActive = sort === activeSort;

          return (
            <TouchableOpacity
              onPress={() => setActiveSort(sort)}
              key={index}
              style={{
                padding: 8,
                paddingHorizontal: 16,
                borderRadius: 24,
                backgroundColor: isActive ? "#ffffff" : "transparent",
                shadowColor: isActive ? "#000" : "transparent",
                shadowOpacity: isActive ? 0.1 : 0,
                shadowRadius: isActive ? 4 : 0,
              }}
            >
              <Text
                style={{
                  fontSize: wp(4),
                  fontWeight: "600",
                  color: isActive ? theme.text : "rgba(0,0,0,0.6)",
                }}
              >
                {sort}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Display Selected Sort Category */}
      <View
        style={{
          marginTop: 24,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: wp(6),
            fontWeight: "bold",
            color: theme.text,
          }}
        >
          Selected Category:
        </Text>
        <Text
          style={{
            fontSize: wp(5),
            color: "rgba(0,0,0,0.8)",
            marginTop: 8,
          }}
        >
          {activeSort}
        </Text>
      </View>
    </View>
  );
}
