import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  flatlist: {
    flex: 10,
  },
  revContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 7,
    height: 125,
    width: 370,
    borderRadius: 20,
    overflow: "hidden",
  },
  hotelImage: {
    flex: 1,
    height: 125,
    width: 370,
  },
  hotelInfo: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 5,
    paddingVertical: 5,
    fontSize: 30,

  },
  hotelName: {
    flex: 2,
    fontWeight: "bold",
    fontSize: 17,
  },
  reservationDescriptionContainer: {
    flex: 2,
    paddingBottom: 20,
    paddingLeft:10
  },
});
export default styles;
