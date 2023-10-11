import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  ScrollView,
  View,
  VStack,
  HStack,
  Heading,
  Stack,
  Center,
  Box,
} from "native-base";
import CustomersContents from "../components/CustomersContents";
import SearchIcon from "../components/SearchIcon";
import AddIcon from "../components/AddIcon";

const CustomersScreen = ({ navigation }) => {

  const [jsonData, setJsonData] = useState({
    data: [
      {
        "id": 1,
        "image_url": "../assets/avatars/avatar1.jpg",
        "name": "John Doe",
        "message": "Hello, this is the first message.",
        "time":"2min ago",
        "country":"United State",
        "badge":3      },
      {
        "id": 2,
        "image_url": "../assets/avatars/avatar2.jpg",
        "name": "Jane Smith",
        "message": "Hey there! Here's the second message.",
        "time":"2min ago",
        "country":"United Kingdom",
        "badge":3      },
      {
        "id": 3,
        "image_url": "../assets/avatars/avatar3.jpg",
        "name": "Alex Johnson",
        "message": "Greetings from the third message!",
        "time":"2min ago",
        "country":"Spain",
        "badge":3      },
      {
        "id": 4,
        "image_url": "../assets/avatars/avatar4.jpg",
        "name": "Sarah Adams",
        "message": "Just wanted to say hi!",
        "time":"2min ago",
        "country":"Germany",
        "badge":3      },
      {
        "id": 5,
        "image_url": "../assets/avatars/avatar5.jpg",
        "name": "Michael Brown",
        "message": "Hope you're having a great day!",
        "time":"2min ago",
        "country":"Turkey",
        "badge":3      },
      {
        "id": 6,
        "image_url": "../assets/avatars/avatar6.jpg",
        "name": "Emily Davis",
        "message": "Sending you warm wishes!",
        "time":"2min ago",
        "country":"United State",
        "badge":3      },
      {
        "id": 7,
        "image_url": "../assets/avatars/avatar1.jpg",
        "name": "Robert Wilson",
        "message": "Wishing you a fantastic week ahead!",
        "time":"2min ago",
        "country":"Australia",
        "badge":3      },
      {
        "id": 8,
        "image_url": "../assets/avatars/avatar2.jpg",
        "name": "Olivia Lee",
        "message": "Thinking of you!",
        "time":"2min ago",
        "country":"Norway",
        "badge":3      },
      {
        "id": 9,
        "image_url": "../assets/avatars/avatar3.jpg",
        "name": "Daniel Clark",
        "message": "Have a wonderful day!",
        "time":"2min ago",
        "country":"Island",
        "badge":3      },
      {
        "id": 10,
        "image_url": "../assets/avatars/avatar4.jpg",
        "name": "Sophia Taylor",
        "message": "Sending positive vibes your way!",
        "time":"2min ago",
        "country":"France",
        "badge":3      },
      {
        "id": 11,
        "image_url": "../assets/avatars/avatar5.jpg",
        "name": "Matthew Hernandez",
        "message": "Keep up the great work!",
        "time":"2min ago",
        "country":"Poland",
        "badge":3      },
      {
        "id": 12,
        "image_url": "../assets/avatars/avatar6.jpg",
        "name": "Ava Martinez",
        "message": "You're doing amazing!",
        "time":"2min ago",
        "country":"Argentina",
        "badge":3      }
    ]
  });

  const handleRemove = (id) => {
    // Logic to remove the item with the given id from the JSON data
    const newData = jsonData.data.filter((item) => item.id !== id);
    setJsonData({ data: newData });
  };

  const handleEdit = (id) => {
    // Logic to edit the item with the given id in the JSON data
    // Implement your own logic here
  };


  return (<>
    <VStack
      space="2"
      mt="0"
      px="0"
      bg="rgba(93, 176, 117, 1)"
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        width={"100%"}
        justifyContent="center"
        alignItems="center"
        my={10}
      >
        <Box flex={0.1} justifyContent={"center"} alignItems={"center"}>
          <SearchIcon screen="CustomersSearchScreen"></SearchIcon>
        </Box>
        <Box flex={0.65} justifyContent={"center"} alignItems={"center"} >
          <Heading size="xl" color="white">
            Customers
          </Heading>
        </Box>

        {/* <Box
          flex={0.1}
          justifyContent="center"
          flexDirection="row"
          alignItems="flex-start"
        ></Box> */}
        <Box flex={0.1}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewCustomerScreen")}
          >
            <AddIcon />
          </TouchableOpacity>
        </Box>
      </HStack>
      <ScrollView nestedScrollEnabled={true} width={"100%"}>
        <View
          overflow={"hidden"}
          borderTopRadius={50}
          bg="white"
          height={"100%"}
        >
          <Stack mt="5" direction="column" width={"100%"}>
            {jsonData.data.map((item) => (
              <Center key={item.id} width={"100%"} marginTop={5}>
                <CustomersContents
                  id = {item.id}
                  name={item.name}
                  avatarName={item.name.charAt(0)}
                  country={item.country}
                  onRemove={handleRemove}
                  onEdit={handleEdit}
                />
              </Center>
            ))}
            <Center width={"100%"} bg={"white"} height={150}></Center>
          </Stack>
        </View>
      </ScrollView>
    </VStack>
    <Stack width={"100%"} bg={"white"} height={"100%"}></Stack>
    </>
  );
};

export default CustomersScreen;
