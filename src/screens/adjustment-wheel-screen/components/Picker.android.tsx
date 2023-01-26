import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Animated, Text } from "react-native";
import { mvs, s } from "react-native-size-matters/extend";
import { ANDROID_ITEM_WIDTH, INDEX_OFFSET } from "../assets/config";
import { getHeaderText } from "../assets/utils";
import WheelAndroid from "./WheelAndroid";

/**
 * Android notes:
 * 1. MaskedView doesn't support scrollable masks on Android.
 *    We use permanent indicator instead.
 * 2. Reanimated 2 at this point in time (Jan '23) doesn't handle
 *    animation of many elements on low-end Android devices well.
 *    So for now we fallback to vanilla Animated API.
 */

const PickerAndroid = () => {
  const [headerTx, setHeaderTx] = useState(getHeaderText(0, INDEX_OFFSET));
  const scrollX = useRef(new Animated.Value(0)).current;
  const currentIndex = useRef(0);
  const currentIndexNode = useRef(
    Animated.divide(scrollX, ANDROID_ITEM_WIDTH),
  ).current;

  useEffect(() => {
    const subscription = currentIndexNode.addListener(({ value }) => {
      if (Math.abs(currentIndex.current - value) > 0.5) {
        currentIndex.current = Math.round(value);
        setHeaderTx(getHeaderText(currentIndex.current, INDEX_OFFSET));
      }
    });

    return () => currentIndexNode.removeListener(subscription);
  }, []);

  return (
    <View>
      <Text style={styles.header}>{headerTx}</Text>
      <View style={styles.separator} />
      <WheelAndroid scrollX={scrollX} currentIndexNode={currentIndexNode} />
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

export default PickerAndroid;
