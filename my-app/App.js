import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import StudentHome from "./src/screens/studentHome/StudentHome";
import adminHome from "./src/screens/adminHome/adminHome";

import DrawerContent from "./src/screens/studentHome/DrawerContent";
import Allbooks from "./src/screens/studentHome/Allbooks";
import Issuedbooks from "./src/screens/studentHome/Issuedbooks";
import AllIssuedbooks from "./src/screens/adminHome/AllIssuedbooks";
import Addbooks from "./src/screens/adminHome/Addbooks";

const StudentDrawer = createDrawerNavigator();

const StudentDrawerScreen = ({ navigation }) => (
  <StudentDrawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <StudentDrawer.Screen name='studentHome' component={StudentHome} />
    <StudentDrawer.Screen name='Allbooks' component={Allbooks} />
    <StudentDrawer.Screen name='Issuedbooks' component={Issuedbooks} />
    {/*<StudentDrawer.Screen name='Addbooks' component={Addbooks} />
    <StudentDrawer.Screen name='adminHome' component={adminHome} />
    <StudentDrawer.Screen name='AllIssuedbooks' component={AllIssuedbooks} />
    <StudentDrawer.Screen name='Addbooks' component={Addbooks} />*/}
  </StudentDrawer.Navigator>
);
const AdminDrawerScreen = ({ navigation }) => (
  <StudentDrawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    <StudentDrawer.Screen name='adminHome' component={adminHome} />
    <StudentDrawer.Screen name='AllIssuedbooks' component={AllIssuedbooks} />
    <StudentDrawer.Screen name='Addbooks' component={Addbooks} />
  </StudentDrawer.Navigator>
);

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name='Home' component={Home} /> */}
        <Stack.Screen name='Home' options={{ headerShown: false }}>
          {(props) => (
            <Home {...props} channelName={"NIT Durgapur Library!!"} />
          )}
        </Stack.Screen>
        <Stack.Screen name='Admin' component={Login} />

        <Stack.Screen name='Student' component={About} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen
          name='StudentHome'
          component={StudentDrawerScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='adminHome'
          component={AdminDrawerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
