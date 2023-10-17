import { Stack } from "expo-router";
import { Platform } from "react-native";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home Screen" }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="carouselScreen"
        options={{
          presentation: "transparentModal",
          gestureDirection: "vertical",
          animation: "slide_from_bottom",
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
};

export default StackLayout;
