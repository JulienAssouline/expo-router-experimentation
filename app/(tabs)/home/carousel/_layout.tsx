import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: "transparentModal",
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          presentation: "transparentModal",
          gestureDirection: "vertical",
          animation: "slide_from_bottom",
          gestureEnabled: true,
          fullScreenGestureEnabled: true,
        }}
      />
    </Stack>
  );
};

export default StackLayout;
