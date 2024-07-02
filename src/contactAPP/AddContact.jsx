import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { ActivityIndicator } from 'react-native';
import { hp, wp } from 'react-native-responsive-screen'; 

const AddContact = ({ navigation, route }) => {
  const { setDatas } = route.params;

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [display,setDisplay] = useState(false)

  const handleData = () => {  
    if (name && number) {
      const NAME_REGEX = /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+([ \-']{0,1}[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01FF]+){0,2}[.]{0,1}$/
      if (NAME_REGEX.test(name) !== true){
        Snackbar.show({
          text: "Plz Enter the correct name",
          duration: Snackbar.LENGTH_SHORT,
          action:{
            text: "undo",
            textColor: "green"
          }
        })
      }
      else if (isNaN(number)){
        Snackbar.show({
          text: "Enter the number only!!",
          duration: Snackbar.LENGTH_SHORT,
          action:{
            text: "undo",
            textColor: "green"
          }
        })
      }else if ((number.length)<10){
        Snackbar.show({
          text: "Enter  10 digit number only!!",
          duration: Snackbar.LENGTH_SHORT,
          action:{
            text: "undo",
            textColor: "green"
          }
      })}
        else{
          Snackbar.show({
            text: "Succesfully registered",
            duration: Snackbar.LENGTH_SHORT,
            action:{
              text: "undo",
              textColor: "green"
            }})
            const newData = { name, number };
            setDatas(prevData => [...prevData, newData]);
            setName('');
            setDisplay(true)
            setNumber('')
            setTimeout(() => {
              navigation.navigate("CONTACT-APP")
              setDisplay(false)
              Snackbar.show({
                text: "SUCCESSFULLY REGISTERED!!",
                duration: Snackbar.LENGTH_LONG,
                action: {
                    text: "UNDO",
                    textColor: "green",
                }
              })
              }, 2000);
            }
    }     
    else {
      Snackbar.show({
        text: "Please enter both name and number",
        duration: Snackbar.LENGTH_SHORT,
        action: {
            text: "UNDO",
            textColor: "green"
        }
      })
    }
  };

  return (
    <View>
      <Text style={{ marginLeft: 30, marginTop: 20,fontSize: 25,fontWeight: "800",textDecorationLine: "underline" }}>Enter Contact Details</Text>
      <TextInput
        placeholder='Enter Name'
        value={name}
        onChangeText={(val) => setName(val)}
        style={Styles.name1}
      />
      <TextInput
        placeholder='Enter Number'
        value={number}
        onChangeText={(val) => setNumber(val)}
        style={Styles.name1}
        keyboardType='numeric'
      />
      <TouchableOpacity onPress={handleData}>
        <Text style={Styles.btn}>Enter the data</Text>
      </TouchableOpacity>

      {display && <ActivityIndicator size="extralarge" color="#00ff00" style = {Styles.indicator}></ActivityIndicator>}
    </View>
  );
};

const Styles = StyleSheet.create({
  name1: {
    borderWidth: 1.5,
    marginTop: 30,
    padding: 10,
    borderColor: 'black',
    width: 300,
    height: 70,
    borderRadius: 12,
    marginLeft: 30,
    fontSize: 26,
    fontWeight: '500',
  },
  btn: {
    marginTop: 40,
    borderWidth: 1.5,
    width: 200,
    padding: 18,
    borderRadius: 12,
    height: 70,
    marginLeft: 90,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    backgroundColor: 'lightgreen',
  },
  indicator:{
    marginTop:50,
    textAlign: "center",
    fontSize: 100,
  }, 
});

export default AddContact;



