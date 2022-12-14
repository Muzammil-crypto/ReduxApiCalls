import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Counter from "./src/Counter";
import { store } from "./src/store/store";
const App = (props) => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
