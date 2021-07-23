import React, { useEffect, useState } from "react";
import styles from "../styles/DestinationsStyles";
import Images from "../assets/index.js";

import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function Destinations(props) {
  const [isLoading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);

  const uri = "http://10.0.2.2:3000/cities";

  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((listOfCitiesJson) => setCities(listOfCitiesJson))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function ListCity({ city }) {
    return (
      <TouchableOpacity
        style={styles.cityCard}
        onPress={() => 
          props.navigation.navigate("City", {
            city: city,
            cityName: city.City + ", " + city.Country,
          })
        }
      >
        <ImageBackground
          style={styles.cityImage}
          source={Images.cities[city.City.replace(/ /g, "")]}
        >
          <Text style={styles.cityFooter}>
            {city.City}, {city.Country}
          </Text>
        </ImageBackground>
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
            data={cities}
            keyExtractor={(item) => item.CityID.toString()}
            renderItem={({ item }) => <ListCity city={item} />}
          />
        )}
      </View>
    </View>
  );
}

export default Destinations;
