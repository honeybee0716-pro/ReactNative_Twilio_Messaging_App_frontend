import React, { useState } from "react";
import { HStack, Avatar, Text, Box, Flex, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import EditIcon from "./EditIcon";
import { useNavigation } from "@react-navigation/native";

const CustomersContents = ({
  image,
  name,
  country,
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
    if (isLongClicked == false) {
      navigation.navigate("CustomerProfileScreen", {id});
    }
    setIsLongClicked(false);
  };

  return (
    <TouchableOpacity
      onLongPress={handleLongClick}
      activeOpacity={1}
      onPress={handleClick}
    >
      <HStack justifyContent="center">
        {isLongClicked ? (
          <HStack>
            <Flex
              bg="rgba(241, 246, 250, 1)"
              alignItems="start"
              direction="column"
              width={"75%"}
              h={70}
            >
              <Box flex={1} marginTop={2} marginLeft={"5%"}>
                <Text bold fontSize="20">
                  {name}
                </Text>
              </Box>
              <Box flex={1} marginLeft={"5%"}>
                <Text fontSize="12">{country}</Text>
              </Box>
            </Flex>
            <Flex
              bg="rgba(241, 246, 250, 1)"
              alignItems="center"
              direction="row"
              width={"25%"}
              justifyContent="center"
              h={70}
            >
              <Box flex={1} marginRight={-5}>
                <TouchableOpacity onPress={() => onEdit(id)}>
                  <EditIcon></EditIcon>
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
          <HStack alignItems={"center"} width="100%" marginLeft={"23%"}>
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
              <Box flex={1} marginBottom={"2%"}>
                <Text fontSize="12">{country}</Text>
              </Box>
            </Flex>
          </HStack>
        )}
      </HStack>
    </TouchableOpacity>
  );
};

export default CustomersContents;
