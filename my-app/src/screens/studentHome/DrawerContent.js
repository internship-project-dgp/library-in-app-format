import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='home-outline' color={color} size={size} />
          )}
          label='Home'
          onPress={() => {
            props.navigation.navigate("StudentHome");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='bookshelf' color={color} size={size} />
          )}
          label='All Books'
          onPress={() => {
            props.navigation.navigate("Allbooks");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='book-open-variant' color={color} size={size} />
          )}
          label='Issued Books'
          onPress={() => {
            props.navigation.navigate("Issuedbooks");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='cog-outline' color={color} size={size} />
          )}
          label='Settings'
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='account-check-outline' color={color} size={size} />
          )}
          label='Support'
          onPress={() => {}}
        />
      </Drawer.Section>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='exit-to-app' color={color} size={size} />
          )}
          label='Log out'
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
      </Drawer.Section>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
