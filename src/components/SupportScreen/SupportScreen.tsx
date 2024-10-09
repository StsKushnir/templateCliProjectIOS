import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { s } from "./SupportScreen.styles";
import { NavigationProps } from "../../types/NavigationTypes";
import SendMessageIcon from "../../assets/icons/additional-Icons/SendMessageIcon";
import TopButtonsBarSupport from "./TopButtonsBarSupport/TopButtonsBarSupport";
import ChatBody from "./ChatBody/ChatBody";

const SupportScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  const [userMessage, setUserMessage] = useState<string>();
  return (
    <View style={s.container}>
      <TopButtonsBarSupport navigation={navigation} route={route} />
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
