import MaskedView from "@react-native-masked-view/masked-view";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { s } from "react-native-size-matters/extend";
import Icon from "react-native-vector-icons/Ionicons";
import {
  INITIAL_INDEX,
  ITEM_WIDTH,
  WHEEL,
  WHEEL_PADDING,
  WHEEL_WIDTH,
} from "../assets/config";
import { theme } from "../assets/theme";
import Interval from "./Interval";
import { WheelProps } from "./types";

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

const Wheel = ({ scrollX, progress }: WheelProps) => {
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x;
  });

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    return <Interval item={item} index={index} progress={progress} />;
  };

  const maskElement = (
    <View style={styles.maskContainer}>
      <AnimatedFlashList
        data={WHEEL}
        initialScrollIndex={INITIAL_INDEX}
        estimatedItemSize={ITEM_WIDTH}
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="start"
        keyExtractor={(_: any, index: any) => index}
        renderItem={renderItem}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        estimatedFirstItemOffset={0}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.pointer}>
        <Icon name="caret-up" color={theme.colors.white} size={s(19)} />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <MaskedView maskElement={maskElement} style={styles.maskedView}>
        <Animated.View style={styles.sideMask} />
        <Animated.View style={styles.centralMask} />
        <Animated.View style={styles.sideMask} />
      </MaskedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 114,
    alignItems: "center",
    justifyContent: "center",
  },
  maskedView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  maskContainer: {
    width: WHEEL_WIDTH,
  },
  sideMask: {
    height: 160,
    width: WHEEL_PADDING,
    backgroundColor: theme.colors.white,
  },
  centralMask: {
    height: 160,
    zIndex: 1,
    width: ITEM_WIDTH,
    backgroundColor: theme.colors.blue,
  },
  listContainer: { paddingHorizontal: WHEEL_PADDING },
  pointer: { alignSelf: "center", paddingTop: 2 },
});

export default Wheel;
