import React, { useState, useEffect } from "react";
import ChatRoomProfile from "../components/ChatRoomProfile";
import {
  Flex,
  VStack,
  Text,
  Center,
  HStack,
  useToast,
  Spinner,
  Box,
} from "native-base";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { Entypo  } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/api";

const SMSRoomScreen = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params;
  const [customerData, setCustomerData] = useState([]);
  const [smsData, setSMSData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const toast = useToast();

  function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());

    return `${month}/${day}/${year}`;
  }

  const fetchCustomerData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    await axios
      .get(`${API_URL}/customer/${id}`)
      .then((response) => {
        setCustomerData(response.data.customer[0]);
        setLoading(false);
        console.log("===>SMS Customer_Data : ", response.data.customer[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchSMSData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    await axios
      .get(`${API_URL}/sms/${id}`)
      .then((response) => {
        setSMSData(response.data.sms);
        setLoading(false);
        console.log("===>SMS Message_Data : ", response.data.sms);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCustomerData();
    fetchSMSData();
  }, []);

  return (
    <VStack bg={"white"} height={"100%"} justifyContent={"center"}>
      <Flex height={"15%"} justifyContent={"flex-end"} marginLeft={"-18%"}>
        {customerData && Object.keys(customerData).length ? (
          <ChatRoomProfile
            name={customerData.firstName + " " + customerData.lastName}
            message={"Active now"}
            avatarName={
              customerData.firstName.charAt(0) + customerData.lastName.charAt(0)
            }
          />
        ) : isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Text>No data</Text>
        )}
      </Flex>
      <Flex height={"85%"} justifyContent={"start"} alignItems={"center"}>
        <VStack padding={5} marginTop={"10%"} space={"5"}width={"100%"}>
          <Center width={"100%"}>
            {smsData && smsData.length ? 
              smsData.map((item) => (
                <Center key={item._id} width={"100%"} bg="blueGray.200"  padding={5} rounded={50} marginBottom={5}>
                    <Flex><Text fontSize={18} fontWeight={"bold"}>{item.title}</Text></Flex>
                    <Flex><Text fontSize={16}>{item.message}</Text></Flex>
                    <Flex direction="row"><Text fontSize={16}>{item.send_time.slice(0, 10)}</Text>
                    <Entypo  name="check" size={18} color="green" /></Flex> 
                    
                                   
                </Center>
              ))
             : isLoading ? (
              <HStack space={2} justifyContent="center" alignItems="center">
                <Spinner color="rgba(93, 176, 117, 1)" size="lg" />
              </HStack>
            ) : (
              <HStack space={2} justifyContent="center" alignItems="center">
                <Text fontSize={20} fontWeight={"bold"}>
                  No message history
                </Text>
              </HStack>
            )}
          </Center>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default SMSRoomScreen;
