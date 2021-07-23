import React, { useEffect, useState } from "react";
import styles from "../styles/CityStyles";
import Images from "../assets/index.js";

import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import StarRating from "react-native-star-rating";

function City(props) {
  const [isLoading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);

  const uri =
    "http://10.0.2.2:3000/hotels/city/" + props.route.params.city.CityID;

  useEffect(() => {
    fetch(uri)
      .then((response) => response.json())
      .then((listOfHotelsJson) => setHotels(listOfHotelsJson))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function ListHotel({ hotel }) {
    return (
      <TouchableOpacity
        style={styles.hotelCard}
        onPress={() => props.navigation.navigate("Hotel", { hotel: hotel })}
      >
        <Image
          style={styles.hotelImage}
          source={Images.hotels[hotel.Name.replace(/[-,&' ]/g, '')]}
        />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>{hotel.Name}</Text>
          <View style={styles.hotelRatingContainer}>
            <Text>{hotel.Rating}</Text>
            <View style={styles.hotelStars}>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={hotel.Rating} //hotel.stars
                fullStarColor={"#fac800"}
                starSize={15}
              ></StarRating>
            </View>
          </View>
          <View style={styles.hotelDescriptionContainer}>
            <Text style={styles.hotelDescription}>
              {hotel.Description.slice(0, 100)}...
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
            data={hotels}
            keyExtractor={(item) => item.HotelID.toString()}
            renderItem={({ item }) => <ListHotel hotel={item} />}
          />
        )}
      </View>
    </View>
  );
}

export default City;
