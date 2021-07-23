import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 10,
    alignItems: 'center',
  },
  flatlist:{
    flex: 10
  },
  cityCard:{
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 7,
    width: 370,
  },
  cityImage:{
    flex: 1,
    height: 200,
    width: 370,
    overflow: 'hidden',
    borderRadius:20,
  },
  cityFooter:{
    flex: 1,
    color: "#ffffff",
    padding: 10,
    fontWeight: "bold",
    fontSize: 30
  },
});

export default styles;
