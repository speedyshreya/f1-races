import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

function combinedButtonActions(){
  console.log('year Selected is :: ${year}')
  navigation.navigate('Options')
}
function YearSelection({navigation}) {
  const [year, setYear] = useState("2022");
  console.log('year Selected is :: ${year}')

  console.log(typeof(year))
  const max = new Date().getFullYear();
  //console.log("MAx")
  //console.log(max)
  const min = max - 20;
  let years = [];

  for (let i = max; i >= min; i--) {
    years.push(i.toString());
  }

  const availableYears = years;
  const pickerItems = availableYears.map((year) => (
    <Picker.Item label={year} value={year} key={year} />
  ));
  //console.log(typeof(year))
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Pick a year</Text>
      
      <Picker
        selectedValue={year}
        onValueChange={(value, index) => setYear(value)}
      >
        {pickerItems}
      </Picker>
      <Button style = {styles.button}
        title="Next"
        onPress={() => {console.log(`year Selected is:: ${year}`); navigation.navigate("Options")}}>
       </Button>
    </View>
  );
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
  }
});

export default YearSelection;