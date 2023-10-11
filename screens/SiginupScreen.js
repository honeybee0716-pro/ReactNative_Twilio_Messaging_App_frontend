import React from "react";
import { Button, Input, Stack, Text, Box, Flex, ScrollView} from "native-base";
import { TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';

const LoginScreen = ({ navigation }) => {
  const [show, setShow] = React.useState(true);
  const [isChecked, setChecked] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (<ScrollView>
    <Stack space={5} w="85%" maxW="100%" mx="auto">
      <Flex alignItems="center" direction="row" marginTop={"50%"}>
        <Box flex={2.5}></Box>
        <Box flex={3}>
          <Text fontSize="30">Sign Up</Text>
        </Box>
        <Box flex={1.2}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text fontSize="md" color="rgba(93, 176, 117, 1)">
              Log In
            </Text>
          </TouchableOpacity>
        </Box>
      </Flex>
      <Flex alignItems="center" direction="row">
        <Box flex={1}>
          <Input size="lg" variant="outline" placeholder="First Name" />
        </Box>
        <Box flex={0.1} />
        <Box flex={1}>
          <Input size="lg" variant="outline" placeholder="Last Name" />
        </Box>
      </Flex>
      <Input size="lg" variant="outline" placeholder="Email or Phone Number" />
      <Input
        size="lg"
        type={show ? "text" : "password"}
        InputRightElement={
          <Box flex={0.3} alignItems="center" justifyContent="center">
            <Text
              fontSize="md"
              color="rgba(93, 176, 117, 1)"
              onPress={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Text>
          </Box>
        }
        placeholder="Password"
      />
      <Flex alignItems="center" direction="row">
        <Box flex={1}>
        <Checkbox

          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'rgba(93, 176, 117, 1)' : undefined}
        />
        </Box>
        <Box flex={10}>
          <Text fontSize="md">
            I would like to receive your newsletter and other pomotional
            information.
          </Text>
        </Box>
      </Flex>
      <Button
        rounded={25}
        marginTop="5%"
        size="lg"
        bg="rgba(93, 176, 117, 1)"
        onPress={() => {
          navigation.navigate("Footer");
        }}
      >
        Sign Up
      </Button>
    </Stack>
    </ScrollView>
  );
};

export default LoginScreen;
