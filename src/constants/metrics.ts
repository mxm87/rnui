import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const platform = Platform.OS;
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export const metrics = {
  screenWidth,
  screenHeight,
  platform,
};
