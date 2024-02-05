import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet ,Alert} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import HomeScreen from "./HomeScreen";
import data from "./db.json";
import DropDownPicker from 'react-native-dropdown-picker';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from "expo-document-picker";
// import fileContent from './db.json';




export default function GiveReviewScreen({ navigation }) {
  

   const [reviewText, setReviewText] = useState("");
  //  const [cityName,setCityName] = useState("");
  //  const [societyName,setSocietyName] = useState("");
   const [ownerName,setOwnerName] = useState("");
   const [open, setOpen] = useState(false);
 //  const [value, setValue] = useState(null);
   const [stateValue, setStateValue] = useState(null);
   const [cityValue, setCityValue] = useState(null);
   const [societyValue, setSocietyValue] = useState(null);

  

   const states = data.states.map((state) => ({
    label: state.name,
    value: state.name,
      }));
  

  const cities = stateValue
    ? data.states.find((state) => state.name === stateValue)?.cities.map((city) => ({
        label: city.name,
        value: city.name,
      }))
    : [];

    const societies = cityValue
    ? data.states.find((state) => state.name === stateValue)
        .cities.find((city) => city.name === cityValue)?.societies.map((society) => ({
          label: society.name,
          value: society.name,
        }))
    : [];

    
    const filePath = './db.json';

    // const saveDataToJsonFile = async () => {
      
    //   // const fileContent = await require('./db.json');
    //   const existingData = require('./db.json');
    //   console.log(existingData);
    //   console.log(existingData.states[0].cities[0].societies[0].owner);

    //   const stateIndex = existingData.states.findIndex((state) => state.name === stateValue);
    //   const cityIndex = existingData.states[stateIndex].cities.findIndex((city) => city.name === cityValue);
    //   const societyIndex = existingData.states[stateIndex].cities[cityIndex].societies.findIndex((society) => society.name === societyValue);
    //   const newData = {
    //     ownerName,
    //     reviewText,
    //   };
    //   existingData.states[stateIndex].cities[cityIndex].societies[societyIndex].owner.someKey = newData;



    // // existingData.someKey = newData;
    // console.log(existingData.states[0].cities[0].societies[0].owner);

    // //   const updatedData = JSON.stringify(existingData);
    // //   await FileSystem.writeAsStringAsync(filePath, updatedData, {
    // //     encoding: FileSystem.EncodingType.UTF8,

    // // });
    // };

    const handleConfirmation = () => {
      Alert.alert(
        'Save Data',
        'Are you sure you want to save the data?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              // saveDataToJsonFile();
              navigation.navigate('HomeScreen');
              console.log("success");
            },
          },
        ],
        { cancelable: false }
      );
    };
    

  const handleSubmitReview = () => {
    // Handle submitting the review with selectedPlace value
    console.log(ownerName);
    console.log(reviewText);
  //  console.log(cityName)
  //  console.log(societyName)
  //  console.log(value)
  //  console.log("State:", stateValue);
  //  console.log("City:", cityValue);
  //  console.log("Society:", societyValue);
  
  //  console.log(newData)
  //  console.log(existingData)
  //  console.log(answer)
  //  var answer = confirm("Save data?");
  //  if(answer){
  //     navigation.navigate('HomeScreen')
  //  }
   console.log("submitting...");
   handleConfirmation();
    // ...
  };

  

  return (
    <View style={styles.container}>
     
     <DropDownPicker
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
      )}
     
    
      <TextInput
        style={styles.reviewInput}
        placeholder="Enter owner name hello bc"
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
