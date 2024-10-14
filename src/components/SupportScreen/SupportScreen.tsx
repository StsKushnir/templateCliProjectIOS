import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { s } from "./SupportScreen.styles";
import SendMessageIcon from "../../assets/icons/additional-Icons/SendMessageIcon";
import TopButtonsBarSupport from "./TopButtonsBarSupport/TopButtonsBarSupport";
import ChatBody from "./ChatBody/ChatBody";

const SupportScreen = () => {
  const [userMessage, setUserMessage] = useState<string>();
  return (
    <View style={s.container}>
      <TopButtonsBarSupport />
      <ChatBody />
      <View style={s.inputWrap}>
        <TextInput
          style={s.inputMessage}
          value={userMessage}
          onChangeText={setUserMessage}
          placeholder="Type here..."
          placeholderTextColor="#999"
        />
        <SendMessageIcon />
      </View>
    </View>
  );
};

export default SupportScreen;
