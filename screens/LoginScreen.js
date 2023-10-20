import React , {useState} from "react";
import { Button, Input, Stack, Text, Box, Flex, ScrollView,useToast } from "native-base";
import { TouchableOpacity} from "react-native";
import axios from "axios";
import { API_LOCAL_URL } from "../config/api";

const LoginScreen = ({ navigation }) => {
  const [show, setShow] = React.useState(true);

  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = text => {
    setEmail(text);
  };
  
  const passwordChangeHandler = text => {
    setPassword(text);
  };

  const handleError = (error) =>
  toast.show({
    title: {error},
    placement : "bottom"
  });
  const handleSuccess = (msg) =>
    toast.show({
      title: `Hello ${msg}. You have successfully logged in.`,
      placement : "bottom"
    });
  const handleAxiosError = () =>
  toast.show({
    title: "Your credentials are incorrect or a request error occurred.! ",
    placement : "bottom"
  });
  const handleSubmit = async () => {
    axios
    .post(`${API_LOCAL_URL}/user/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log('===========', response.data);
      const { success} = response.data;
      if (success) {
        handleSuccess(response.data.user.firstName);
        setEmail('');
        setPassword('');
        setTimeout(() => {
          navigation.navigate("Footer");
        }, 1000);
      }else{
        handleAxiosError();
      }
    })
    .catch((error) => {
      console.log('Error: ', error);
      handleError(error);
    });
  };

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
      <Input size="lg" variant="outline" placeholder="Email or Phone Number" value={email} onChangeText={text => emailChangeHandler(text)} />
      <Input
        size="lg"
        type={show ? "text" : "password"} value={password} onChangeText={text => passwordChangeHandler(text)}
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
        onPress={handleSubmit}
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
