import {
  Edge,
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { View, ViewProps } from "react-native";

export const Flex = ({ children, style, ...rest }: ViewProps) => (
  <View style={[{ flex: 1 }, style]} {...rest}>
    {children}
  </View>
);

export const SafeFlex = ({
  children,
  style,
  top,
  bottom,
  ...rest
}: SafeAreaViewProps & { top?: boolean; bottom?: boolean }) => (
  <SafeAreaView
    edges={[top && "top", bottom && "bottom"].filter(Boolean) as Edge[]}
    style={[{ flex: 1 }, style]}
    {...rest}>
    {children}
  </SafeAreaView>
);

export const HStack = ({ children, style, ...rest }: ViewProps) => (
  <View style={[{ flexDirection: "row" }, style]} {...rest}>
    {children}
  </View>
);
