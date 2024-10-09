import React from "react";
import { View, ImageBackground, ScrollView } from "react-native";
import { s } from "./ProfileScreen.styles";
import { NavigationProps } from "../../types/NavigationTypes";
import LinearGradient from "react-native-linear-gradient";
import { AccountImage } from "../../assets/icons/account-images/AccountImage";
import Form from "./Form/Form";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import ProfileButtons from "./ProfileButtons/ProfileButtons";
import TopBarButtonsProfile from "./TopBarButtonsProfile/TopBarButtonsProfile";

const ProfileScreen: React.FC<NavigationProps> = ({ navigation, route }) => {
  return (
    <View style={s.container}>
      <ImageBackground
        source={require("../../assets/icons/account-images/account-bg-left.png")}
        style={[s.background, s.leftBackground]}
        resizeMode="cover"  
      />
      <ImageBackground
        source={require("../../assets/icons/account-images/account-bg-right.png")}
        style={[s.background, s.rightBackground]}
        resizeMode="cover"  
      />
      <LinearGradient
        colors={[
          "rgba(232, 14, 31, 0.68)",
          "rgba(255, 42, 113, 0.75)",
          "rgba(232, 14, 31, 0.68)",
        ]}
        start={{ y: 0.5, x: 0 }}
        end={{ y: 0.5, x: 1 }}
        style={s.gradient}
      >
        <ScrollView contentContainerStyle={s.accountWrap} showsVerticalScrollIndicator={false}>
          <TopBarButtonsProfile navigation={navigation} route={route} />
          <View style={s.main}>
            <View style={s.accountImgWrap}>
              <AccountImage width={139} height={139} resizeMode="cover" />
            </View>
            <View style={s.info}>
              <Form />
              <AdditionalInfo />
              <ProfileButtons />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ProfileScreen;
