import React, { useState } from "react";
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
} from "native-base";
import { TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const NewCustomerScreen = ({ navigation }) => {
  const previous = useNavigation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedBirthDay, setSelectedBirthDay] = useState(new Date());
  const [birthDayPickerVisible, setBirthDayPickerVisible] = useState(false);
  const [locationId, setLocationId] = useState("")
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [segment, setSegment] = useState("");
  // const [street, setStreet] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");
  // const [country, setCountry] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    segment: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

console.log(formData);
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

  const showBirthDayPicker = () => {
    setBirthDayPickerVisible(true);
  };

  const hideBirthDayPicker = () => {
    setBirthDayPickerVisible(false);
  };

  const handleBirthConfirm = (date) => {
    setSelectedBirthDay(date);
    hideBirthDayPicker();
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
      <DateTimePickerModal
        date={selectedBirthDay}
        isVisible={birthDayPickerVisible}
        mode="date"
        onConfirm={handleBirthConfirm}
        onCancel={hideBirthDayPicker}
      />
      <HStack marginTop={"2%"}>
        <Flex flex={0.1} alignItems={"flex-end"} justifyContent={"center"}>
          <TouchableOpacity onPress={handleButtonPress}>
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
        </Flex>
        <Flex flex={0.8} justifyContent={"center"} alignItems={"center"}>
          <Text bold fontSize={20} color={"white"}>
            New Customer
          </Text>
        </Flex>
        <Flex flex={0.1}></Flex>
      </HStack>
      <ScrollView style={{ width: "100%" }}>
        <Stack
          w="100%"
          h="100%"
          bg="white"
          rounded="md"
          borderTopRadius={50}
          marginTop={"3%"}
        >
          <VStack alignItems="center" space={5} w="100%" h="100%">
            <Center
              w="140"
              h="140"
              bg="gray.200"
              rounded="full"
              shadow={3}
              zIndex={999}
              marginTop="10%"
            />
            <Flex alignItems="center" direction="row" width={"90%"}>
              <Box flex={1}>
                <Input
                  size="lg"
                  bg="gray.100"
                  placeholder="First Name"
                  rounded={"full"}
                  value={formData.firstName}
          onChangeText={(value) => handleChange('firstName', value)}
                />
              </Box>
              <Box flex={0.1}></Box>
              <Box flex={1}>
                <Input
                  size="lg"
                  bg="gray.100"
                  placeholder="Last Name"
                  rounded={"full"}
                  value={formData.lastName}
                  onChangeText={(value) => handleChange('lastName', value)}
                />
              </Box>
            </Flex>
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
              <Input
                size="lg"
                bg="gray.100"
                placeholder="Email"
                rounded={"full"}
                value={formData.email}
                  onChangeText={(value) => handleChange('email', value)}
              />
            </Center>
            <Center width={"90%"}>
              <Input
                size="lg"
                bg="gray.100"
                placeholder="Phone number"
                rounded={"full"}
                value={formData.phone}
                onChangeText={(value) => handleChange('phone', value)}
              />
            </Center>
            <Center width={"90%"}>

              <Input
                size="lg"
                bg="gray.100"
                placeholder="Birthday"
                value={
                  selectedBirthDay
                    ? selectedBirthDay.toLocaleDateString()
                    : "No date selected"
                }
                rounded={"full"}
                InputRightElement={
                  <Pressable onPress={showBirthDayPicker}>
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
              <Input
                size="lg"
                bg="gray.100"
                placeholder="Segment"
                rounded={"full"}
                value={formData.segment}
                onChangeText={(value) => handleChange('segment', value)}
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
              >
                <Select.Item label="Location ID-1" value="ID-1" />
                <Select.Item label="Location ID-2" value="ID-2" />
                <Select.Item label="Location ID-3" value="ID-3" />
                <Select.Item label="Location ID-4" value="ID-4" />
                <Select.Item label="Location ID-5" value="ID-5" />
              </Select>
            </Center>
            <Center width={"90%"}>
              <Input
                size="lg"
                bg="gray.100"
                placeholder="Street"
                rounded={"full"}
                value={formData.street}
                onChangeText={(value) => handleChange('street', value)}
              />
            </Center>
            <Center width={"90%"}>
              <Input
                size="lg"
                bg="gray.100"
                placeholder="City"
                rounded={"full"}
                value={formData.city}
                onChangeText={(value) => handleChange('city', value)}
              />
            </Center>
            <Flex alignItems="center" direction="row" width={"90%"}>
              <Box flex={1}>
                <Input
                  size="lg"
                  bg="gray.100"
                  placeholder="State"
                  rounded={"full"}
                  value={formData.state}
                  onChangeText={(value) => handleChange('state', value)}
                />
              </Box>
              <Box flex={0.1}></Box>
              <Box flex={1}>
                <Input
                  size="lg"
                  bg="gray.100"
                  placeholder="Zip"
                  rounded={"full"}
                  value={formData.zip}
                  onChangeText={(value) => handleChange('zip', value)}
                />
              </Box>
            </Flex>
            <Center width={"90%"}>
              <Input
                size="lg"
                bg="gray.100"
                placeholder="Country"
                rounded={"full"}
                value={formData.country}
                onChangeText={(value) => handleChange('country', value)}
              />
            </Center>
            <Center width={"90%"}>
              <Button
                rounded={25}
                marginBottom="10"
                size="lg"
                bg="rgba(93, 176, 117, 1)"
                width={"100%"}
              >
                Save
              </Button>
            </Center>
          </VStack>
        </Stack>
      </ScrollView>
    </VStack>
  );
};

export default NewCustomerScreen;
