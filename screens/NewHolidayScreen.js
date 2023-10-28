import React, { useState, useEffect,useContext } from "react";
import {
  Button,
  Input,
  VStack,
  Select,
  Box,
  Stack,
  Center,
  Icon,
  Pressable,
  Flex,
  CheckIcon,
  HStack,
  Text,
  useToast
} from "native-base";
import { TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/api";
import StatusContext from "../context/StatusContext";

const NewHolidayScreen = ({ navigation }) => {
  const previous = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const toast = useToast();
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [locationId, setLocationId] =useState([])
  const [locationIdData, setLocationIdData] =useState([])
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const { status, setStatus } = useContext(StatusContext);
  const toggleStatus = () => {
    setStatus(!status);
  };
  const fetchLocationData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    await axios.get(`${API_URL}/location`).then((response) =>{
      console.log("===> LOCATION",response.data.locations);
      setLocationIdData(response.data.locations);
      return true
    }).catch(error =>{
      console.log(error);
    });
  }

  useEffect(() => {
    fetchLocationData();
  }, []);

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

const holidayDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()).toISOString();
  const handleButtonPress = () => {
    previous.goBack();
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleSuccess = (msg) =>
  toast.show({
    title: `The holiday has been created successfully.`,
    placement : "bottom"
  });

  const handleAxiosError = () =>
  toast.show({
    title: "Your credentials are incorrect or a request error occurred.! ",
    placement : "bottom"
  });

  const handleError = () =>
  toast.show({
    title: "Server is not responding",
    placement : "bottom"
  });
  const handleSubmit = async () => {
    axios
    .post(`${API_URL}/holiday`, {
      location_id: locationId,
      title: formData.title,
      description: formData.description,
      date : holidayDate,
    })
    .then(async (response) => {
      console.log('===> NEW HOLIDAY', response.data.status);
      const { status} = response.data;
      if (status) {
        handleSuccess();
        toggleStatus();
        setFormData({
          title:'',
          description:''
        });
        setTimeout(() => {
          navigation.navigate("Footer");
        }, 1000);
      } else{
        handleAxiosError();
      }
    }).catch((error) => {
      console.log('Error: ', error);
      handleError();
    });
  };

  return (
    <VStack
      space={7}
      alignItems="center"
      w="100%"
      h="100%"
      bg="rgba(93, 176, 117, 1)"
    >
      <DateTimePickerModal
        date={selectedDate}
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <HStack marginTop={"2%"}>
        <Flex flex={0.1} alignItems={"flex-end"} justifyContent={"center"}>
          <TouchableOpacity onPress={handleButtonPress}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
        </Flex>
        <Flex flex={0.8} justifyContent={"center"} alignItems={"center"}>
          <Text bold fontSize={20} color={"white"}>
            New Holiday
          </Text>
        </Flex>
        <Flex flex={0.1}></Flex>
      </HStack>

        <Stack
          w="100%"
          h="100%"
          bg="white"
          rounded="md"
          borderTopRadius={50}
          marginTop={"3%"}
        >
          <VStack alignItems="center" space={5} w="100%" h="100%" marginTop={20}>
          <Center width={"90%"}>
              <Input
                size="lg"
                bg="gray.100"
                placeholder="Title"
                rounded={"full"}
                value={formData.title}
                  onChangeText={(value) => handleChange('title', value)}
              />
            </Center>
            <Center width={"90%"}>
              <Input
                size="lg"
                bg="gray.100"
                placeholder="Description"
                rounded={"full"}
                value={formData.description}
                onChangeText={(value) => handleChange('description', value)}
              />
            </Center>
            <Center width={"90%"}>
              <Input
                size="lg"
                bg="gray.100"
                value={
                  selectedDate
                    ? selectedDate.toLocaleDateString()
                    : "No date selected"
                }
                rounded={"full"}
                InputRightElement={
                  <Pressable onPress={showDatePicker}>
                    <Icon
                      as={<Feather name="calendar" size={24} color="black" />}
                      size={6}
                      mr="3"
                      color="rgba(89, 95, 103, 1)"
                    />
                  </Pressable>
                }
              />
            </Center>
            <Center width={"90%"}>
              <Select
                selectedValue={locationId}
                minWidth="100%"
                bg="gray.100"
                rounded="full"
                fontSize={16}
                accessibilityLabel="Location ID"
                placeholder="Location ID"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon />,
                }}
                mt={1}
                onValueChange={(itemValue) => setLocationId(itemValue)}
              > {locationIdData && locationIdData.length && locationIdData.map((item)=>(
                  <Select.Item key={item._id} label={item.address+', '+item.city+', '+item.state} value={item._id} />
              ))}
                

              </Select>
            </Center>
            <Center width={"90%"}>
              <Button
                rounded={25}
                marginTop="80%"
                size="lg"
                bg="rgba(93, 176, 117, 1)"
                width={"100%"}
                onPress={handleSubmit}
              >
                Save
              </Button>
            </Center>
          </VStack>

        </Stack>
    </VStack>
  );
};

export default NewHolidayScreen;
