import { useRef } from "react";
import { Flex, SafeFlex } from "@components/index";
import { metrics } from "@constants/metrics";
import { PerformanceMeasureView } from "@shopify/react-native-performance";
import { Animated, StatusBar, StyleSheet } from "react-native";
import { TABS_CONFIG } from "./assets/tab-config";
import { theme } from "./assets/theme";
import SlideContainer from "./components/SlideContainer";
import TopBar from "./components/TopBar";
import Routes from "@navigation/routes";

const ContactListScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const progress = useRef(
    Animated.divide(scrollX, metrics.screenWidth),
  ).current;

  const scrollRef = useRef<any>(null);
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: true },
  );
  const scrollToIndex = (index: number) => {
    scrollRef.current?.scrollTo({
      x: metrics.screenWidth * index,
      animated: true,
    });
  };

  return (
    <PerformanceMeasureView screenName={Routes.ContactList} interactive>
      <SafeFlex top style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TopBar progress={progress} onPress={scrollToIndex} />
        <Flex>
          <Animated.ScrollView
            ref={scrollRef}
            horizontal
            bounces={false}
            onScroll={onScroll}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            pagingEnabled={true}>
            {TABS_CONFIG.map((item, index) => (
              <SlideContainer
                item={item}
                index={index}
                progress={progress}
                key={index}
              />
            ))}
          </Animated.ScrollView>
        </Flex>
      </SafeFlex>
    </PerformanceMeasureView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
  },
});

export default ContactListScreen;
