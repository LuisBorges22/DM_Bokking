import React, { useEffect, useState } from "react";
import styles from "../styles/MyReservationsStyles";
import Images from "../assets/index.js";

import AuthContext, { user } from "../context/AuthContext";

import {
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

function MyReservations(props) {
  const [isLoading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);

  const uri =
    "http://10.0.2.2:3000/reservations/user/" +
    AuthContext._currentValue.UserID;

  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((listOfReservationsJson) => setReservations(listOfReservationsJson))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function ListReservation({ reservation }) {
    return (
      <TouchableOpacity
        style={styles.revContainer}
        onPress={() =>
          props.navigation.navigate("Reservation", { reservation: reservation })
        }
      >
        <Image
          style={styles.hotelImage}
          source={Images.hotels[reservation.Name.replace(/[-,&' ]/g, "")]}
        />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>{reservation.Name}</Text>
          <View style={styles.reservationDescriptionContainer}>
            <Text>
              Cost:{" "}
              {reservation.Nights * reservation.PriceNight +
                reservation.PriceAllInclusive *
                  reservation.AllInclusive *
                  reservation.Nights}{" "}
              €
            </Text>
            <Text>
              {" "}
              Date of Check-in: {reservation.ReservationDate.slice(0, 10)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.flatlist}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={reservations}
            keyExtractor={(item) => item.ReservationID.toString()}
            renderItem={({ item }) => <ListReservation reservation={item} />}
          />
        )}
      </View>
    </View>
  );
}

export default MyReservations;
