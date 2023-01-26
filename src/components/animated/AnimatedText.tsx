import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";

type AnimatedTextProps = {
  style?: StyleProp<Animated.AnimateStyle<StyleProp<TextStyle>>>;
  text: Animated.SharedValue<string>;
};

Animated.addWhitelistedNativeProps({ text: true });

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const AnimatedText = ({ style, text }: AnimatedTextProps) => {
  const animatedProps = useAnimatedProps(() => {
    return { text: text.value } as unknown as TextInputProps;
  });

  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      value={text.value}
      style={[styles.text, style]}
      animatedProps={animatedProps}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
