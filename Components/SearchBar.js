import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Searchbar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.IconStyle} name="search" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newterm) => onTermChange(newterm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgray",
    height: 50,
    borderRadius: 10,
    margin: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    marginRight: 10,
  },
  IconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 5,
  },
});
export default Searchbar;
