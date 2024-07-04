import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { ActivityIndicator } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AddContact = ({ navigation, route }) => {
  const { setDatas } = route.params;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [display,setDisplay] = useState(false)



  const handlebacked = () =>{
    navigation.navigate("CONTACT-APP")
  }

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
      }else if ((number.length)<10 && (number.length>10)){
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
              }, 4000);
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
    <View style = {{backgroundColor: "white"}}>
      <View style = {{flexDirection: "row",borderWidth: 0.8,textAlign:"center"}}>
        <TouchableOpacity onPress={handlebacked}>
          <Image source ={require("../../images/back.png")} style = {Styles.img4}></Image>
        </TouchableOpacity>
        <Text style={{marginTop: 13,fontSize: 25,fontWeight: "800"}}>Enter Contact Details</Text>
      </View>
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
        <Text style={Styles.btn}>Enter Details</Text>
      </TouchableOpacity>
      {display && <ActivityIndicator size="large" color="#00ff00" style = {Styles.indicator}></ActivityIndicator>}
      <Text style = {{height: hp("40%")}}>
      
      </Text>
    </View>
   
  );
};

const Styles = StyleSheet.create({
  img4:{
    height: hp("4%"),
    width: wp("8%"),
    marginLeft: wp("4%"),
    marginTop: hp("2%"),
    marginRight: wp("%"),
    marginBottom: wp("3%"),
  },
  name1: {
    borderBottomWidth: 1.5,
    marginTop: 30,
    padding: 10,
    borderColor: 'black',
    width: 300,
    height: 70,
    borderRadius: hp("1%"),
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
    backgroundColor: 'lightblue',
  },
  indicator:{
    marginTop:50,
    textAlign: "center",
    fontSize: 100,
  }, 
});

export default AddContact;



