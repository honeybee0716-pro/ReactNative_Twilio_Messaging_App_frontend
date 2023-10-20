import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView} from "react-native";
import HomeSearchList from "../components/HomeSearchList";
import SearchBar from "../components/SearchBar";
import { API_LOCAL_URL } from "../config/api";

const HomeSearchScreen = () => {
   const [searchPhrase, setSearchPhrase] = useState("");
   const [clicked, setClicked] = useState(false);
   // const [fakeData, setFakeData] = useState();

   //Get data from the fake api endpoint
   // useEffect(() => {
   //    const getData = async () => {
   //       const apiResponse = await fetch(
   //          "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
   //       );
   //       const data = await apiResponse.json();
   //       setFakeData(data);
   //    };
   //    getData();
   // }, []);

  //  useEffect(() => {
  //   axios.get(`${API_LOCAL_URL}/customer`).then((response) =>{
  //     setFakeData(response.data);
  //   }).catch(error =>{
  //     console.log(error);
  //   });
  // },[]);
  
   const [fakeData, setFakeData] = useState({
      data: [
        {
          "id": 1,
          "image_url": "../assets/avatars/avatar1.jpg",
          "name": "John Doe",
          "message": "Hello, this is the first message.",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 2,
          "image_url": "../assets/avatars/avatar2.jpg",
          "name": "Jane Smith",
          "message": "Hey there! Here's the second message.",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 3,
          "image_url": "../assets/avatars/avatar3.jpg",
          "name": "Alex Johnson",
          "message": "Greetings from the third message!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 4,
          "image_url": "../assets/avatars/avatar4.jpg",
          "name": "Sarah Adams",
          "message": "Just wanted to say hi!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 5,
          "image_url": "../assets/avatars/avatar5.jpg",
          "name": "Michael Brown",
          "message": "Hope you're having a great day!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 6,
          "image_url": "../assets/avatars/avatar6.jpg",
          "name": "Emily Davis",
          "message": "Sending you warm wishes!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 7,
          "image_url": "../assets/avatars/avatar1.jpg",
          "name": "Robert Wilson",
          "message": "Wishing you a fantastic week ahead!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 8,
          "image_url": "../assets/avatars/avatar2.jpg",
          "name": "Olivia Lee",
          "message": "Thinking of you!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 9,
          "image_url": "../assets/avatars/avatar3.jpg",
          "name": "Daniel Clark",
          "message": "Have a wonderful day!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 10,
          "image_url": "../assets/avatars/avatar4.jpg",
          "name": "Sophia Taylor",
          "message": "Sending positive vibes your way!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 11,
          "image_url": "../assets/avatars/avatar5.jpg",
          "name": "Matthew Hernandez",
          "message": "Keep up the great work!",
          "time":"2min ago",
          "badge":3      },
        {
          "id": 12,
          "image_url": "../assets/avatars/avatar6.jpg",
          "name": "Ava Martinez",
          "message": "You're doing amazing!",
          "time":"2min ago",
          "badge":3      }
      ]
    });


   return (
      <SafeAreaView style={styles.root}>
         <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
         />
            <HomeSearchList searchPhrase={searchPhrase} data={fakeData.data} setClicked={setClicked} />
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
