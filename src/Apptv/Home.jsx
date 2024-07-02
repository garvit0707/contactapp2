import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const [focused,setFocused] = useState(0);

  const handleProfile = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select Profiles</Text>
      <View style={styles.imagesContainer}>
        <TouchableOpacity onFocus = {()=>{
          setFocused(0)
        }} style={[styles.imageWrapper,{borderWidth:focused==0?2:0, borderColor: "black",borderRadius: 18}]} onPress={handleProfile}>
          <Image source={require('../images/image1.jpg')} style={styles.image} />
        </TouchableOpacity>

        <View style={styles.imageSpacer} />
        <TouchableOpacity onFocus = {()=>{
          setFocused(1)}} style={[styles.imageWrapper,{borderWidth:focused==1?2:0, borderColor: "black",borderRadius: 18}]} onPress={handleProfile}>
          <Image source={require('../images/image2.jpg')} style={styles.image} />
        </TouchableOpacity>

        <View style={styles.imageSpacer} />
        <TouchableOpacity onFocus = {()=>{
          setFocused(2)}}  style={[styles.imageWrapper,{borderWidth:focused==2?2:0, borderColor: "black",borderRadius: 18}]}  onPress={handleProfile}>
          <Image source={require('../images/image3.jpg')} style={styles.image} />
        </TouchableOpacity>

        <View style={styles.imageSpacer} />
        <TouchableOpacity onFocus = {()=>{
          setFocused(3)}}  style={[styles.imageWrapper,{borderWidth:focused==3?2:0, borderColor: "black",borderRadius: 18}]}  >
          <Image source={require('../images/image4.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  imagesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    marginHorizontal: 15,
  },
  imageSpacer: {
    width: 30,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 18,
  },
})

export default Home;
