import React, { useState } from "react";
import styles from "./styles/AppStyles";

// User Context
import AuthContext from "./context/AuthContext";

// Components
import SignInComponent from "./components/SignIn";
import DestinationsComponent from "./components/Destinations";
import CityComponent from "./components/City";
import HotelComponent from "./components/Hotel";
import ProfileComponent from "./components/Profile";
import EditProfileComponent from "./components/EditProfile";
import RegisterComponent from "./components/Register";
import MyReservationsComponent from "./components/MyReservations"
import ReservationComponent from "./components/Reservation"

import ContactForm from "./components/ContactForm";


import "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screen Methods
function DestinationsScreen({ navigation}) {
  return <DestinationsComponent navigation={navigation} />;
}

function SignInScreen({ navigation }) {
  return <SignInComponent navigation={navigation} />;
}

function CityScreen({ navigation, route }) {
  return <CityComponent navigation={navigation} route={route} />;
}

function HotelScreen({ navigation, route }) {
  return <HotelComponent navigation={navigation} route={route} />;
}

function ProfileScreen({ navigation }) {
  return <ProfileComponent navigation={navigation} />;
}

function EditProfileScreen({ navigation }) {
  return <EditProfileComponent navigation={navigation} />;
}

function RegisterScreen({ navigation }) {
  return <RegisterComponent navigation={navigation} />;
}

function MyReservationsScreen({ navigation }) {
  return <MyReservationsComponent navigation={navigation} />;
}

function ReservationScreen({ navigation }) {
  return <ReservationComponent navigation={navigation} />;
}

// Posts
function MyReservationsStack(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyReservations"
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Ionicons
                name={"menu-outline"}
                size={32}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          ),
        }}
        component={MyReservationsScreen}
      ></Stack.Screen>
      <Stack.Screen name="Reservation" component={ReservationScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

// Profile Stack Navigation
// Navigates Profile -> EditProfile
function ProfileStack(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Ionicons
                name={"menu-outline"}
                size={32}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          ),
        }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="EditProfile"
        options={{ title: "Edit Profile" }}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
}

// Destinations Stack Navigation
// Navigates Destinations(list of cities) -> (city hotels) -> (hotel page to make reservation with review comments)
function DestinationsStack(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Popular Destinations"
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Ionicons
                name={"menu-outline"}
                size={32}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          ),
        }}
        component={DestinationsScreen}
      />
      <Stack.Screen
        name="City"
        options={({ route }) => ({ title: route.params.cityName })}
        component={CityScreen}
      />
      <Stack.Screen
        name="Hotel"
        options={({ route }) => ({ title: route.params.hotel.Name })}
        component={HotelScreen}
      />
    </Stack.Navigator>
  );
}

function AppDrawerNavigator(props) {
  const Drawer = createDrawerNavigator();

  const { user } = props.route.params;

  return (
    <AuthContext.Provider value={user}>
      <Drawer.Navigator
        initialRouteName="Destinations"
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Destinations":
                iconName = focused ? "ios-airplane" : "ios-airplane-outline";
                break;
              case "Profile":
                iconName = focused ? "ios-person" : "ios-person-outline";
                break;
              case "MyReservations":
                iconName = focused ? "business" : "business-outline";
                break;
              case "ContactForm":
                iconName = focused ? "ios-call" : "ios-call-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen name="Destinations" component={DestinationsStack} />
        <Drawer.Screen name="Profile" component={ProfileStack} />
        <Drawer.Screen
          name="MyReservations"
          component={MyReservationsStack}
          options={{
            title: "My Reservations",
          }}
        />
        <Drawer.Screen
          name="ContactForm"
          component={ContactForm}
          options={{
            title: "Contact Us",
          }}
        />
      </Drawer.Navigator>
    </AuthContext.Provider>
  );
}

// Login Stack Navigation
function NavLogin() {
  const StackLogin = createStackNavigator();

  return (
    <StackLogin.Navigator
      initialRouteName={"SignIn"}
      headerMode="none"
    >
      <StackLogin.Screen name="SignIn" component={SignInScreen} />
      <StackLogin.Screen name="Register" component={RegisterScreen} />
      <StackLogin.Screen name="App" component={AppDrawerNavigator} />
    </StackLogin.Navigator>
  );
}

// App Main
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer style={styles.mainContainer}>
        {NavLogin()}
      </NavigationContainer>
    );
  }
}
App.contextType = AuthContext;

export default App;
