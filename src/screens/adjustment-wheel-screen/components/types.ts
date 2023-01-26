import { Animated } from "react-native";
import { SharedValue } from "react-native-reanimated";

export type WheelItem = {
  value: number;
  label: string;
};

export type MarkProps = {
  item: WheelItem;
  width: number;
  color: string;
};

type ProgressT = {
  progress: SharedValue<number>;
};

type IndexNodeT = {
  currentIndexNode: Animated.AnimatedDivision;
};

export type IntervalProps = ProgressT & {
  item: WheelItem;
  index: number;
};

export type IntervalAndroidProps = IndexNodeT & {
  item: WheelItem;
  index: number;
};

export type WheelAndroidProps = IndexNodeT & {
  scrollX: Animated.Value;
};

export type WheelProps = ProgressT & {
  scrollX: SharedValue<number>;
};
