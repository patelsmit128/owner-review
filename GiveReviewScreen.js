import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import HomeScreen from "./HomeScreen";
import data from "./db.json";
import react,{Component} from "react";
// import { Dropdown } from 'react-native-element-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';
// import fs from 'fs-extra';





export default function GiveReviewScreen() {
  

   const [reviewText, setReviewText] = useState("");
   const [cityName,setCityName] = useState("");
   const [societyName,setSocietyName] = useState("");
   const [ownerName,setOwnerName] = useState("");
   const [open, setOpen] = useState(false);
 //  const [value, setValue] = useState(null);
   const [stateValue, setStateValue] = useState(null);
   const [cityValue, setCityValue] = useState(null);
   const [societyValue, setSocietyValue] = useState(null);

  

  //  const states = data.states.map((state) => ({
  //   label: state.name,
  //   value: state.name,
  //     }));
  

  // const cities = stateValue
  //   ? data.states.find((state) => state.name === stateValue)?.cities.map((city) => ({
  //       label: city.name,
  //       value: city.name,
  //     }))
  //   : [];

  //   const societies = cityValue
  //   ? data.states.find((state) => state.name === stateValue)
  //       .cities.find((city) => city.name === cityValue)?.societies.map((society) => ({
  //         label: society.name,
  //         value: society.name,
  //       }))
  //   : [];

    // const appendToDb = async () => {
    //     // Construct the new data to append
    //     const newData = {
    //       name: societyValue,
    //       owner: [
    //         {
    //           name: ownerName,
    //           review: [reviewText],
    //         },
    //       ],
    //     };
    // }
    // const existingData = data.states.find((state) => state.name === stateValue)
    //                 ?.cities.find((city) => city.name === cityValue)?.societies;

    
    
    
    

  const handleSubmitReview = () => {
    // Handle submitting the review with selectedPlace value
    console.log(ownerName)
    console.log(reviewText)
  //  console.log(cityName)
  //  console.log(societyName)
  //  console.log(value)
  //  console.log("State:", stateValue);
  //  console.log("City:", cityValue);
  //  console.log("Society:", societyValue);
  
  //  console.log(newData)
  //  console.log(existingData)
  //  console.log(answer)
   var answer = confirm("Save data?");
   if(answer){
      navigation.navigate('HomeScreen')
   }
   
    // ...
  };

  

  return (
    <View style={styles.container}>
     
     {/* <DropDownPicker
        open={open}
        placeholder="Select State"
        value={stateValue}
        items={states}
        setOpen={setOpen}
        setValue={setStateValue}
        //onChangeItem={(item) => setStateValue(item.value)}
      />
      {stateValue && (
        <DropDownPicker
          open={open}
          placeholder="Select City"
          value={cityValue}
          items={cities}
          setOpen={setOpen}
          setValue={setCityValue}
        //   onChangeItem={(item) => setCityValue(item.value)}
        />
      )}
      {cityValue && (
        <DropDownPicker
         open={open}
          placeholder="Select Society"
          value={societyValue}
          items={societies}
          setOpen={setOpen}
          setValue={setSocietyValue}
        />
      )} */}
     
    
      <TextInput
        style={styles.reviewInput}
        placeholder="Enter owner name"
        multiline
        value={ownerName}
        onChangeText={(text) => setOwnerName(text)}
      />
     <TextInput
        style={styles.reviewInput}
        placeholder="Enter your review here"
        multiline
        value={reviewText}
        onChangeText={(text) => setReviewText(text)}
      />

{/* <Text>Welcome to See review page Review</Text> */}
      

      <Button title="Submit Review" onPress={handleSubmitReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  reviewInput: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});
