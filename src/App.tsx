import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  PerformanceProfiler,
  RenderPassReport,
} from "@shopify/react-native-performance";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { printRenderReportConsole } from "@utils/console";
import { RootNavigator } from "@navigation/index";
import { StatusBar } from "react-native";

const App = () => {
  const onReportPrepared = useCallback((report: RenderPassReport) => {
    // uncomment to enable perfomance logs
    printRenderReportConsole(report);
  }, []);

  return (
    <PerformanceProfiler onReportPrepared={onReportPrepared}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </PerformanceProfiler>
  );
};

export default App;
