import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { memo, useCallback } from "react";
import { StyleSheet, View, Animated } from "react-native";
import {
  LONG_MARK_HEIGHT,
  WHEEL,
  ANDROID_ITEM_WIDTH,
  ANDROID_WHEEL_WIDTH,
  ANDROID_WHEEL_PADDING,
} from "../assets/config";
import { theme } from "../assets/theme";
import IntervalAndroid from "./IntervalAndroid";
import { WheelAndroidProps } from "./types";

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

const WheelAndroid = ({ scrollX, currentIndexNode }: WheelAndroidProps) => {
  const onScroll = useCallback(
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: true,
    }),
    [],
  );

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <IntervalAndroid
        item={item}
        index={index}
        currentIndexNode={currentIndexNode}
      />
    );
  };

  return (
    <View style={styles.container}>
      <AnimatedFlashList
        data={WHEEL}
        estimatedItemSize={ANDROID_ITEM_WIDTH}
        keyExtractor={(_: any, index: any) => index}
        renderItem={renderItem}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: ANDROID_WHEEL_WIDTH },
  listContainer: { paddingHorizontal: ANDROID_WHEEL_PADDING },
  indicatorContainer: {
    alignSelf: "center",
    alignItems: "center",
    width: ANDROID_ITEM_WIDTH,
    marginTop: -2.5,
    top: -LONG_MARK_HEIGHT,
  },
  indicator: {
    height: LONG_MARK_HEIGHT,
    borderRadius: 2,
    width: 2,
    backgroundColor: theme.colors.brightBlue,
  },
});

export default memo(WheelAndroid);
