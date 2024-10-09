import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
} from "react-native";
import { s } from "./Form.styles";
import LockIcon from "../../../assets/icons/additional-Icons/LockIcon";

const Form = () => {
  const [name, setName] = useState<string>("Sophia Patel");
  const [email, setEmail] = useState<string>("sophiapatel@gmail.com");
  const [address, setAddress] = useState<string>(
    "123 Main St Apartment 4A, New York, NY"
  );
  const [password, setPassword] = useState<string>("111111111");

  return (
    <>
      <View style={[s.inputWrap, s.inputMargin]}>
        <View style={s.placeholder}>
          <Text style={s.placeholderText}>Name</Text>
        </View>
        <TextInput
          style={s.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter name"
          placeholderTextColor="#999"
        />
      </View>
      <View style={[s.inputWrap, s.inputMargin]}>
        <View style={s.placeholder}>
          <Text style={s.placeholderText}>Email</Text>
        </View>
        <TextInput
          style={s.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Email"
          placeholderTextColor="#999"
        />
      </View>
      <View style={[s.inputWrap, s.inputMargin]}>
        <View style={s.placeholder}>
          <Text style={s.placeholderText}>Delivery address</Text>
        </View>
        <TextInput
          style={s.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter Address"
          placeholderTextColor="#999"
        />
      </View>
      <View style={s.inputWrap}>
        <View style={[s.placeholder, s.passPlaceholder]}>
          <Text style={s.placeholderText}>Password</Text>
          <LockIcon width={16} height={16} />
        </View>
        <TextInput
          style={s.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>
    </>
  );
};

export default Form;
