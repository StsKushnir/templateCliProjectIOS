import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./ProfileButtons.styles";
import EditProfileIcon from "../../../assets/icons/additional-Icons/EditProfileIcon";
import LogOutIcon from "../../../assets/icons/additional-Icons/LogOutIcon";

const ProfileButtons = () => {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.edit}>
        <Text style={s.editText}>Edit Profile</Text>
        <EditProfileIcon width={24} height={24} fill="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity style={s.logOut}>
        <Text style={s.logOutText}>Log Out</Text>
        <LogOutIcon width={24} height={24} fill="#EF2A39"/>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileButtons;
