import React from "react";
import { VStack, Center, Avatar, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeProfiles = ({ image, name, avatarName, id}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("SMSRoomScreen", {id});
  };

  return (<TouchableOpacity onPress={handleClick}>
    <VStack>
      <Center bg="yellow.200" height={55} width={55} rounded={55}>
        <Avatar bg="indigo.500" size="md" source={image}>
          {avatarName}
        </Avatar>
      </Center>
      <Center height={"25%"} width={55}>
        <Text fontSize={12} color="white">{name}</Text>
      </Center>
    </VStack>
    </TouchableOpacity>
  );
};

export default HomeProfiles;
