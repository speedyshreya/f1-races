import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

function YearSelection(){
    
    return(
        <View style={styles.container}>
<Text>Pick a year</Text>
</View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });
  

export default YearSelection