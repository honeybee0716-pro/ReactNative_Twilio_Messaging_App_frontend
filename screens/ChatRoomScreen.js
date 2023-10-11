import React, { useState, useCallback, useEffect } from "react";
import {
  GiftedChat,
  InputToolbar,
  Send,
  Bubble,
} from "react-native-gifted-chat";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import ChatRoomProfile from "../components/ChatRoomProfile";
import { Flex, VStack } from "native-base";

const ChatRoomScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello David",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        image: "https://wallpaperaccess.com/full/317501.jpg",
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    console.log(messages);
  }, []);

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "rgba(243, 246, 246, 1)",
          borderRadius: 30,
          borderColor: "#E8E8E8",
          padding: 1,
        }}
      />
    );
  };

  //     const customRenderSend = props => {
  //       return (
  //           <Send
  //               {...props}
  //           >
  //               <View style={{marginRight: 10, marginBottom: 6, backgroundColor: "rgba(93, 176, 117, 1)", justifyContent:"center", alignItems:"center", width:30, height:30, borderRadius:20}}>
  //               <MaterialIcons name="send" size={24} color="white" />
  //               </View>
  //           </Send>
  //       );
  //   }

  const renderSend = (props) => {
    return (
      <View style={{ flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
        <TouchableOpacity>
          <FontAwesome
            name="paperclip"
            style={{
              marginTop:5,
              marginBottom: 10,
              marginRight: 10,
              transform: [{ rotateY: "180deg" }],
            }}
            size={25}
            color="rgba(93, 176, 117, 1)"
          />
        </TouchableOpacity>
        <Send {...props}>
          <FontAwesome
            name="send"
            style={{ marginBottom: 10, marginRight: 10 }}
            size={25}
            color="rgba(93, 176, 117, 1)"
          />
        </Send>
      </View>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "rgba(93, 176, 117, 1)",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };


  return (
<VStack bg={"white"} height={"100%"} justifyContent={"center"}>
   <Flex height={"15%"} justifyContent={"flex-end"} marginLeft={"-18%"}> 
   <ChatRoomProfile
      name={"Jane Abraham"}
      message={"Active now"}
      image={{uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}
      /></Flex>
      <Flex height={"87%"} bg={"white"} marginBottom={5} marginLeft={2} marginRight={2}>
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderInputToolbar={(props) => customtInputToolbar(props)}
      textInputProps={{ color: "black" }}
      maxComposerHeight={200}
      maxInputLength={100}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      // renderSend={props => customRenderSend(props)}
      renderSend={renderSend}
      renderBubble={renderBubble}
      alwaysShowSend
    /></Flex>
    </VStack>
  );
};

export default ChatRoomScreen;
