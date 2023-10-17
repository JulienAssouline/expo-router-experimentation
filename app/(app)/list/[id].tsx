import { View, Text } from "react-native";
import { Stack, useGlobalSearchParams } from "expo-router";

const DetailsPage = () => {
  const { id } = useGlobalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details: #${id}` }} />

      <Text>My deatils for {id}</Text>
    </View>
  );
};
export default DetailsPage;
