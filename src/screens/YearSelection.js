import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { state, useState } from "react";


function YearSelection(){


 
 const [year, setYear] = useState("2022");
 const [newArr, setNewArr] = useState([])
 const testObj = "test"
 let yearArr = [""+1950]
 for(var i= 1951; i<=2022; i++)
    yearArr.push(""+i);
  setNewArr(yearArr)
  //newArr = yearArr.map((item, index) => {return item})
  console.log(newArr[0])
  console.log("type of new warr")
  console.log(typeof(newArr))
  
    console.log(typeof(year))
    console.log(typeof(yearArr))
    console.log(yearArr[0])
    return(
        <View style= {styles.container}>
<Text style = {styles.headline} >Pick a year</Text>
<Text>yearArr{yearArr}</Text>
<Text>YEAR VALUE  {year}</Text>
<Picker selectedValue={year} onValueChange={(value, index)=> setYear(value)} >
   <Picker.Item label={year} value = {year}/> 

 {newArr.map(({item, index, key}) => {
   
   console.log({item})
   console.log({index})
   console.log({key})
   return(<Picker.Item label={item} value={item} key = {key}/> );
 })}
</Picker>
{/* <Picker selectedValue={year} 
   onValueChange= {(value, index) => setYear(value)
  }> 
   {yearArr.map((item, index) => {
        return (<Picker.Item label={item} value={item} key = {index}/>) 
    })}
</Picker> */}

{/* <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)} 
        style={styles.picker}
      >
        
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Belgium" value="Belgium" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Japan" value="Japan" />
      </Picker> */}

</View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headline : {
      textAlign : 'center',
      padding : 15,
      marginVertical : 50,
      fontWeight : "bold",
      fontSize : 20,
    }
  });
  

export default YearSelection;