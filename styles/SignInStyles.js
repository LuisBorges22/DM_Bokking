import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  contCont:{
    flex: 4,
    alignItems: "center",
  },
  inputTitle: {
    padding: 2,
    fontSize: 16,
    margin: 5,
    fontWeight: "bold",
  },
  input: {
    height:50,
    width: 300,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "white"
  },
  button: {
    height:50,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    backgroundColor: "#0c7da6",
    borderRadius: 20,
    marginBottom:10,
  },
  button2: {
    height:50,
    alignItems: "center",
    width: 200,
    justifyContent: "center",
    backgroundColor: "#10a9e0",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonText2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default styles;
