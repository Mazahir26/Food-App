import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import yelp from "../api/yelp";

const ResultShow = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [results, setResults] = useState(null);

  const getresults = async () => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };
  useEffect(() => {
    getresults(id);
  }, []);

  if (!results) {
    return null;
  }
  console.log(results);
  return (
    <>
      <Text style={styles.Heading}>{results.name}</Text>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.Img} source={{ uri: item }} />;
          }}
        />
        <Text style={styles.SubHeading}>Reviews:</Text>
        <Text style={styles.text}>
          {results.rating} Stars, {results.review_count} Reviews
        </Text>
        <Text style={styles.SubHeading}>Address:</Text>
        <Text style={styles.text}>{results.location.display_address[0]}</Text>
        <Text style={styles.text}>{results.location.display_address[1]}</Text>
        <Text style={styles.text}>{results.location.display_address[2]}</Text>
        <Text style={styles.text}>Phone : {results.phone}</Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Img: {
    width: 300,
    height: 250,
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 15,
  },
  Heading: {
    marginTop: 15,
    fontSize: 35,
    alignSelf: "center",
    color: "black",
  },
  SubHeading: {
    alignSelf: "stretch",
    fontSize: 25,
    color: "black",
    margin: 25,
  },
  text: {
    fontSize: 18,
    marginLeft: 25,
  },
});
export default ResultShow;

//      <View style={{ flex: 0.9, justifyContent: "center" }}>
//        <Text style={{ fontWeight: "bold", fontSize: 16, alignSelf: "center" }}>
//          Sorry Something Went Wrong, Please Try Again
//        </Text>
//      </View>
