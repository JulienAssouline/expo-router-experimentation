import { View, Text, Animated } from "react-native";
import { Link, useRouter } from "expo-router";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const CarouselScreen = () => {
  const router = useRouter();

  const translateY = new Animated.Value(0);

  const onGestureEvent = ({ nativeEvent }) => {
    translateY.setValue(nativeEvent.translationY);
  };

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();

      // Navigate when swiped down (translationY > 0)
      if (nativeEvent.translationY > 50) {
        router.push("/home/tripScreen");
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
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
    </PanGestureHandler>
  );
};

export default CarouselScreen;
