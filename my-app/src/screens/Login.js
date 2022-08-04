import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import Logo from "../../assets/admin2.jpg";
import SignInScreen from "./SignInScreen";
import CustomButton from "./CustomButton";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn("You have signed in");
    //validate
    navigation.navigate("adminHome");
  };

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

    aspectRatio: 1,
  },
});
export default Login;
