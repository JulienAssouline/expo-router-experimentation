import { View, Text } from "react-native";
import { Link } from "expo-router";

const Carousel = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Carousel</Text>
      <Link href={"/home/tripScreen"}>Back</Link>
    </View>
  );
};

export default Carousel;
