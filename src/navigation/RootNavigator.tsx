import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
    </Stack.Navigator>
  );
};
