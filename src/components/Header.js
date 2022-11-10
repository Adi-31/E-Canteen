import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";

const Header = () => {
  return (
    <View
      style={{
        // backgroundColor: "red",
        height: 60,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          // backgroundColor: "orange",
          alignItems: " flex-start",
          justifyContent: "center",
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            opacity: 0.5,
            color: COLORS.white,
          }}
        >
          Good Morning
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "700", color: COLORS.white }}>
          Anna
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: "green",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Text>Profile picture</Text>
      </View>
    </View>
  );
};

export default Header;
