import React, { useState } from "react";
import { VStack, Text, Box, Center, HStack, Flex } from "native-base";
import { Fontisto, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ContactScreen = ({ navigation }) => {
  return (
    <VStack
      space={7}
      alignItems="center"
      w="100%"
      h="100%"
      bg="rgba(93, 176, 117, 1)"
    >
      <Center w="80%" h="100" alignItems="start" marginTop={5}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyProfileScreen")}
        >
          <HStack alignItems={"center"}>
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
            <Text fontSize={18} color="white">
              {" "}
              My Profile
            </Text>
          </HStack>
        </TouchableOpacity>
      </Center>
      <Center w="100%" h="100%" bg="white" rounded="md" borderTopRadius={50}>
        <VStack
          space={5}
          alignItems="flex-start"
          marginLeft="10%"
          w="100%"
          h="100%"
          marginTop={50}
        >
          <Center>
            <HStack space={5} alignItems={"center"}>
              <Text fontSize={30} fontWeight="bold">
                Contact Us
              </Text>
            </HStack>
          </Center>
          <Center>
            <HStack space={5} alignItems={"center"}>
              <Text fontSize={15}> Contact</Text>
            </HStack>
          </Center>
          
          <Center>
            <Flex
              space={5}
              alignItems={"center"}
              flexDirection={"row"}
              width={"90%"}
            >
              <Box flex={1} flexDirection={"row"}>
              <Fontisto name="email" size={24} color="black" />
                <Text marginLeft={5} fontSize={15}>Email</Text>
              </Box>

              <Box flex={1}>
                <Text fontSize={15}>Info@youremailid.com</Text>
              </Box>
            </Flex>
          </Center>
          <Center>
            <Flex
              space={5}
              alignItems={"center"}
              flexDirection={"row"}
              width={"90%"}
            >
              <Box flex={1} flexDirection={"row"}>
                <SimpleLineIcons name="phone" size={24} color="black" />
                <Text marginLeft={5} fontSize={15}>Phone Number</Text>
              </Box>

              <Box flex={1}>
                <Text fontSize={15}>+1 (605) 655 277</Text>
              </Box>
            </Flex>
          </Center>
        </VStack>
      </Center>
    </VStack>
  );
};

export default ContactScreen;
