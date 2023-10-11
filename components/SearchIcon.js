// SearchBar.js
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Feather} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchIcon = ({ screen }) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButtonPress}>
        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={30}
            color="white"
            style={{ marginLeft: 1 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SearchIcon;

// styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 55,
  },
  searchBar: {
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "rgba(93, 176, 117, 1)",
    borderRadius: 50,
    borderColor: "rgba(54, 63, 59, 0.3)",
    borderWidth: 2,
    alignItems: "center",
  },
});
