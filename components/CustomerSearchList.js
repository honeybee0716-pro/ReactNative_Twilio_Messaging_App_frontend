// List.js
import React from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { HStack, Avatar, Flex, Box, Text, Badge } from "native-base";
// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, avatarName, country, id, image }) => (
  <View style={styles.item}>
    <HStack alignItems={"center"} width="100%">
      <Avatar bg="indigo.500" source={image} size="md">
        {avatarName}
        <Avatar.Badge bg="green.500" size="1/4" />
      </Avatar>
      <Flex alignItems="start" direction="column" marginLeft={5} width={"50%"}>
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
  </View>
);

//The filter
const CustomerSearchList = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    //When there is no input, show all
    if (searchPhrase === "") {
      return (
        <Item
          name={item.firstName + ' '+ item.lastName}
          id={item._id}
          avatarName={item.firstName.charAt(0)+item.lastName.charAt(0)}
          country={item.location[0].country}
        />
      );
    }
    // filter of the name
    if (
      item.firstName
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
        name={item.firstName + ' '+ item.lastName}
        id={item._id}
        avatarName={item.firstName.charAt(0)+item.lastName.charAt(0)}
        country={item.location[0].country}
        />
      );
    }

    if (
      item.lastName
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
        name={item.firstName + ' '+ item.lastName}
        id={item._id}
        avatarName={item.firstName.charAt(0)+item.lastName.charAt(0)}
        country={item.location[0].country}
        />
      );
    }
    // filter of the country name
    if (
      item.location[0].country
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
        name={item.firstName + ' '+ item.lastName}
        id={item._id}
        avatarName={item.firstName.charAt(0)+item.lastName.charAt(0)}
        country={item.location[0].country}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomerSearchList;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
