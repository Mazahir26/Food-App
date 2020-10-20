import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.Container}>
      <Image style={styles.Img} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginLeft: 15,
    marginBottom: 15,
  },
  Img: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetails;
