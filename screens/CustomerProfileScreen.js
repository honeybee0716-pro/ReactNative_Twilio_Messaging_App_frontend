import React, {useState} from "react";
import {VStack, Text, Box, Stack, Center, HStack,Image, Flex} from "native-base";
import { TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const CustomerProfileScreen = ({ navigation }) => {

  const previous = useNavigation();

  const handleButtonPress = () => {
    previous.goBack();
  };
  
  return (
    <VStack space={7} alignItems="center" w="100%" h="100%" bg="rgba(93, 176, 117, 1)">
      <HStack marginTop={"10%"}>
      <Flex flex={0.1} alignItems={"flex-end"} justifyContent={"center"}>
      <TouchableOpacity onPress={handleButtonPress}>
      <AntDesign name="arrowleft" size={20} color="white"/>
      </TouchableOpacity>
      </Flex>
      <Flex flex={0.8} justifyContent={"center"} alignItems={"center"}><Text bold fontSize={20} color={"white"}>Profile</Text></Flex>
      <Flex flex={0.1}></Flex>
      </HStack>
      <Stack w="100%" h="100%" bg="white" rounded="md" borderTopRadius={50} marginTop={"5%"}>
        <VStack alignItems="center" space={"2%"}  w="100%" h="100%">
            <Center w="140" h="140" bg="gray.200" rounded="full" shadow={3} zIndex={999} marginTop="10%"/>
            <HStack width="90%">
                <VStack>
                    <HStack alignItems="center" justifyContent="start" width="100%">
                        <Box><Text fontWeight="bold" fontSize={28}>Jane</Text></Box>
                        <Box marginLeft="5" width="75%"><MaterialIcons name="verified" size={24} color="green" /></Box>
                        <Box><Image size="6"  source={require("../assets/images/flag.png")} alt="Alternate Text"/></Box>
                        
                    </HStack>
                    <HStack alignItems="center" justifyContent="start">
                        <Box><Ionicons name="location-outline" size={24} color="black"/></Box>
                        <Box><Text fontSize={13}>New York</Text></Box>
                    </HStack>
                </VStack>
            </HStack>
            <Center height={0.5} background={"gray.200"} width={"90%"}/>
            <HStack width="90%" alignItems="center" justifyContent="space-between">
                <Box><Text fontSize={15}>Birthday</Text></Box>
                <Box><Text fontSize={13}>1995-02-09</Text></Box>
            </HStack>
            <Center height={0.5} background={"gray.200"} width={"90%"}/>
            <VStack width="90%" alignItems="start" justifyContent="start">
                <Box><Text fontSize={15}>Phone Number</Text></Box>
                <Box><Text fontSize={13}>+1 (605) 655 277</Text></Box>
            </VStack>
            <Center height={0.5} background={"gray.200"} width={"90%"}/>
            <VStack width="90%" alignItems="start" justifyContent="start">
                <Box><Text fontSize={15}>Email</Text></Box>
                <Box><Text fontSize={13}>Mind1995Star@gmail.com</Text></Box>
            </VStack>
            <Center height={0.5} background={"gray.200"} width={"90%"}/>
            <Center height={1.5} background="black" rounded={10} width={"30%"} marginTop="50%"/>
        </VStack>
      </Stack>

    </VStack>
    
  );
};

export default CustomerProfileScreen;
