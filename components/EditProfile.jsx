import React from "react";
import styles from "../styles/EditProfileStyles";

import AuthContext, { user } from "../context/AuthContext";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserID: "",
      Username: "",
      Name: "",
      City: "",
      Country: "",
      Description: "",
      Email: "",
      Number: "",
      OldPassword: "",
      NewPassword: "",
      ConfirmNewPassword: "",
      errorMessage: "",
    };
  }

  componentDidMount() {
    const user = this.context;
    this.setState({
      UserID: user.UserID,
      Username: user.Username,
      Name: user.Name,
      City: user.City,
      Country: user.Country,
      Description: user.Description,
      Email: user.Email,
      Number: user.Number,
      OldPassword: "",
      NewPassword: "",
      ConfirmNewPassword: "",
      errorMessage: "",
    });
  }

  updateUser() {
    if (
      this.state.UserID !== "" &&
      this.state.Username !== "" &&
      this.state.Name !== "" &&
      this.state.City !== "" &&
      this.state.Country !== "" &&
      this.state.Description !== "" &&
      this.state.Email !== "" &&
      this.state.Number !== "" &&
      this.state.OldPassword !== ""
    ) {
      if (this.state.NewPassword === this.state.ConfirmNewPassword) {
        var newPass = "";
        if (this.state.NewPassword === "") {
          newPass = this.state.OldPassword;
        } else {
          newPass = this.state.NewPassword;
        }
        fetch(`http://10.0.2.2:3000/users/${this.state.UserID}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Username: this.state.Username,
            Name: this.state.Name,
            City: this.state.City,
            Country: this.state.Country,
            Description: this.state.Description,
            Email: this.state.Email,
            Number: this.state.Number,
            OldPassword: this.state.OldPassword,
            NewPassword: newPass,
          }),
        })
          .then((r) =>
            r.json().then((data) => ({ status: r.status, body: data }))
          )
          .then(async (data) => {
            if (data.status === 200) {
              Alert.alert("Profile updated!");
              this.props.navigation.navigate("Profile");
            } else {
              console.log("Error " + data.status);
              this.setState({ errorMessage: data.body.message }, () => {
                Alert.alert("Something went wrong", this.state.errorMessage);
              });
            }
          })
          .catch((error) => {
            console.error(error);
            this.setState({ errorMessage: error }, () => {
              Alert.alert("Something went wrong", this.state.errorMessage);
            });
          });
      } else {
        this.setState({ errorMessage: "New passwords do not match!" }, () => {
          Alert.alert("Something went wrong", this.state.errorMessage);
        });
      }
    } else {
      this.setState(
        { errorMessage: "You must fill all the obligatory(*) fields!" },
        () => {
          Alert.alert("Something went wrong", this.state.errorMessage);
        }
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.headerText}>Username *</Text>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={this.state.Username}
              onChangeText={(text) => this.setState({ Username: text })}
            />
            <Text style={styles.headerText}>Name *</Text>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={this.state.Name}
              onChangeText={(text) => this.setState({ Name: text })}
            />
            <Text style={styles.headerText}>City *</Text>
            <TextInput
              placeholder="City"
              style={styles.input}
              value={this.state.City}
              onChangeText={(text) => this.setState({ City: text })}
            />
            <Text style={styles.headerText}>Country *</Text>
            <TextInput
              placeholder="Country"
              style={styles.input}
              value={this.state.Country}
              onChangeText={(text) => this.setState({ Country: text })}
            />
            <Text style={styles.headerText}>Description *</Text>
            <TextInput
              placeholder="Description"
              style={styles.inputDesc}
              value={this.state.Description}
              multiline={true}
              onChangeText={(text) => this.setState({ Description: text })}
            />
            <Text style={styles.headerText}>Email *</Text>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={this.state.Email}
              onChangeText={(text) => this.setState({ Email: text })}
            />
            <Text style={styles.headerText}>Number *</Text>
            <TextInput
              placeholder="Number"
              style={styles.input}
              value={this.state.Number}
              onChangeText={(text) => this.setState({ Number: text })}
            />
            <Text style={styles.headerText}>New Password</Text>
            <TextInput
              placeholder="New Password"
              style={styles.input}
              secureTextEntry={true}
              value={this.state.Newassword}
              onChangeText={(text) => this.setState({ NewPassword: text })}
            />
            <Text style={styles.headerText}>Confirm New Password</Text>
            <TextInput
              placeholder="Confirm New Password"
              style={styles.input}
              secureTextEntry={true}
              value={this.state.ConfirmNewPassword}
              onChangeText={(text) =>
                this.setState({ ConfirmNewPassword: text })
              }
            />
            <Text style={styles.headerText}>Old Password *</Text>
            <TextInput
              placeholder="Old Password"
              style={styles.input}
              secureTextEntry={true}
              value={this.state.OldPassword}
              onChangeText={(text) => this.setState({ OldPassword: text })}
            />
          </View>
        </ScrollView>
        <View style={{ flex: 0.08 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.updateUser();
            }}
          >
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EditProfile;
EditProfile.contextType = AuthContext;
