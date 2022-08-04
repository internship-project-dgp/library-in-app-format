import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import StudentHome from "./studentHome/StudentHome";

import SignInScreen from "./SignInScreen";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [roll_no, setRollno] = useState("");
  const [admission_yr, setAdmissionyr] = useState("");

  const onSignUpPressed = () => {
    console.warn("You have signed up");
    navigation.navigate("StudentHome");
  };
  const onLoginPressed = () => {
    console.warn("About");
    navigation.navigate("StudentHome");
  };
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <SignInScreen
        placeholder='Username'
        value={username}
        setValue={setUsername}
      />
      <SignInScreen placeholder='Email' value={email} setValue={setEmail} />
      <SignInScreen
        placeholder='Password'
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <SignInScreen placeholder='Branch' value={branch} setValue={setBranch} />
      <SignInScreen
        placeholder='Roll Number'
        value={roll_no}
        setValue={setRollno}
      />
      <SignInScreen
        placeholder='Admission year'
        value={admission_yr}
        setValue={setAdmissionyr}
      />
      <CustomButton text='Sign Up' onPress={onSignUpPressed} type='PRIMARY' />
      <CustomButton
        text='Already have an account then please Login'
        onPress={onLoginPressed}
        type='TERTIARY'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",

    padding: 20,
  },
});

export default Register;
