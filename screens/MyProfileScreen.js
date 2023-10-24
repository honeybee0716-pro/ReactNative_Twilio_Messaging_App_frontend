import React, { useState } from "react";
import {
  Button,
  Avatar,
  VStack,
  Text,
  Box,
  Flex,
  Center,
  HStack,
  ScrollView,
  } from "native-base";
import { TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DeleteAccount from "../components/DeleteAccount";


const MyProfileScreen = ({ navigation }) => {
  const previous = useNavigation();

  const handleButtonPress = () => {
    previous.goBack();
  };

  return (
    <VStack
      space={"2%"}
      alignItems="center"
      w="100%"
      h="100%"
      bg="rgba(93, 176, 117, 1)"
    >
      <Center w="80%" h="15%" alignItems="start">
        <TouchableOpacity onPress={handleButtonPress}>
          <AntDesign name="arrowleft" size={20} color="white" />
        </TouchableOpacity>
      </Center>
      <Center
        w="140"
        h="140"
        bg="white"
        rounded="full"
        shadow={3}
        marginBottom={"-16%"}
        zIndex={999}
      >
        <Avatar
          bg="pink.600"
          alignSelf="center"
          size={125}
          source={require('../assets/avatars/david.png')}
        ></Avatar>
      </Center>
      <Center w="100%" h="100%" bg="white" rounded="md" borderTopRadius={50}>
        <VStack
          space={5}
          alignItems="flex-start"
          marginLeft="10%"
          w="100%"
          h="100%"
          marginTop={"50%"}
        >
          <Center>
            <HStack space={5} alignItems={"center"}>
              <Image
                source={require("../assets/images/profile.png")}
                alt="Alternate Text"
              />
              <Text fontSize={15}> Account Detail</Text>
            </HStack>
          </Center>
          <Center height={0.5} background={"gray.200"} width={"90%"} />
          <Center>
            <TouchableOpacity
              onPress={() => navigation.navigate("SettingsScreen")}
            >
              <HStack space={5} alignItems={"center"}>
                <Image
                  source={require("../assets/images/setting.png")}
                  alt="Alternate Text"
                />
                <Text fontSize={15}> Settings</Text>
              </HStack>
            </TouchableOpacity>
          </Center>
          <Center height={0.5} background={"gray.200"} width={"90%"} />
          <Center>
            <TouchableOpacity
              onPress={() => navigation.navigate("ContactScreen")}
            >
              <HStack space={5} alignItems={"center"}>
                <Image
                  source={require("../assets/images/contact.png")}
                  alt="Alternate Text"
                />
                <Text fontSize={15}> Contact Us</Text>
              </HStack>
            </TouchableOpacity>
          </Center>
          <Center height={0.5} background={"gray.200"} width={"90%"} />

          <Button
            rounded={5}
            marginTop="40%"
            width={"90%"}
            bg="rgba(93, 176, 117, 1)"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text fontSize={17} color={"white"}>
              Logout
            </Text>
          </Button>
          <Box width={"90%"} alignItems="center">
            <DeleteAccount></DeleteAccount>
          </Box>
        </VStack>
      </Center>
    </VStack>

  );
};

export default MyProfileScreen;
