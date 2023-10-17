import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
const TripScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Trips</Text>

      <Link href="/home/carouselScreen">Carousel Screen</Link>
    </View>
  );
};

export default TripScreen;
