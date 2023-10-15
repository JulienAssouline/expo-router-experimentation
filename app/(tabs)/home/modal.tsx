import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, router } from "expo-router";

const ModalPage = () => {
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Modal</Text>

      {isPresented && <Link href="../">Dismiss</Link>}
      <StatusBar style="light" />
    </View>
  );
};

export default ModalPage;
