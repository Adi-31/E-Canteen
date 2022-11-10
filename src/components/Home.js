import { View, Text, SafeAreaView, StatusBar, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => (
  <View>
    <Text>Home</Text>
    <Button
      title="Cart"
      onPress={() => navigation.push("Cart", { name: "Cart" })}
    />
  </View>
);

export default Home;
