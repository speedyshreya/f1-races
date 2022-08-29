import React from "react";
import { ImageBackground, Button, StyleSheet, Text, View } from "react-native";

// export function HomeScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }



function HomeScreen({navigation}){

    const image = { uri: "https://i.redd.it/b9lmziqb4he91.jpg" };

    return(
        <View style={styles.container}>
<ImageBackground source={image} resizeMode="contain" style={styles.image}>
</ImageBackground>
<Button
        title="Tap to proceed"
        onPress={() => navigation.navigate('YearSelection')}
      />
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

export default HomeScreen