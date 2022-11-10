import { View, Text, Button, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { Header, ScrollableMenu, ViewCart } from "../components";

const Menu = ({ route, navigation, user }) => {
  // const { itemId } = route.params;
  // console.log(itemId);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blue,
      }}
    >
      <Header />
      {/* <ScrollableMenu /> */}
      <ViewCart />
    </SafeAreaView>
  );
};

export default Menu;
