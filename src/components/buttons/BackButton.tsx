import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalTheme } from "@assets/globalTheme";
import { useProfiledNavigation } from "@shopify/react-native-performance-navigation";
import { s } from "react-native-size-matters/extend";

export const BackButton = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useProfiledNavigation();
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={[
        styles.container,
        {
          top: top === 0 ? s(20) : top,
        },
      ]}>
      <Icon name="chevron-back" color={globalTheme.colors.white} size={s(28)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    left: s(20),
    width: s(48),
    height: s(48),
  },
});
