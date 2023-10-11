import React from "react";
import { Button, Input, Stack, Text, Box, Flex, ScrollView } from "native-base";
import { TouchableOpacity} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [show, setShow] = React.useState(true);

  const handleClick = () => setShow(!show);
  return (
    <ScrollView>
    <Stack space={5} w="85%" maxW="100%" mx="auto">
      <Flex alignItems="center" direction="row" marginTop={"50%"}>
        <Box flex={3}></Box>
        <Box flex={3}>
          <Text fontSize="30">Log In</Text>
        </Box>
        <Box flex={1.5}>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text fontSize="16" color="rgba(93, 176, 117, 1)">
              Sign Up
            </Text>
          </TouchableOpacity>
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
      <Button
        rounded={25}
        marginTop="30%"
        size="lg"
        bg="rgba(93, 176, 117, 1)"
        onPress={() => {
          navigation.navigate("Footer");
        }}
      >
        Log in
      </Button>
      <Box justifyContent="center" alignItems="center">
        <Text fontSize="16" color="rgba(93, 176, 117, 1)">
          Forgot your password?
        </Text>
      </Box>
    </Stack>
    </ScrollView>
  );
};

export default LoginScreen;
