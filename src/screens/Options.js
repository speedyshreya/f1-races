import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Button, StyleSheet, Text, View } from "react-native";
import { ListRenderItem } from 'react-native';
//{route.params.paramKey}

const Options = ({route, navigation}) => {
   // const {yearValue, test} = route.params;
   const {year} = route.params;
    return(
        <View style= {styles.container}>
            <Text style = {styles.headline}>
                Tap on one of the following options to know more for the year - {yearValue}
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