import { StatusBar, StyleSheet } from "react-native";
import { theme } from "./assets/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import Routes from "@navigation/routes";
import Card from "./components/Card";
import SwipeGesture from "./components/SwipeGesture";
import { metrics } from "@constants/metrics";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PerformanceMeasureView } from "@shopify/react-native-performance";
import {
  BACK_BUTTON_HEIGHT,
  CARDS,
  CARD_HEIGHT_CLOSED,
  CARD_MARGIN,
} from "./assets/config";
import { BackButton } from "@components/buttons";
import { globalTheme } from "@assets/globalTheme";
import { s } from "react-native-size-matters/extend";

const AppleWalletScreen = () => {
  const insets = useSafeAreaInsets();
  const selectedCard = useSharedValue(-1);
  const swipeY = useSharedValue(0);
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(
    e => (scrollY.value = e.contentOffset.y),
  );
  const inTransition = useSharedValue(0);

  const scrollContainerStyle = metrics.isIOS
    ? useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateY: interpolate(
                scrollY.value,
                [-metrics.screenHeight / 2, 0],
                [-metrics.screenHeight / 2, 0],
                Extrapolation.CLAMP,
              ),
            },
          ],
        };
      })
    : null;

  return (
    <PerformanceMeasureView screenName={Routes.AppleWallet} interactive>
      <StatusBar barStyle="light-content" />
      <SwipeGesture {...{ selectedCard, swipeY, inTransition }}>
        <Animated.ScrollView
          style={styles.container}
          contentContainerStyle={{
            paddingTop: BACK_BUTTON_HEIGHT + insets.top + s(16),
            paddingBottom:
              CARD_HEIGHT_CLOSED +
              CARD_MARGIN * (CARDS.length - 1) +
              insets.bottom,
          }}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          scrollEnabled={selectedCard.value === -1}
          decelerationRate="fast">
          <Animated.View style={metrics.isIOS && scrollContainerStyle}>
            {CARDS.map((e, i) => (
              <Card
                key={i}
                item={e}
                index={i}
                {...{ selectedCard, scrollY, swipeY, inTransition }}
              />
            ))}
          </Animated.View>
        </Animated.ScrollView>
      </SwipeGesture>
      <BackButton
        color={globalTheme.colors.transBlack}
        style={styles.backButton}
        iconSize={s(26)}
      />
    </PerformanceMeasureView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
  },
  backButton: {
    height: BACK_BUTTON_HEIGHT,
    width: BACK_BUTTON_HEIGHT,
    backgroundColor: globalTheme.colors.transWhite,
    borderRadius: 17,
  },
});

export default AppleWalletScreen;
