import React, { useEffect, useState } from "react";
import styles from "../styles/ReservationStyles";

import DateTimePicker from "@react-native-community/datetimepicker";
import NumericInput from "react-native-numeric-input";

import AuthContext, { user } from "../context/AuthContext";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import images from "../assets";

class Reservation extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      ReservationID: undefined,
      Nights: undefined,
      ReservationDate: undefined,
      AllInclusive: undefined,
      errorMessage: "",
      PriceNight: undefined,
      PriceAllInclusive: undefined,
    };
  }

  componentDidMount() {
    const reservation = this.state.reservation;
    this.setState({
      ReservationID: reservation.ReservationID,
      Nights: reservation.Nights,
      ReservationDate: reservation.ReservationDate,
      AllInclusive: reservation.AllInclusive,
      errorMessage: "",
      PriceNight: reservation.PriceNight,
      PriceAllInclusive: reservation.PriceAllInclusive,
    });
  }

  updateReservation() {
    if (
      this.state.ReservationID !== undefined &&
      this.state.Nights !== undefined &&
      this.state.ReservationDate !== undefined &&
      this.state.AllInclusive !== undefined &&
      this.state.errorMessage !== undefined
    ) {
      fetch("http://10.0.2.2:3000/reservations/" + this.state.ReservationID, {
        method: "PUT",
        headerTexts: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Nights: this.state.Nights,
          ReservationDate: this.state.ReservationDate.toISOString().slice(
            0,
            10
          ),
          AllInclusive: this.state.AllInclusive,
        }),
      })
        .then((r) =>
          r.json().then((data) => ({ status: r.status, body: data }))
        )
        .then((data) => {
          if (data.status === 200) {
            Alert.alert("Reservation updated!");
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
      <View style={styles.dateCont}>
        <Text style={styles.nightText}>
          Number of nights for the stay at the hotel
        </Text>
        <NumericInput
          type="up-down"
          minValue={1}
          initValue={this.state.Nights}
          containerStyle={{ marginBottom: 20 }}
          value={this.state.Nights}
          onChange={(value) => {
            this.setState({ Nights: value });
          }}
        />
        <View>
          <TouchableOpacity
            style={styles.buttonDate}
            onPress={() => this.setState({ show: true })}
          >
            <Text style={styles.text}>Pick the check-in date</Text>
          </TouchableOpacity>
        </View>
        {this.state.show && (
          <DateTimePicker
            testID="dateDatePicker"
            value={this.state.checkInDate || new Date()}
            mode={"date"}
            display="spinner"
            onChange={(date) => {
              this.setState({ show: false });
              this.setState({ ReservationDate: date.nativeEvent.timestamp });
            }}
          />
        )}
        <Text style={styles.price}>
          Total price:{" "}
          {this.state.Nights * this.state.PriceNight +
            this.state.PriceAllInclusive *
              this.state.Nights *
              this.state.AllInclusive}{" "}
          €
        </Text>
      </View>
    );
  }
}
export default Reservation;

Reservation.contextType = AuthContext;
