import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView} from "react-native";
import HomeSearchList from "../components/HomeSearchList";
import SearchBar from "../components/SearchBar";
import { API_URL } from "../config/api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeSearchScreen = () => {
   const [searchPhrase, setSearchPhrase] = useState("");
   const [clicked, setClicked] = useState(false);
   const [jsonData, setJsonData] = useState(null);

   const fetchData = async () => {
     const accessToken = await AsyncStorage.getItem("Authorization");
     axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
     await axios.get(`${API_URL}/customer`).then((response) =>{
       console.log("===> HOME_SEARCH",response.data.customers);
       setJsonData(response.data.customers);
       return true
     }).catch(error =>{
       console.log(error);
     });
   }
   useEffect(() => {
    fetchData();
  }, []);

   return (
      <SafeAreaView style={styles.root}>
         <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
         />
            <HomeSearchList searchPhrase={searchPhrase} data={jsonData} setClicked={setClicked} />
      </SafeAreaView>
   );
};

export default HomeSearchScreen;

const styles = StyleSheet.create({
   root: {
      justifyContent: "center",
      alignItems: "center",
   },
   title: {
      width: "100%",
      marginTop: 20,
      fontSize: 25,
      fontWeight: "bold",
      marginLeft: "10%",
   },
});
