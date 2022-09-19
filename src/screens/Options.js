import React from 'react';
import { ImageBackground, Button, StyleSheet, Text, View } from "react-native";
import { ListRenderItem } from 'react-native';

function Options({navigation}){
    return(
        <View style= {styles.container}>
            <Text style = {styles.headline}>
                Tap on one of the following options to know more!
            </Text>
            
            <Button style = {styles.button} title="Races"/>
          
            <Button style = {styles.button} title = "Constructors"/>
        
            <Button style = {styles.button} title = "Drivers"/>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headline: {
      textAlign: "center",
      padding: 15,
      marginVertical: 50,
      fontWeight: "bold",
      fontSize: 20,
    },
    button: {
      padding : 15,
      marginTop : 15,
    },
    ol: {
        textAlign: "center",
        padding: 15,
        marginVertical: 75,
        fontSize: 15

    }
  });
  

export default Options;