import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import HomeScreen from "./HomeScreen";
import data from "./db.json";
import react,{Component} from "react";
// import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';



export default function GiveReviewScreen() {
  

   const [reviewText, setReviewText] = useState("");
   const [cityName,setCityName] = useState("");
   const [societyName,setSocietyName] = useState("");
   const [ownerName,setOwnerName] = useState("");
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);

   const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const handleSubmitReview = () => {
    // Handle submitting the review with selectedPlace value
   
   console.log(cityName)
   console.log(societyName)
   console.log(ownerName)
   console.log(reviewText)
   console.log(value)
   var answer = confirm("Save data?");

   console.log(answer)
   if(answer){
      navigation.navigate('HomeScreen')
   }
   
    // ...
  };

  

  return (
    <View style={styles.container}>
     
     <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
     <TextInput
        style={styles.reviewInput}
        placeholder="Enter city"
        multiline
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <TextInput
        style={styles.reviewInput}
        placeholder="Enter society here"
        multiline
        value={societyName}
        onChangeText={(text) => setSocietyName(text)}
      />
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
