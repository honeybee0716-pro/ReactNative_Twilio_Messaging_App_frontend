import React, { useState, useEffect ,useContext} from "react";
import {ScrollView, View,VStack, HStack, Heading, Stack, Center, Box, Text,Spinner, Avatar} from "native-base";
import HomeProfiles from "../components/HomeProfiles";
import ChatList from "../components/ChatList";
import SearchIcon from "../components/SearchIcon";
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/api";
import StatusContext from "../context/StatusContext";

const HomeScreen = ({navigation}) => {

  const [customerData, setcustomerData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { status, setStatus } = useContext(StatusContext);

  const fetchData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    await axios.get(`${API_URL}/customer`).then((response) =>{
      console.log("===> HOME_SCREEN",response.data.customers);
      setcustomerData(response.data.customers);
      setLoading(false);
      return true
    }).catch(error =>{
      console.log(error);
    });
  }

  useEffect(() => {
    fetchData();
  }, [status]);

  const handleRemove = (id) => {
    // Logic to remove the item with the given id from the JSON data
    const newData = customerData.filter((item) => item._id !== id);
    setcustomerData(newData);
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
            <Avatar bg="pink.600" alignSelf="center" size={55} source={require('../assets/avatars/david.png')}>
            </Avatar>
            </TouchableOpacity>
          </Box>                                
        </HStack>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} width={"100%"}>
          <Stack  direction="row" mb="3%"  space={3} marginX={5}>
            {customerData && customerData.length && customerData.map((item) =>(
              <Center key={item._id}  size="20">
                <HomeProfiles id={item._id} name={item.firstName} avatarName={item.firstName.charAt(0)+item.lastName.charAt(0)}/>
              </Center>
            ))}
          </Stack>
        </ScrollView>
        <ScrollView nestedScrollEnabled={true} width={"100%"}>
          <View overflow={"hidden"} borderTopRadius={50} bg="white">
            <Stack mt="5" direction="column"  width={"100%"}>
              {customerData && customerData.length ? customerData.map((item) => (
                <Center key={item._id} width={"100%"} marginTop={5} marginLeft={"7%"}>
                  <ChatList
                    id = {item._id}
                    name={item.firstName + ' '+ item.lastName}
                    avatarName={item.firstName.charAt(0)+item.lastName.charAt(0)}
                    message={item.email}
                    // time="3 min ago"
                    // badge="2"
                    onRemove={handleRemove}
                    onEdit={handleEdit} 
                  />
                </Center>
              )) :  (isLoading ? <HStack space={2} justifyContent="center" alignItems="center">
              <Spinner color="rgba(93, 176, 117, 1)" size="lg" />    
  

            </HStack> : <HStack space={2} justifyContent="center" alignItems="center"><Text fontSize={20} color={"rgba(93, 176, 117, 1)"}>No data</Text></HStack>)}
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
