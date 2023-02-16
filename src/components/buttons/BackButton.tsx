import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalTheme } from "@assets/globalTheme";
import { useProfiledNavigation } from "@shopify/react-native-performance-navigation";
import { s } from "react-native-size-matters/extend";

type BackButtonProps = {
  style?: ViewStyle;
  color?: string;
  iconSize?: number;
};

export const BackButton = ({ style, color, iconSize }: BackButtonProps) => {
  const { top } = useSafeAreaInsets();
  const navigation = useProfiledNavigation();
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={StyleSheet.flatten([
        styles.container,
        {
          position: "absolute",
          top: top === 0 ? s(20) : top,
        },
        style,
      ])}>
      <Icon
        name="chevron-back"
        color={color ? color : globalTheme.colors.white}
        size={iconSize ? iconSize : s(28)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    left: s(20),
    width: s(48),
    height: s(48),
  },
});
