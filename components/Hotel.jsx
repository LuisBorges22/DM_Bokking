import React, { useEffect, useState } from "react";
import styles from "../styles/HotelStyles";

import StarRating from "react-native-star-rating";
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

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show1: false,
      UserID: undefined,
      HotelID: undefined,
      checkInDate: undefined,
      AllInclusive: undefined,
      Nights: undefined,
      errorMessage: "",
    };
  }

  componentDidMount() {
    const user = this.context;
    this.setState({
      show: false,
      show1: false,
      UserID: user.UserID,
      checkInDate: undefined,
      AllInclusive: 0,
      Nights: 1,
      errorMessage: "",
    });
  }

  createReservation() {
    if (this.state.checkInDate !== undefined &&
      this.state.UserID !== undefined &&
      this.state.checkInDate !== undefined &&
      this.state.AllInclusive !== undefined &&
      this.state.Nights !== undefined
      ) {
      fetch("http://10.0.2.2:3000/reservations/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Nights: this.state.Nights,
          ReservationDate: this.state.checkInDate.toISOString().slice(0, 10),
          AllInclusive: this.state.AllInclusive,
          HotelID: this.props.route.params.hotel.HotelID,
          UserID: this.state.UserID,
        }),
      })
        .then((r) =>
          r.json().then((data) => ({ status: r.status, body: data }))
        )
        .then((data) => {
          if (data.status === 200) {
            Alert.alert("Reservation created!");
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
        { errorMessage: "You need to pick a Check-in date and number of Nights" },
        () => {
          Alert.alert("Something went wrong", this.state.errorMessage);
        }
      );
    }
  }

  render() {
    const { hotel } = this.props.route.params;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 12 }}>
          <ScrollView>
            <View style={styles.hotelContainer}>
              <View style={styles.hotelImageContainer}>
                <Image
                  style={styles.hotelImage}
                  source={images.hotels[hotel.Name.replace(/[-,&' ]/g, "")]}
                />
              </View>
              <View style={styles.hotelHeader}>
                <Text style={styles.hotelNome}>{hotel.Name}</Text>
                <View style={styles.hotelRatingContainer}>
                  <View style={styles.hotelStars}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={hotel.Rating} //hotel.stars
                      fullStarColor={"#fac800"}
                      starSize={15}
                    ></StarRating>
                  </View>
                  <Text> {hotel.Rating}</Text>
                </View>
              </View>
              <View style={styles.hotelPreco}>
                <Text style={styles.hotelPrecoTexto}>
                  Price for 1 night, 2 adults
                </Text>
                <Text style={styles.hotelPrecoTexto2}>
                  {hotel.PriceNight} €
                </Text>
                <Text style={styles.hotelPrecoTexto3}>
                  (+ {hotel.PriceAllInclusive}€ for All Inclusive)
                </Text>
              </View>
              <View style={styles.hotelDesc}>
                <Text>{hotel.Description}</Text>
              </View>
            </View>

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
                    this.setState({ checkInDate: date.nativeEvent.timestamp });
                  }}
                />
              )}
              <Text style={styles.price}>
                Total price:{" "}
                {this.state.Nights * hotel.PriceNight +
                  10 * this.state.Nights * this.state.AllInclusive}{" "}
                €
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.text}
              onPress={() => {
                this.createReservation();
              }}
            >
              Place Reservation
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Hotel;
Hotel.contextType = AuthContext;
