import React, { useState } from "react";
import { HStack, Avatar, Text, Box, Flex, Badge, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChatList = ({
  image,
  name,
  message,
  time,
  badge,
  avatarName,
  id,
  onRemove,
  onEdit,
}) => {
  const navigation = useNavigation();

  const [isLongClicked, setIsLongClicked] = useState(false);

  const handleLongClick = () => {
    setIsLongClicked(!isLongClicked);
  };

  const handleClick = () => {
    setIsLongClicked(false);
    navigation.navigate("ChatRoomScreen");
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleClick}
      onLongPress={handleLongClick}
    >
      <HStack justifyContent="center">
        {isLongClicked ? (
          <HStack bg="rgba(241, 246, 250, 1)" width={"110%"}>
            <Flex

              alignItems="start"
              direction="column"
              width={"40%"}
              h={70}

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
            <Flex

              alignItems="flex-end"
              direction="column"
              width={"20%"}
            >
              <Box flex={1} marginTop={3}>
                <Text fontSize="12">{time}</Text>
              </Box>
            </Flex>
            <Flex bg="rgba(241, 246, 250, 1)" width={5}></Flex>
            <Flex

              alignItems="center"
              direction="row"
              width={"20%"}
              justifyContent="center"
            >
              <Box flex={1}>
                <TouchableOpacity onPress={() => onEdit(id)}>
                  <Image
                    size={9}
                    borderRadius={100}
                    source={require("../assets/images/notification.png")}
                    alt="Alternate Text"
                  />
                </TouchableOpacity>
              </Box>
              <Box flex={1}>
                <TouchableOpacity onPress={() => onRemove(id)}>
                  <Image
                    size={9}
                    borderRadius={100}
                    source={require("../assets/images/trash.png")}
                    alt="Alternate Text"
                  />
                </TouchableOpacity>
              </Box>
            </Flex>
          </HStack>
        ) : (
          <HStack alignItems={"center"} width="100%">
            <Avatar bg="indigo.500" source={image} size="md">
              {avatarName}
              <Avatar.Badge bg="green.500" size="1/4" />
            </Avatar>
            <Flex
              alignItems="start"
              direction="column"
              marginLeft={5}
              width={"50%"}
            >
              <Box flex={1}>
                <Text bold fontSize="20">
                  {name}
                </Text>
              </Box>
              <Box flex={1} marginBottom={"1%"}>
                <Text fontSize="12">{message}</Text>
              </Box>
            </Flex>
            <Flex alignItems="flex-end" direction="column" width={"22%"}>
              <Box flex={1} marginTop={"4%"}>
                <Text fontSize="12">{time}</Text>
              </Box>
              <Box flex={1} marginTop={"3%"}>
                <Badge
                  bg="rgba(93, 176, 117, 1)"
                  rounded="full"
                  variant="solid"
                  _text={{
                    fontSize: 10,
                  }}
                >
                  {badge}
                </Badge>
              </Box>
            </Flex>
          </HStack>
        )}
      </HStack>
    </TouchableOpacity>
  );
};

export default ChatList;
