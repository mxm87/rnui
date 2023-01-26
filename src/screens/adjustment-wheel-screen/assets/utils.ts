import ReactNativeHapticFeedback from "react-native-haptic-feedback";

export function getWheelValues(length: number, offset: number) {
  return new Array(length).fill(0).map((_, i) => {
    const value = i + offset;
    return { value, label: String(value) };
  });
}

export function getShiftIntervals(itemsTotal: number) {
  let prev = 0;
  let currentItem = 0;
  const negativeArray = [0, 0, 0];
  const positiveArray = [];

  for (let i = 0; i < itemsTotal; i++) {
    currentItem = prev + 2 + i;
    positiveArray.push(currentItem);
    negativeArray.unshift(-currentItem);
    prev = currentItem;
  }

  return negativeArray.concat(positiveArray);
}

export function toNearesEvenNumber(value: number) {
  return 2 * Math.round(value / 2);
}

export function getHeaderText(index: number, offset: number) {
  return `${index < 10 - offset ? "0" : ""}${index + offset}:00`;
}

export function tickHaptic() {
  ReactNativeHapticFeedback.trigger("selection");
}
