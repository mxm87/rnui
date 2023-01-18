import { RenderPassReport } from "@shopify/react-native-performance";
import { CONSOLE_COLORS } from "@constants/misc";

export function printRenderReportConsole(report: RenderPassReport) {
  if (report.interactive) {
    console.log(
      `🚀 ~ ${process.env.NODE_ENV?.toUpperCase()} MODE: ${
        report.destinationScreen
      } rendered in ${CONSOLE_COLORS.GREEN} ${report.timeToRenderMillis.toFixed(
        2,
      )} ms ${CONSOLE_COLORS.OFF}`,
    );
  }
}
