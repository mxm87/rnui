import { Animated, StyleSheet } from "react-native";
import {
  ANDROID_DRAW_ITEMS,
  ANDROID_IDXS,
  ANDROID_ITEM_WIDTH,
  ANDROID_SHIFT_INTERVALS,
} from "../assets/config";
import { theme } from "../assets/theme";
import { IntervalAndroidProps } from "./types";
import Mark from "./Mark";

const IntervalAndroid = ({
  item,
  index,
  currentIndexNode,
}: IntervalAndroidProps) => {
  const indexDiff = Animated.subtract(currentIndexNode, index);
  return (
    <Animated.View
      style={[
        styles.item,
        {
          opacity: indexDiff.interpolate({
            inputRange: [
              -ANDROID_DRAW_ITEMS,
              -ANDROID_DRAW_ITEMS + 1,
              -ANDROID_DRAW_ITEMS + 5,
              0,
              ANDROID_DRAW_ITEMS - 5,
              ANDROID_DRAW_ITEMS - 1,
              ANDROID_DRAW_ITEMS,
            ],
            outputRange: [0, 0.25, 1, 1, 1, 0.25, 0],
            extrapolate: "clamp",
          }),
          transform: [
            {
              translateX: indexDiff.interpolate({
                inputRange: [...ANDROID_IDXS],
                outputRange: [...ANDROID_SHIFT_INTERVALS],
                extrapolate: "clamp",
              }),
            },
          ],
        },
      ]}>
      <Mark item={item} width={2} color={theme.colors.offWhite} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: ANDROID_ITEM_WIDTH,
    height: 70,
    justifyContent: "center",
  },
});

export default IntervalAndroid;
