import React, { useState, useEffect } from "react";
import {ScrollView, View,VStack, HStack, Heading, Stack, Center, Box, Text, Avatar} from "native-base";
import HomeProfiles from "../components/HomeProfiles";
import ChatList from "../components/ChatList";
import SearchIcon from "../components/SearchIcon";
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { API_LOCAL_URL } from "../config/api";

const HomeScreen = ({navigation}) => {

  const [jsonData, setJsonData] = useState({
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

  // useEffect(() => {
  //   axios.get(`${API_LOCAL_URL}/customer`).then((response) =>{
  //     setJsonData(response.data);
  //   }).catch(error =>{
  //     console.log(error);
  //   });
  // },[]);

  const handleRemove = (id) => {
    // Logic to remove the item with the given id from the JSON data
    const newData = jsonData.data.filter((item) => item.id !== id);
    setJsonData({ data: newData });
  };

  const handleEdit = (id) => {
    // Logic to edit the item with the given id in the JSON data
    // Implement your own logic here
  };

  return (
<>
      <VStack space="2" mt="0" px="0" bg="rgba(93, 176, 117, 1)"  justifyContent="center" alignItems="center">
        <HStack width={"100%"} justifyContent="center" alignItems="center" my={"7%"}>
          <Box flex={2} marginLeft={"7%"}>
            <SearchIcon screen="HomeSearchScreen"></SearchIcon>
          </Box>
          <Box flex={3} justifyContent={"center"} alignItems={"center"}>
            <Heading size="xl" color="white">Home</Heading>
          </Box>
   
          <Box flex={1} justifyContent="center" flexDirection="row" alignItems="flex-start">
            <Fontisto name="bell" size={26} color="white" />
            <Center bg={"red.600"} w={4} h={4} rounded={"full"} marginLeft={-2}><Text color="white" fontSize={10}>3</Text></Center>
            
          </Box>
          <Box flex={1} marginRight={"7%"} >
          <TouchableOpacity onPress={() => navigation.navigate("MyProfileScreen")}>
            <Avatar bg="pink.600" alignSelf="center" size={55} source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }}>
            </Avatar>
            </TouchableOpacity>
          </Box>                                
        </HStack>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} width={"100%"}>
          <Stack  direction="row" mb="3%"  space={3} marginX={5}>
            {jsonData.data.map((item) =>(
              <Center key={item.id}  size="20">
                <HomeProfiles name={item.name.split(' ')[0]} avatarName={item.name.charAt(0)}/>
              </Center>
            ))}
          </Stack>
        </ScrollView>
        <ScrollView nestedScrollEnabled={true} width={"100%"}>
          <View overflow={"hidden"} borderTopRadius={50} bg="white">
            <Stack mt="5" direction="column"  width={"100%"}>
              {jsonData.data.map((item) => (
                <Center key={item.id} width={"100%"} marginTop={5} marginLeft={"7%"}>
                  <ChatList
                    id = {item.id}
                    name={item.name}
                    avatarName={item.name.charAt(0)}
                    message={item.message}
                    time={item.time}
                    badge={item.badge}
                    onRemove={handleRemove}
                    onEdit={handleEdit} 
                  />
                </Center>
              ))}
              <Center width={"100%"} bg={"white"} height={150}></Center>
            </Stack>
          </View>
        </ScrollView>
      </VStack>
      <Stack width={"100%"} bg={"white"} height={"100%"}></Stack>
      </>
  );
};

export default HomeScreen;
