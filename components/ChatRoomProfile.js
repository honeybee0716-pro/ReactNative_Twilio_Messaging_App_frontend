import React, { useState } from "react";
import { HStack, Avatar, Text, Box, Flex, Center, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const ChatRoomProfile = ({ image, name, message, time, badge }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.goBack();
  };

  return (
      <HStack justifyContent="center">
        <Box justifyContent={"center"} width={10}>
        <TouchableOpacity onPress={handleClick}>
          <AntDesign name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
        </Box>

        <Avatar bg="amber.500" source={image} size="lg">
          <Avatar.Badge bg="green.500" size="1/4" />
        </Avatar>
        <Flex
          alignItems="start"
          direction="column"
          marginLeft={5}
          width={"45%"}
        >
          <Box flex={1} marginTop={2}>
            <Text bold fontSize="20">
              {name}
            </Text>
          </Box>
          <Box flex={1}>
            <Text fontSize="12">{message}</Text>
          </Box>
        </Flex>
      </HStack>
  );
};

export default ChatRoomProfile;
