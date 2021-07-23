import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  inputDesc: {
    flex: 1,
    borderRadius: 10,
    width: 350,
    height: 200,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: "top",
    backgroundColor: "white"
  },
  button: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0c7da6",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginHorizontal: 10,
    marginBottom: 100
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  titleCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 60,
  },
});

export default styles;
