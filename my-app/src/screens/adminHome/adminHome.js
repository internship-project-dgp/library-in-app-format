import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const adminHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfosection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=male",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              XYZ ABC
            </Title>
            <Caption style={styles.caption}>@xyz_abc</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfosection}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name='account-circle-outline'
            size={24}
            color='#777777'
          />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Name, XYZ</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name='email' size={24} color='#777777' />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Email, xyz_0369@gmail.com
          </Text>
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name='phone' size={24} color='#777777' />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Contact no. , 345XXXXXXXX
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfosection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default adminHome;
