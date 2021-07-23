import React from "react";
import styles from "../styles/SignInStyles";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }

  login = () => {
    const { username, password } = this.state;

    if (username !== "" && password !== "") {
      fetch("http://10.0.2.2:3000/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Username: username, Password: password }),
      })
        .then((r) =>
          r.json().then((data) => ({ status: r.status, body: data }))
        )
        .then((data) => {
          if (data.status === 200) {
            this.props.navigation.navigate("App", { user: data.body });
          } else {
            console.log("Error " + data.status);
            this.setState({
              errorMessage: data.body.message,
            });
          }
        })
        .catch((error) => console.error(error));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleCont}>
          <Text style={styles.title}>Login to our App</Text>
        </View>
        <View style={styles.contCont}>
          <Text style={styles.inputTitle}>Username</Text>
          <TextInput
            value={this.state.username}
            onChangeText={(value) => this.setState({ username: value })}
            style={styles.input}
            placeholder={"Username"}
          ></TextInput>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            value={this.state.password}
            onChangeText={(value) => this.setState({ password: value })}
            style={styles.input}
            placeholder={"Password"}
            secureTextEntry={true}
          ></TextInput>
          <Text>{this.state.errorMessage}</Text>
          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => {this.props.navigation.navigate("Register")}}>
            <Text style={styles.buttonText2}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SignIn;
