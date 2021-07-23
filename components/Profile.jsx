import React from "react";
import styles from "../styles/ProfileStyles";

// User Context
import AuthContext from "../context/AuthContext";

import { View } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Profile(props) {
  return (
    <AuthContext.Consumer>
      {(user) => (
        <View style={styles.container}>
          <View style={styles.userHeaderSection}>
            <View style={{ flexDirection: "row"}}>
              <Avatar.Image
                source={{
                  uri: "https://reactjs.org/logo-og.png",
                }}
                size={85}
              />
              <View style={{ marginLeft: 30 }}>
                <Title style={styles.name}>{user.Name}</Title>
                <Caption style={styles.username}>@{user.Username}</Caption>
              </View>
            </View>
          </View>

          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {user.City}, {user.Country}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {user.Number}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {user.Email}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="card-text" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {user.Description}
              </Text>
            </View>
          </View>
                    
          <View style={styles.menuWrapper}>
            <TouchableRipple
              onPress={() => {
                props.navigation.navigate("EditProfile");
              }}
            >
              <View style={styles.menuItem}>
                <Icon name="account-details" color="#0c7da6" size={25} />
                <Text style={styles.menuItemText}>Edit Profile</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => {
                props.navigation.navigate('SignIn');;
              }}
            >
              <View style={styles.menuItem}>
                <Icon name="account-details" color="#0c7da6" size={25} />
                <Text style={styles.menuItemText}>Log Out</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      )}
    </AuthContext.Consumer>
  );
}

export default Profile;
