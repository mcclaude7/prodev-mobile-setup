import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9", // Light blue background
    flex: 1, // Make container take full screen height
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 20, // Optional padding
  },
  largeText: {
    fontSize: 30,
    color: "#f44336", // Red text
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"], // Makes text small-caps
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0", // Purple text
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right", // Align text to the right
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3", // Blue text
    fontWeight: "400",
    textAlign: "center", // Centered text
  },
});

export { styles };

export default function Index() {
  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Text style={styles.largeText}>Typescript is great if you practice more</Text>
      <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
      <Text style={styles.smallText}>ALX is awesome</Text>
      <Text style={styles.container}>Entry Screen - Awesome.</Text>
    </View>
  );
}
