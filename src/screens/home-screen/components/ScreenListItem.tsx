import { globalTheme } from "@assets/globalTheme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { mvs, s } from "react-native-size-matters/extend";
import Icon from "react-native-vector-icons/Ionicons";
import { RoutesT } from "@navigation/routes";
import { ScreenListItemT } from "@navigation/screen-list";

export type ScreenListItemProps = {
  item: ScreenListItemT;
  onPress: (destination: RoutesT) => void;
};

const ScreenListItem = ({ item, onPress }: ScreenListItemProps) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onPress(item.destination)}>
      <Text style={styles.label}>{item.title}</Text>
      <Icon
        name="chevron-forward-outline"
        size={s(20)}
        color={globalTheme.colors.darkGray}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    marginHorizontal: s(20),
    paddingTop: mvs(25),
    paddingBottom: mvs(17),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: globalTheme.colors.lightGray,
    borderBottomWidth: 1,
  },
  label: {
    color: globalTheme.colors.black,
    fontSize: mvs(16),
  },
});

export default ScreenListItem;
