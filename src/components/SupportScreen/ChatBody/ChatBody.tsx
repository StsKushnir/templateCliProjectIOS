import React from "react";
import { View, Text } from "react-native";
import { s } from "./ChatBody.styles";
import { UserSupportChatLogo } from "../../../assets/icons/account-images/UserSupportChatLogo";
import AssistantLogoIcon from "../../../assets/icons/additional-Icons/AssistantLogoIcon";
import { supportChatData } from "../../../constants/supportChatData";

const ChatBody = () => {
  return (
    <View style={s.chatWrap}>
      {supportChatData.map((message) => {
        const messageStyle =
          message.side === "user" ? s.userMessage : s.assistantMessage;
        const textStyle =
          message.side === "user" ? s.userText : s.assistantText;
        const userTextWrapStyle = message.side === "user" && s.userTextWrap;

        return (
          <React.Fragment key={message.id}>
            <View style={s.messageWrap}>
              <View style={[messageStyle, s.bothMessage]}>
                {message.side === "user" ? (
                  <UserSupportChatLogo />
                ) : (
                  <AssistantLogoIcon />
                )}
                <View style={[s.textWrap, userTextWrapStyle]}>
                  <Text style={[textStyle, s.messageText]}>
                    {message.message}
                  </Text>
                  {message.message.includes("25") && (
                    <Text style={s.lastActivity}>26 minutes ago</Text>
                  )}
                </View>
              </View>
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default ChatBody;
