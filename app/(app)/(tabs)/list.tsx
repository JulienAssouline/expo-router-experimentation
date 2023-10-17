import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
interface ListProps {}

const List = (props: ListProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Link href={"/list/1"}>List 1</Link>
      <Link href={"/list/2"}>List 2</Link>

      <Link href={"/list/3"}>List 3</Link>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {},
});
