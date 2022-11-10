// import { View, Text, Button } from "react-native";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

// const Details = () => (
//   <View>
//     <Text>Details</Text>
//   </View>
// );
// const Orders = () => (
//   <View>
//     <Text>Orders</Text>
//   </View>
// );
// const Profile = () => (
//   <View>
//     <Text>Profile</Text>
//   </View>
// );
// const Tabs = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <Tabs.Navigator>
//         <Tabs.Screen name="Menu" component={Menu} />
//         <Tabs.Screen name="Orders" component={Orders} />
//         <Tabs.Screen name="Profile" component={Profile} />
//       </Tabs.Navigator> */}

//       <Stack.Navigator>
//         <Stack.Screen name="Menu" component={Menu} />
//         <Stack.Screen name="Details" component={Details} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const Home = ({ navigation }) => (
//   <SafeAreaView style={{ backgroundColor: "red" }}>
//     <StatusBar backgroundColor="#b3e6ff" barStyle="dark-content" />
//     <Text>Home</Text>
//     <Button
//       title="Cart"
//       onPress={() => navigation.push("Cart", { name: "Cart" })}
//     />
//   </SafeAreaView>
// );
// const Cart = ({ route }) => (
//   <SafeAreaView>
//     <Text>Cart</Text>
//   </SafeAreaView>
// );

// export default App;
