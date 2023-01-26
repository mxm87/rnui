import { StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import {
  DRAW_ITEMS,
  IDXS,
  ITEM_WIDTH,
  SHIFT_INTERVALS,
} from "../assets/config";
import Mark from "./Mark";
import { IntervalProps } from "./types";

const Interval = ({ item, index, progress }: IntervalProps) => {
  const indexDiff = useDerivedValue(() => {
    return progress.value - index;
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        progress.value,
        [
          index - DRAW_ITEMS,
          index - (DRAW_ITEMS - 1),
          index - (DRAW_ITEMS - 5),
          index,
          index + (DRAW_ITEMS - 5),
          index + (DRAW_ITEMS - 1),
          index + DRAW_ITEMS,
        ],
        [0, 0.25, 1, 1, 1, 0.25, 0],
        Extrapolate.CLAMP,
      ),
      transform: [
        {
          translateX: interpolate(
            indexDiff.value,
            [...IDXS],
            [...SHIFT_INTERVALS],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <Mark item={item} width={1.5} color="white" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    height: 70,
    justifyContent: "center",
  },
});

export default Interval;
