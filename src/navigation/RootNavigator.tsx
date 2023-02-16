import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Routes from "./routes";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.Home}
        component={require("@screens/home-screen").default}
      />
      <Stack.Screen
        name={Routes.ContactList}
        component={require("@screens/contact-list-screen").default}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={Routes.AdjustmentWheel}
        component={require("@screens/adjustment-wheel-screen").default}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name={Routes.AppleWallet}
        component={gestureHandlerRootHOC(
          require("@screens/apple-wallet-screen").default,
        )}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};
