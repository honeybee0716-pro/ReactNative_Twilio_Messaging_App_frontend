import React, { useState } from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import { Center, Text, Button, HStack, VStack, Stack } from "native-base";

export default function DeleteAccount() {
  const [active, setactive] = useState(false);
  return (
    <Center>
      <Modal
        animationType="slide"
        transparent={true}
        visible={active}
        onRequestClose={() => {
          console.warn("closed");
        }}
      ><Stack width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" alignItems="center">
        <VStack bg="white" space={10} alignItems="center" marginTop={"45%"} width="350" rounded={
            20} >
          <Center marginTop={5}>
          <Text fontSize="16">Do you want to delete this account?</Text>
          </Center>
          <Center>
          <HStack space={20} marginBottom={5}>
            <Button bg="rgba(223, 24, 24, 1)" colorScheme="violet" width={95} height={10}
              onPress={() => {
                setactive(!active);
              }}
            >
              <Text color="white">Delete</Text>
            </Button>
            <Button bg="rgba(93, 176, 117, 1)" colorScheme="violet" width={95} height={10}
              onPress={() => {
                setactive(!active);
              }}
            >
              <Text color="white">Cancel</Text>
            </Button>
          </HStack>
          </Center>
        </VStack>
        </Stack>
      </Modal>
      <View>
        <TouchableOpacity
          onPress={() => {
            setactive(!active);
          }}
        >
           <Text fontSize={15} color="rgba(223, 24, 24, 1)">Delete Account</Text>
        </TouchableOpacity>
      </View>
    </Center>
  );
}
