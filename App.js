import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { SignIn, CreateAccount } from "./src/screens/Login";
import { Orders, Profile, Menu, Cart } from "./src/screens";

const MenuStack = createStackNavigator();
const MenuStackScreen = () => (
  <MenuStack.Navigator
    initialRouteName="Menu"
    screenOptions={{ headerShown: false }}
  >
    <MenuStack.Screen
      name="Menu"
      component={Menu}
      options={({ route }) => ({
        title: "Menu",
      })}
      initialParams={{ itemId: 42 }}
    />
    <MenuStack.Screen
      name="Cart"
      component={Cart}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </MenuStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator screenOptions={{ headerShown: false }}>
    <Tabs.Screen name="MenuStack" component={MenuStackScreen} />
    <Tabs.Screen name="Orders" component={Orders} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    {userToken ? (
      <RootStack.Screen name="App" component={TabsScreen} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
    )}
  </RootStack.Navigator>
);

const App = () => {
  const [userToken, setUserToken] = useState("hjlf");
  return (
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
    </NavigationContainer>
  );
};

export default App;
