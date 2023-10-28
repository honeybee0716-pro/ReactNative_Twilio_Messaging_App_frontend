import React, { useState, useEffect ,useContext} from "react";
import { TouchableOpacity } from "react-native";
import {
  ScrollView,
  View,
  VStack,
  HStack,
  Heading,
  Stack,
  Center,
  Box,
  Text,
  Spinner
} from "native-base";
import CustomersContents from "../components/CustomersContents";
import SearchIcon from "../components/SearchIcon";
import AddCustomer from "../components/AddCustomer";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/api";
import StatusContext from "../context/StatusContext";

const CustomersScreen = ({ navigation }) => {

  const [customerData, setCustomerData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { status, setStatus } = useContext(StatusContext);

  const fetchData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    await axios.get(`${API_URL}/customer`).then((response) =>{
      console.log("===> CUSTOMER_SCREEN",response.data.customers);
      setCustomerData(response.data.customers);
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
    setCustomerData(newData);
  };

  const handleEdit = (id) => {
    // Logic to edit the item with the given id in the JSON data
    // Implement your own logic here
  };


  return (<>
    <VStack
      space="2"
      mt="0"
      px="0"
      bg="rgba(93, 176, 117, 1)"
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        width={"100%"}
        justifyContent="center"
        alignItems="center"
        my={10}
      >
        <Box flex={0.1} justifyContent={"center"} alignItems={"center"}>
          <SearchIcon screen="CustomersSearchScreen"></SearchIcon>
        </Box>
        <Box flex={0.65} justifyContent={"center"} alignItems={"center"} >
          <Heading size="xl" color="white">
            Customers
          </Heading>
        </Box>

        <Box flex={0.1}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewCustomerScreen")}
          >
            <AddCustomer />
          </TouchableOpacity>
        </Box>
      </HStack>
      <ScrollView nestedScrollEnabled={true} width={"100%"}>
        <View
          overflow={"hidden"}
          borderTopRadius={50}
          bg="white"
          height={"100%"}
        >
          <Stack mt="5" direction="column" width={"100%"}>
            {customerData && customerData.length ? customerData.map((item) => (
              <Center key={item._id} width={"100%"} marginTop={5}>
                <CustomersContents
                  id = {item._id}
                  name={item.firstName + ' '+ item.lastName}
                  avatarName={item.firstName.charAt(0)+item.lastName.charAt(0)}
                  country={item.location[0].country}
                  onRemove={handleRemove}
                  onEdit={handleEdit}
                />
              </Center>
            )) : (isLoading ? <HStack space={2} justifyContent="center" alignItems="center">
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

export default CustomersScreen;
