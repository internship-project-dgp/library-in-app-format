import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AdminDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='home-outline' color={color} size={size} />
          )}
          label='Home'
          onPress={() => {
            props.navigation.navigate("adminHome");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='bookshelf' color={color} size={size} />
          )}
          label='All Books'
          onPress={() => {
            props.navigation.navigate("Allbooksadmin");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='book-open-variant' color={color} size={size} />
          )}
          label='Add Books'
          onPress={() => {
            props.navigation.navigate("Addbooks");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='book-open-variant' color={color} size={size} />
          )}
          label='All Issued Books'
          onPress={() => {
            props.navigation.navigate("AllIssuedbooks");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='account-school' color={color} size={size} />
          )}
          label='Manage Students'
          onPress={() => {
            props.navigation.navigate("ManageStudents");
          }}
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

export default AdminDrawer;
