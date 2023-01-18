import { Animated } from "react-native";
import Ionicons from "react-native-vector-icons/glyphmaps/Ionicons.json";

export type AnimatedIcon = {
  iconName: keyof typeof Ionicons;
  iconSize: number;
  iconScaleFactor: number;
};

export type AnimatedTabProps = AnimatedIcon & {
  onPress: () => void;
  progress: Animated.AnimatedInterpolation;
  index: number;
};

export type TabConfigItem = AnimatedIcon & {
  component: () => JSX.Element;
};

export type HeaderProps = {
  title: string;
  subtitle: string;
  scrollY: Animated.Value;
};

export type ContactHeaderProps = { item: string };

export type Contact = {
  firstName: string;
  lastName?: string;
  image?: any;
  color?: string;
  phoneNumber?: string;
  email?: string;
};

export type ContactListItem = {
  item: Contact;
  titleColor?: string;
};

export type SlideContainerProps = {
  item: TabConfigItem;
  index: number;
  progress: Animated.AnimatedInterpolation;
};

export type TopBarProps = {
  onPress: (index: number) => void;
  progress: Animated.AnimatedInterpolation;
};
