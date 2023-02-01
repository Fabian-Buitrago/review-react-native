import { StyleSheet, View } from "react-native";
import CatsCafe from "./components/CatsCafe";

export default function App() {
  return (
    <View style={styles.container}>
      <CatsCafe />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
