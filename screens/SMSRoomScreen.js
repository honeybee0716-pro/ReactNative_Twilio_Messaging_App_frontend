import React, { useState, useEffect } from "react";
import ChatRoomProfile from "../components/ChatRoomProfile";
import {
  Flex,
  VStack,
  Text,
  Center,
  Button,
  useToast,
  Select,
  CheckIcon,
} from "native-base";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../config/api";


const SMSRoomScreen = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params;
  const [customerData, setCustomerData] = useState();
  const [messageData, setMessageData] = useState([]);
  const [holidayData, setHolidayData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [holiday, setHoliday] = useState("");
  const [phone, setPhone] = useState("");

  const toast = useToast();

  function formatDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear());
  
    return `${month}/${day}/${year}`;
  }

  const scheduleToast = (msg) =>
    toast.show({
      title: msg,
      placement: "bottom",
      duration: 5000,
    });


  const fetchCustomerData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    await axios
      .get(`${API_URL}/customer/${id}`)
      .then((response) => {
        setCustomerData(response.data.customer[0]);
        setPhone(response.data.customer[0].phone)
        setLoading(false);
        // console.log('===>SMS Customer_Data : ', response.data.customer[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchHolidayData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    await axios
      .get(`${API_URL}/holiday`)
      .then((response) => {
        let temp =[{
          _id: 'current_time',
          title: 'Now',
          description: 'soon',
          date: formatDate(new Date()),
          location_id: 'all'
        }]
        response.data.holidays.map(item => {
          temp.push(item);
        })
        setHolidayData(temp);
        setLoading(false);

        // console.log('==>SMS Holiday_Data : ', response.data.holidays);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchMessageData = async () => {
    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    await axios
      .get(`${API_URL}/message`)
      .then((response) => {
        setMessageData(response.data.message);
        setLoading(false);
        // console.log('===>SMS Message_Data : ', response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCustomerData();
    fetchHolidayData();
    fetchMessageData();
  }, []);

  const handleSubmit = async () => {
    if(phone && message && holiday){
    console.log("===> PHONE: ",phone);
    console.log("===> MESSAGE: ",message);

    const parts = holiday.split("/"); // Split the date string into parts
  
    // Create a new Date object using the parsed parts
    const dateObject = new Date(parts[2], parts[0] - 1, parts[1]);
    
    // Format the date in the desired format
    const scheduleTime = dateObject.toISOString();
    
    console.log("===> SCHEDULED_TIME: ",scheduleTime);

    const accessToken = await AsyncStorage.getItem("Authorization");
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    axios
    .post(`${API_URL}/sms`, {
      customer_id: customerData._id,
      customer_phone_number: phone,
      message_string: message,
      time: scheduleTime,
    })
    .then(async (response) => { 
        console.log('===> SMS', response.data);
        scheduleToast( response.data)
      }
    )
    .catch((error) => {
      console.log('Error: ', error);
      scheduleToast(error);
    });}
  };
  return (
    <VStack bg={"white"} height={"100%"} justifyContent={"center"}>

      <Flex height={"15%"} justifyContent={"flex-end"} marginLeft={"-18%"}>
        {customerData ? (
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
      <Flex
        height={"85%"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <VStack padding={5}  marginTop={"10%"} space={"5"}>
          <Center width={"100%"}>
          <Select
                selectedValue={message}
                minWidth="100%"
                bg="gray.100"
                rounded="full"
                fontSize={16}
                accessibilityLabel="Message List"
                placeholder="Message List"
                _selectedItem={{
                  bg: "rgba(93, 176, 117, 1)",
                  endIcon: <CheckIcon />,
                }}
                mt={1}
                onValueChange={(itemValue) => setMessage(itemValue)}
              >
                { messageData && messageData.length > 0 ? messageData.map((item) => {
                  return <Select.Item key={item._id} label={item.title + ', ' + item.message} value={item.message} />
                }) : <Select.Item label="No Data" value="no-data" />}
              </Select>
          </Center>
          <Center>
          <Select
                selectedValue={holiday}
                minWidth="100%"
                bg="gray.100"
                rounded="full"
                fontSize={16}
                accessibilityLabel="Holiday List"
                placeholder="Holiday List"
                _selectedItem={{
                  bg: "rgba(93, 176, 117, 1)",
                  endIcon: <CheckIcon />,
                }}
                mt={1}
                onValueChange={(itemValue) => setHoliday(itemValue)}
              >
                { customerData && holidayData && holidayData.length > 0 ? holidayData.filter(item => item.location_id == customerData.location_id || item.location_id == "all").map((item) => {
                  return <Select.Item key={item._id} label={item.title} value={item.date} />
                }) : <Select.Item label="No Data" value="no-data" />}
              </Select>
          </Center>
          <Center>
            <Button borderRadius={20} bg="rgba(93, 176, 117, 1)" onPress={handleSubmit}>
              Send Message
            </Button>
          </Center>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default SMSRoomScreen;
