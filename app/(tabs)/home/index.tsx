import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link style={{ padding: 20 }} href="/home/settings">
        Push settings
      </Link>
      <Link href="/home/modal">modal page</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
