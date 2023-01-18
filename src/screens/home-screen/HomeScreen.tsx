import { SafeFlex } from "@components/index";
import { ScreenListItemT, SCREEN_LIST } from "@navigation/screen-list";
import { PerformanceMeasureView } from "@shopify/react-native-performance";
import { useProfiledNavigation } from "@shopify/react-native-performance-navigation";
import {
  FlatList,
  ListRenderItem,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import Routes, { RoutesT } from "@navigation/routes";
import ScreenListItem from "./components/ScreenListItem";
import { mvs } from "react-native-size-matters/extend";

const HomeScreen = () => {
  const { navigate } = useProfiledNavigation();

  const handleItemPress = (destination: RoutesT) => {
    navigate({ source: Routes.Home }, destination);
  };

  const renderItem: ListRenderItem<ScreenListItemT> = ({ item }) => {
    return <ScreenListItem item={item} onPress={handleItemPress} />;
  };

  return (
    <PerformanceMeasureView screenName={Routes.Home} interactive>
      <SafeFlex>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={SCREEN_LIST}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </SafeFlex>
    </PerformanceMeasureView>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: Platform.OS === "android" ? mvs(20) : 0,
  },
});

export default HomeScreen;
