import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
interface HomeProps {}

const Home = (props: HomeProps) => {
  const router = useRouter();

  // useEffect(() => {
  //   if (false) {
  //     router.push("/home/carouselScreen");
  //   }
  //   console.log("Home mounted");
  //   return () => {
  //     console.log("Home unmounted");
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link style={{ padding: 20 }} href="/home/settings">
        Push settings
      </Link>
      <Link href="/home/modal">modal page</Link>
      <Link href="/home/tripScreen">trip page</Link>
      <Link href="/home/signout">Sign out</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
