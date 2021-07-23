import React from "react";
import styles from "../styles/RegisterStyles";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Name: "",
      City: "",
      Country: "",
      Description: "",
      Email: "",
      Number: "",
      Password: "",
      ConfirmPassword: "",
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.setState({
      Username: "",
      Password: "",
      Name: "",
      City: "",
      Country: "",
      Description: "",
      Email: "",
      Number: "",
      ConfirmPassword: "",
      errorMessage: "",
    });
  }

  createUser() {
      console.log(this.state);
    if (
      this.state.Username !== "" &&
      this.state.Password !== "" &&
      this.state.Name !== "" &&
      this.state.City !== "" &&
      this.state.Country !== "" &&
      this.state.Description !== "" &&
      this.state.Email !== "" &&
      this.state.Number !== "" &&
      this.state.ConfirmPassword !== ""
    ) {
      if (this.state.Password === this.state.ConfirmPassword) {
        fetch("http://10.0.2.2:3000/users/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              Username: this.state.Username,
              Name: this.state.Name,
              Password: this.state.Password,
              City: this.state.City,
              Country: this.state.Country,
              Description: this.state.Description,
              Email: this.state.Email,
              Number: this.state.Number,
            }),
          })
            .then((r) =>
              r.json().then((data) => ({ status: r.status, body: data }))
            )
            .then(async (data) => {
              if (data.status === 200) {
                Alert.alert("Account created!");
                this.props.navigation.navigate("App", { user: data.body });
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
        this.setState({ errorMessage: "Passwords do not match!" }, () => {
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
          <View style={styles.titleCont}>
            <Text style={styles.title}>Register on our App</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.headerText}>Username *</Text>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={this.state.Username}
              onChangeText={(text) => this.setState({ Username: text })}
            />
            <Text style={styles.headerText}>Password *</Text>
            <TextInput
              placeholder="Password"
              style={styles.input}
              value={this.state.Password}
              onChangeText={(text) => this.setState({ Password: text })}
            />
            <Text style={styles.headerText}>Confirm Password *</Text>
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              value={this.state.ConfirmPassword}
              onChangeText={(text) => this.setState({ ConfirmPassword: text })}
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
          </View>
        </ScrollView>
        <View style={{ flex: 0.08, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.createUser();
              }}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Register;
