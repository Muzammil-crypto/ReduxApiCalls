import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { React, useState } from "react";
import { Dimensions } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const [todo, setTodo] = useState({ name: "", des: "" });
  const handleChange = (event) => {
    // setText(event.target.name);
    console.log(event);
  };

  let incrementCount = () => {
    setCounter(counter + 1);
    generateColor();
    console.log(counter);
  };
  let generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
    console.log(color);
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        backgroundColor: `#${color}`,
        height: windowHeight,
        width: windowWidth,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        This is Counter app {counter} {color} {text}
      </Text>
      {/* <TextInput
        name="name"
        onChange={handleChange}
        placeholder="Name"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      /> */}
      <TextInput
        name="des"
        placeholder="Description"
        onChangeText={handleChange}
        defaultValue={todo.des}
      />
      <Button title="Submit Text" onPress={incrementCount}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
