import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView, TextInput } from 'react-native';
// import Snackbar from 'react-native-snackbar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useRef } from 'react';

const Home = ({ navigation,route }) => {
  const [datas, setDatas] = useState([]);
  const [searchText, setSearchText] = useState('');
  const searchInputref = useRef(null);

  const handlename = () => {
    navigation.navigate('Add-contact-screen',{setDatas})
    console.log("key has been pressed!!!");
  };
  const deleteContact = (index) => {
    const updatedData = [...datas];
    updatedData.splice(index, 1);
    setDatas(updatedData);
  };

  const handlesearch = ()=>{
    if (searchInputref.current){
      searchInputref.current.focus()
    }
  };
  
  const handleprofile=(item,index)=>(
    navigation.navigate("Person Details" ,{name: item.name,number: item.number,index,deleteContact})
  );
 
  const filteredData = datas.filter(item => {
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <View style={{ flex: 1,color: "white",backgroundColor: "white" }}>
      <View style = {[{flexDirection: "row"},Styles.inputdesign]}>
        <TouchableOpacity onPress={handlesearch}>
          <Image
            source={require("../../images/downloadimae.png")}
            style={{
              height: 25,
              width: 25,
              marginTop: 15,
              marginLeft: 12,
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={Styles.inputsection}
          ref= {searchInputref}
          placeholder='Search contacts'
          placeholderTextColor="grey"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Image
          source={require("../../images/mike.png")}
          style={{
            height: 35,
            width: 35,
            marginTop: 19,
            color: "black",
          }}
        />
      </View>
      <ScrollView>
        <FlatList
          data={filteredData}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={Styles.items}>
              <TouchableOpacity onPress={()=>(handleprofile(item,index))} style={{alignSelf: "center",width: wp("20%"),backgroundColor: "white"}}>
                <Image source={require("../../images/user.png")} style={{ height: 45, width: 45, alignSelf: "center", marginLeft: wp("1%"),backgroundColor: "white"}} />
              </TouchableOpacity>
              <View style={{ flex: 1}}>
                <Text  numberOfLines={1} style={[Styles.nametext, { flex: 1,paddingTop: 9,width: "100%",fontSize: 28, fontWeight: "600" ,color: "grey",alignSelf: "center",marginLeft: "10%",marginTop: 10}]}>{item.name}</Text>
              </View>
              <TouchableOpacity style={{ alignSelf: "center"}}>
                <Image source={require("../../images/phone-call.png")} style={{ height: 35, width: 35,marginLeft: 15,paddingLeft:10}} />
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
      <TouchableOpacity style={Styles.data} onPress={handlename}>
        <Image
          source={require("../../images/add.png")}
          style={{
            height: 70,
            width: 70,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  data: {
    position: "absolute",
    bottom: hp("10%"),  
    right: wp("10%"),
    zIndex: 1,
  },
  items: {
    borderBottomWidth: wp(".3%"),
    borderColor: "grey",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: wp("2%"),
    marginBottom: wp("2.5%"),
    marginLeft: wp("6%"),
    paddingLeft: wp("2%"),
    height: wp("19%"),
    width: wp("87%"),
    backgroundColor: "white",
    textAlign: "center",
  },
  inputdesign:{
    // borderWidth: 1,
    margin:10,
    marginTop:2,
    marginLeft: wp("5%"),
    borderRadius: 10,
    textAlign: "center",
    alignItems:"center",
    width: wp("90%"),
    borderBottomWidth:wp("0.2%"),

  },
  inputsection: {
    // borderBottomWidth: wp("0.2%"),
    color: "black",
    // borderWidth:1,
    marginTop: hp("2%"),
    borderColor: "black",
    width: wp("69%"),
    marginLeft: wp("1%"),
    borderRadius: 12,
    height: 60,
    fontSize: 24,
    padding: 15,
  },
  nametext: {
  fontSize: 28,
  fontWeight: '600',
  color: 'grey',
  maxWidth: '100%',
  // borderWidth: 1,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 30,
    color: "red",
  }
});

export default Home;



