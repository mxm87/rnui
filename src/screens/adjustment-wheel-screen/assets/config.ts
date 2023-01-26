import { metrics } from "@constants/metrics";
import { s } from "react-native-size-matters/extend";
import { getShiftIntervals, getWheelValues, toNearesEvenNumber } from "./utils";

export const LENGTH = 55;
export const INITIAL_INDEX = 25;
export const INDEX_OFFSET = 5;
export const WHEEL = getWheelValues(LENGTH, INDEX_OFFSET);
export const LONG_MARK_HEIGHT = 48;
export const SHORT_MARK_HEIGHT = Math.floor(LONG_MARK_HEIGHT / 1.61);

export const ITEM_WIDTH = 17;
export const VISIBLE_ITEMS = 29;
export const DRAW_ITEMS = Math.floor(VISIBLE_ITEMS / 2);
export const SHIFT_INTERVALS = getShiftIntervals(DRAW_ITEMS - 1);
export const WHEEL_WIDTH = s(350);
export const WHEEL_PADDING = WHEEL_WIDTH / 2 - ITEM_WIDTH / 2;
export const IDXS = [...Array(VISIBLE_ITEMS).keys()].map(
  index => index - DRAW_ITEMS,
);

export const ANDROID_ITEM_WIDTH = 20;
export const ANDROID_VISIBLE_ITEMS = 23;
export const ANDROID_DRAW_ITEMS = Math.floor(ANDROID_VISIBLE_ITEMS / 2);
export const ANDROID_SHIFT_INTERVALS = getShiftIntervals(
  ANDROID_DRAW_ITEMS - 1,
);
export const ANDROID_WHEEL_WIDTH = toNearesEvenNumber(metrics.screenWidth - 20);
export const ANDROID_WHEEL_PADDING =
  ANDROID_WHEEL_WIDTH / 2 - ANDROID_ITEM_WIDTH / 2;
export const ANDROID_IDXS = [...Array(ANDROID_VISIBLE_ITEMS).keys()].map(
  index => index - ANDROID_DRAW_ITEMS,
);
