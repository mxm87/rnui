import { AnimatedText } from "@components/index";
import { StyleSheet, View } from "react-native";
import {
  runOnJS,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { mvs, s } from "react-native-size-matters/extend";
import {
  INDEX_OFFSET,
  INITIAL_INDEX,
  ITEM_WIDTH,
  LENGTH,
} from "../assets/config";
import { tickHaptic } from "../assets/utils";
import Wheel from "./Wheel";

const AdjustmentWheelScreen = () => {
  const scrollX = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return scrollX.value / ITEM_WIDTH;
  });

  const currentIndex = useSharedValue(INITIAL_INDEX);

  useAnimatedReaction(
    () => Math.min(Math.max(0, progress.value), LENGTH - 1),
    minMaxProgress => {
      if (Math.abs(currentIndex.value - minMaxProgress) > 0.5) {
        runOnJS(tickHaptic)();
        currentIndex.value = Math.round(minMaxProgress);
      }
    },
  );

  const headerTx = useDerivedValue(() => {
    return `${currentIndex.value < 10 - INDEX_OFFSET ? "0" : ""}${
      currentIndex.value + INDEX_OFFSET
    }:00`;
  });

  return (
    <View>
      <AnimatedText text={headerTx} style={styles.header} />
      <View style={styles.separator} />
      <Wheel scrollX={scrollX} progress={progress} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    fontSize: mvs(74),
    textAlign: "center",
    fontFamily: "Monda-Regular",
  },
  container: {
    height: 114,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    opacity: 0.3,
    width: s(270),
    backgroundColor: "white",
    height: 1,
    marginTop: mvs(-10),
    marginBottom: mvs(12),
    alignSelf: "center",
  },
});

export default AdjustmentWheelScreen;
