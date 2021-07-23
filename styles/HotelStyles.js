import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hotelContainer: {
    flex: 8,
  },
  price: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#0c7da6",
    marginBottom:15
  },
  hotelFooter: {
    flex: 1,
    position: "absolute",
    backgroundColor: "pink",
  },
  hotelImageContainer: {
    flex: 1.5,
    alignItems: "center",
  },
  hotelImage: {
    flex: 1,
    width: 375,
    marginVertical: 10,
    borderRadius: 10,
  },
  hotelHeader: {
    flex: 0.6,
    marginHorizontal: 10,
    height: 50,
    //backgroundColor: "green"
  },
  hotelNome: {
    flex: 0.7,
    fontWeight: "bold",
    fontSize: 25,
    //backgroundColor: "red",
  },
  hotelRatingContainer: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    //backgroundColor: "blue",
  },
  hotelStars: {
    marginLeft: 5,
    width: 75,
  },
  hotelPreco: {
    flex: 0.5,
    alignItems: "flex-end",
    marginHorizontal: 20,
    //backgroundColor: "green",
  },
  hotelPrecoTexto: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 14,
    //backgroundColor: "red",
  },
  hotelPrecoTexto2: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 22,
    //backgroundColor: "blue",
  },
  hotelPrecoTexto3: {
    flex: 1,
    fontWeight: "100",
    fontSize: 12,
    //backgroundColor: "grey",
  },
  hotelDesc: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    //backgroundColor: "grey",
  },
  dateCont: {
    borderTopWidth: 2,
    borderTopColor: "#777777",
    borderBottomWidth: 2,
    borderBottomColor: "#777777",
    alignItems: "center",
  },
  buttonDate: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#10a9e0",
    width: 250,
    borderRadius: 20,
    marginBottom: 20
  },
  nightText: {
    fontWeight: "bold",
    color:"#0c7da6",
    fontSize: 17,
    marginTop: 15,
    marginBottom: 10
  },
  button: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0c7da6",
    width: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
  },
  headerText: {
    padding: 2,
    fontSize: 16,
    margin: 0,
    letterSpacing: 0.25,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    borderRadius: 10,
    width: 350,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "white"
  },
});

export default styles;
