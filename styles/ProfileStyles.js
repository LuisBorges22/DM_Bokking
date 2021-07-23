import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userHeaderSection: {
    paddingTop: 30,
    paddingLeft: 30,
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    flex: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  username: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },

  menuWrapper: {
    marginTop: 0,
    flex: 1,
    borderTopColor: "#777777",
    borderTopWidth: 1,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default styles;