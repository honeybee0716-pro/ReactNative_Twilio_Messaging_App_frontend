import React, { useState, useEffect,useContext } from "react";
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
  Spinner,
  Flex,
  Modal,
  Button,
} from "native-base";
import CustomersContents from "../components/CustomersContents";
import SearchIcon from "../components/SearchIcon";
import AddHoliday from "../components/AddHoliday";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/api";
import { FontAwesome } from "@expo/vector-icons";
import StatusContext from "../context/StatusContext";

const HolidayScreen = ({ navigation }) => {
  const [holidayData, setHolidayData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [active, setactive] = useState(false);
  const { status, setStatus } = useContext(StatusContext);

  const fetchData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    await axios
      .get(`${API_URL}/holiday`)
      .then((response) => {
        setHolidayData(response.data.holidays);
        setLoading(false);
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [status]);

  const handleRemove = (id) => {
    // Logic to remove the item with the given id from the JSON data
    const newData = holidayData.filter((item) => item._id !== id);
    setHolidayData(newData);
  };

  const handleEdit = (id) => {
    // Logic to edit the item with the given id in the JSON data
    // Implement your own logic here
  };

  return (
    <> 
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
          <Box flex={0.1} justifyContent={"center"} alignItems={"center"}></Box>
          <Box flex={0.65} justifyContent={"center"} alignItems={"center"}>
            <Heading size="xl" color="white">
              Holidays
            </Heading>
          </Box>

          <Box flex={0.1}>
            <TouchableOpacity
              onPress={() => navigation.navigate("NewHolidayScreen")}
            >
              <AddHoliday />
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
              {holidayData && holidayData.length ? (
                holidayData.map((item) => (
                  <Flex
                    direction="column"
                    paddingX={5}
                    key={item._id}
                    width={"100%"}
                    marginTop={5}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setactive(!active);
                      }}
                    >
                      <Flex
                        paddingX={5}
                        paddingY={5}
                        bg="blueGray.300"
                        direction="row"
                        justifyContent={"space-between"}
                        alignItems={"flex-end"}
                        rounded={10}
                      >
                        <Flex
                          flex={1}
                        >
                          <Text fontSize={18}>{item.title}</Text>
                          <Text fontSize={14}>{item.description}</Text>
                        </Flex>
                        <Text fontSize={14}>{item.date.slice(0, 10)}</Text>
                      </Flex>
                    </TouchableOpacity>
                  </Flex>
                ))
              ) : isLoading ? (
                <HStack space={2} justifyContent="center" alignItems="center">
                  <Spinner color="rgba(93, 176, 117, 1)" size="lg" />
                </HStack>
              ) : (
                <HStack space={2} justifyContent="center" alignItems="center">
                  <Text fontSize={20} color={"rgba(93, 176, 117, 1)"}>
                    No data
                  </Text>
                </HStack>
              )}
              <Center width={"100%"} bg={"white"} height={150}></Center>
            </Stack>
          </View>
        </ScrollView>
      </VStack>
      <Stack width={"100%"} bg={"white"} height={"100%"}></Stack>
    </>
  );
};

export default HolidayScreen;
