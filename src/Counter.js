import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "./components/Button";
import { addition, subtraction } from "./store/action";
import { store } from "./store/store";

const Counter = (props) => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 100,
          textAlign: "center",
        }}
      >
        {data}
      </Text>

      <Button onPress={() => dispatch(addition())} mode={"contained"}>
        Increment Here
      </Button>

      <Button onPress={() => dispatch(subtraction())} mode={"outlined"}>
        Decrement Here
      </Button>
    </View>
  );
};
export default Counter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
