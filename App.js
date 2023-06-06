import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import prompt from "react-native-prompt-android";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Icon,
  Alert,
  Image,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

export default function App() {
  var androidtext;

  const [items, setItems] = useState([]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "center",
    },
    title: {
      margin: 20,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
    },
  });

  const stylesVisible = StyleSheet.create({
    container: {
      display: "none",
    },
  });

  const Topheader = (props) => {
    return (
      <View>
        <Text style={styles.title}>TODO</Text>
      </View>
    );
  };

  const FloatingButton = () => {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          width: 70,
          position: "absolute",
          bottom: 10,
          right: 20,
          height: 70,
          backgroundColor: "rgba(0,0,255,0.4)",
          borderRadius: 20,
          alignItems: "center",
        }}
        onPress={() => {
          Platform.select({
            ios: Alert.prompt("", "Enter your TODO item", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: (item) => {
                  setItems([...items, { key: item }]);
                },
              },
            ]),
            android: setItems([...items, { key: androidtext }]),
          });
          console.log("fab pressed");
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>+</Text>
      </TouchableOpacity>
    );
  };

  const TextInputExample = () => {
    console.log(Platform.OS.toString());
    if (Platform.OS === "ios") {
      var displayMode = "none";
    }

    return (
      <TextInput
        placeholder="Enter your item"
        onChangeText={(text) => (androidtext = text)}
        style={{
          borderRadius: 50,
          display: displayMode,
          width: 200,
          position: "absolute",
          bottom: 10,
          right: 100,
          height: 50,
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          padding: 15,
          margin: 10,
        }}
      ></TextInput>
    );
  };

  const FlatListBasics = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Topheader></Topheader>
          <View
            style={{
              // backgroundColor: "red",
              marginLeft: 16,
              marginRight: 16,
              marginTop: 10,
            }}
          >
            <FlatList
              data={items}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
          <FloatingButton></FloatingButton>
          <TextInputExample></TextInputExample>
        </View>
      </SafeAreaView>
    );
  };

  const Item = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>{item.key}</Text>
        </View>
        <View
          style={{
            // flex: 1,
            // flexDirection: "row-reverse",
            justifyContent: "center",
            alignContent: "center",
            // backgroundColor: "blue",
            width: 20,
          }}
        >
          <TouchableOpacity onPress={() => this._onPress(item.key)}>
            <Image
              source={require("./assets/icons8-delete-24.png")}
              style={{
                flex: 1,
                width: 16,
                height: 16,
                // justifyContent: "center",
                // alignContent: "center",
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  _onPress = (item) => {
    console.log("clicked " + item);
    setItems((oldValue) => {
      return oldValue.filter((itemObj) => itemObj.key != item);
    });
  };

  return FlatListBasics();
}
