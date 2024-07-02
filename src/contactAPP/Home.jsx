import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, ScrollView, TextInput } from 'react-native';
import Snackbar from 'react-native-snackbar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = ({ navigation }) => {
  const [datas, setDatas] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handlename = () => {
    navigation.navigate('Add-contact-screen', { setDatas });
    console.log("key has been pressed!!!");
  };

  const handledelete = (index) => {
    const updatedDatas = [...datas];
    updatedDatas.splice(index, 1);
    setDatas(updatedDatas);
    Snackbar.show({
      text: "Successfully deleted!",
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: "UNDO",
        textColor: "pink"
      }
    })
  }

  const filteredData = datas.filter(item => {
    return item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ marginTop: 10, marginBottom: 10, marginLeft: 50, fontSize: 22, fontWeight: "800", textDecorationLine: "underline" }}>Welcome To Contact App !!</Text>
      <TextInput
        style={Styles.inputsection}
        placeholder='Enter the name to search'
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ScrollView>
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={Styles.item}>
              <Image source={require("../../images/user.png")} style={{ height: 40, width: 40, alignSelf: "center", marginLeft: 15, marginRight: 35 }} />
              <View style={{ flex: 1, paddingLeft: 1 }}>
                <Text style={{ fontSize: 24, fontWeight: "800", marginBottom: 4 }}>{item.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: "600", color: "blue" }}>{item.number}</Text>
              </View>
              <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => handledelete(index)}>
                <Image source={require("../../images/delete.png")} style={{ height: 35, width: 35, marginRight: 30 }} />
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
  item: {
    borderWidth: wp(".5%"),
    borderColor: "grey",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: wp("15%"),
    marginBottom: wp("2.5%"),
    marginLeft: wp("6%"),
    paddingLeft: wp("2%"),
    height: wp("19%"),
    width: wp("90%"),
    backgroundColor: "lightgrey",
    textAlign: "center",
  },
  inputsection: {
    borderWidth: 1,
    borderColor: "grey",
    width: wp("90%"),
    marginLeft: 20,
    borderRadius: 12,
    height: 60,
    marginBottom: wp("5%"),
    fontSize: 24,
    padding: 15,
  }
});

export default Home;



