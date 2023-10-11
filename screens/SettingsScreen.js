import React, {useState} from "react";
import { Switch } from "react-native";
import {VStack, Text, Box, Center, HStack, ScrollView } from "native-base";
import { AntDesign, SimpleLineIcons, MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";


const SettingsScreen = ({ navigation }) => {

  const [switchAValue, setSwitchAValue] = useState(false);
  const [switchBValue, setSwitchBValue] = useState(false);
  const toggleSwitchA = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchAValue(value);
    //state changes according to switch
    //which will result in re-render the text
  };
  const toggleSwitchB = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchBValue(value);
    //state changes according to switch
    //which will result in re-render the text
  };

  return (
    <VStack space={7} alignItems="center" w="100%" h="100%" bg="rgba(93, 176, 117, 1)">
      <Center w="80%" h="100" alignItems="start" marginTop={5}>
      <TouchableOpacity
            onPress={() => navigation.navigate("MyProfileScreen")}
          >
        <HStack alignItems={"center"}>

        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        <Text fontSize={18} color="white"> My Profile</Text>

        </HStack>
        </TouchableOpacity>
      
      </Center>
      <Center w="100%" h="100%" bg="white" rounded="md" borderTopRadius={50}>
        <VStack space={5} alignItems="flex-start" marginLeft="10%"  w="100%" h="100%" marginTop={50}>
          <Center>
            <HStack space={5} alignItems={"center"}>
            <Text fontSize={30} fontWeight="bold"> Settings</Text>
            </HStack>
          </Center>
           <Center>
            <HStack space={5} alignItems={"center"}>
            <Text fontSize={15}> General</Text>
            </HStack>
          </Center>
          <Center>
            <HStack space={5} alignItems={"center"}>
            <AntDesign name="message1" size={24} color="black" />
            <Text fontSize={15}> Message Notifications</Text>
            <Box width={150}></Box>
            <Switch
          onValueChange={toggleSwitchA}
          value={switchAValue}
        />
            </HStack>
          </Center>

          <Center>
            <HStack space={5} alignItems={"center"}>
            <SimpleLineIcons name="user" size={24} color="black" />
            <Text fontSize={15}> No-reply Message Setting</Text>
            <Box width={129}></Box>
            <Switch
          onValueChange={toggleSwitchB}
          value={switchBValue}
        />
            </HStack>
          </Center>


        </VStack>
      </Center>
    </VStack>

  );
};

export default SettingsScreen;
