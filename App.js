import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

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
  Pressable,
} from "react-native";

export default function App() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Open up App.js to start working on your app!</Text>
  //       <StatusBar style="auto" />
  //     </View>
  //   );
  // }

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
          bottom: 0,
          right: 20,
          height: 70,
          backgroundColor: "rgba(0,0,255,0.4)",
          borderRadius: 20,
          alignItems: "center",
        }}
        onPress={() => {
          Alert.prompt("", "Enter your TODO item", [
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
          ]);
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>+</Text>
      </TouchableOpacity>
    );
  };

  // const

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
              renderItem={
                ({ item }) => <Item item={item} />
                // (
                //   <View>
                //     <Text style={styles.item}>{item.key}</Text>
                //   </View>
                // )
              }
              keyExtractor={(item) => item.id}

              // <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
          <FloatingButton></FloatingButton>
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
          // backgroundColor: "red",
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
          {/* <View
            style={{
              // flex: 1,
              height: 20,
              width: 20,
              // alignContent: "center",
              // justifyContent: "center",
              right: 10,
            }}
          > */}
          {/* <Icon
              name="delete"
              size={20}
              color="white"
              style={{ height: 20, width: 20 }}
            ></Icon> */}
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
          {/* </View> */}
          {/* <Button title="" onPress={() => this._onPress(item.key)}></Button> */}
        </View>
      </View>
    );
  };

  _onPress = (item) => {
    // your code on item press
    console.log("clicked " + item);
    setItems((oldValue) => {
      return oldValue.filter((itemObj) => itemObj.key != item);
    });
  };

  return FlatListBasics();
}
