import { Flex, BackButton } from "@components/index";
import { PerformanceMeasureView } from "@shopify/react-native-performance";
import { theme } from "./assets/theme";
import Routes from "@navigation/routes";
import Picker from "./components/Picker";
import { StatusBar, StyleSheet } from "react-native";
import { vs } from "react-native-size-matters/extend";

const AdjustmentWheelScreen = () => {
  return (
    <PerformanceMeasureView screenName={Routes.AdjustmentWheel} interactive>
      <StatusBar barStyle="light-content" />
      <Flex style={styles.container}>
        <Picker />
      </Flex>
      <BackButton />
    </PerformanceMeasureView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: vs(42),
  },
});

export default AdjustmentWheelScreen;
