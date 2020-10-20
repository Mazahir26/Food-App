import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Searchbar from "../Components/SearchBar";
import yelp from "../api/yelp";
import ResultsList from "../Components/Resultslist";

const Home = () => {
  //State Variables
  const [term, setTerm] = useState("");
  const [results, setresults] = useState([]);
  const [errormessage, setErrorMessage] = useState("");

  //Filter Function
  const filterResultsbyPrice = (Price) => {
    return results.filter((result) => {
      return result.price === Price;
    });
  };

  // Api Method and callback
  const searchApi = async (searchterm) => {
    console.log("Searching");
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchterm,
          limit: 50,
          location: "san francisco",
        },
      });
      setresults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong, Please Try Again Later");
    }
  };
  useEffect(() => {
    searchApi("");
  }, []);

  //Main Jsx

  return (
    <>
      <Searchbar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errormessage !== "" ? <Text>{errormessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsbyPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsbyPrice("$$")}
          title="A Bit Pricier"
        />
        <ResultsList
          results={filterResultsbyPrice("$$$")}
          title="Big Spender"
        />
        <ResultsList
          results={filterResultsbyPrice("$$$$")}
          title="House Seller"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
export default Home;
