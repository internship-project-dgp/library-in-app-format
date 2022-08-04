import {
  StyleSheet,
  Text,
  Image,
  View,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../assets/libms.jpg";
import SignInScreen from "./SignInScreen";
import CustomButton from "./CustomButton";
import Register from "./Register";
import StudentHome from "./studentHome/StudentHome";
import { useNavigation } from "@react-navigation/native";

const About = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("You have signed in");
    //validate with backend
    navigation.navigate("StudentHome");
  };
  const onRegisterPressed = () => {
    console.warn("Register");
    navigation.navigate("Register");
  };
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.25 }]}
        resizeMode='contain'
      />
      <SignInScreen
        placeholder='Username'
        value={username}
        setValue={setUsername}
      />
      <SignInScreen
        placeholder='Password'
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text='Sign in' onPress={onSignInPressed} type='PRIMARY' />
      <CustomButton
        text="Don't have an account then register here"
        onPress={onRegisterPressed}
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default About;
