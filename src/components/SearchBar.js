import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ inputValue, submitSearch, updateInput }) => {
  return (
    <View style={S.container}>
      <Ionicons
        name="search-sharp"
        style={S.searchIcon}
        size={32}
        color="#000000"
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={S.searchInput}
        placeholder="Explore away.."
        value={inputValue}
        onChangeText={updateInput}
        onEndEditing={submitSearch}
      />
    </View>
  );
};

export default SearchBar;

const S = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    flexDirection: "row",
    height: 50,
    marginHorizontal: 30,
    marginTop: 30,
  },
  searchIcon: {
    alignSelf: "center",
    fontSize: 32,
    marginHorizontal: 7,
  },
  searchInput: {
    // borderColor: "#f00",
    // borderWidth: 2,
    flex: 1,
    fontSize: 20,
  },
});
