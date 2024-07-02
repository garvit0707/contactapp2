import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Main = () => {
  const data = [1,1,1,1,1,1,1,1,1,1,1,1]
  const [recentindex,setRecentIndex] = useState("-1")
  

  return (
    <View style={[Styles.comman, { borderWidth: 3, borderColor: "orange" }]}>
      {/* Header */}
      <View style={[Styles.header, { borderWidth: 2, borderColor: "pink" }]}>
        <Image
          style={Styles.img1}
          source={{
            uri: 'https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940',
          }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 2,fontSize: "50" }}>
          <TouchableOpacity>
            <Text style={Styles.headerText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.headerText}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.headerText}>New & Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.headerText}>My list</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.headerText}>Tv Shows</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: 250, marginLeft: 120 }}>
          <TouchableOpacity>
            <Image source={require("../images/downloadimae.png")} style={Styles.img2} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Styles.childrentext}>Children</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../images/active.png")} style={Styles.img3} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Trending Section */}
      <ScrollView>
      <View style={Styles.trendingContainer}>
        <Text style={Styles.trendingTitle}>
          Trending's
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity activeOpacity={1} onFocus = {()=>{
              setRecentIndex(index)
            }} style={[Styles.cardContainer,{borderWidth:recentindex==index?4:0,borderColor: "white"}]} key={index}>
              <Image source={require("../images/card2.jpg")} style={Styles.cardImage} />
            </TouchableOpacity>
          )}
          numColumns={3} 
          contentContainerStyle={Styles.flatListContent} 
        />
        
        <Text style={Styles.trendingTitle}> 
          Favourite Collection
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item2) => item2.toString()}
          renderItem={({ item2, index2 }) => (
            <TouchableOpacity activeOpacity={1} onFocus = {()=>{
              setRecentIndex(index2)
            }} style={[Styles.cardContainer,{borderWidth:recentindex==index2?4:0,borderColor: "white"}]} key={index2}>
              <Image source={require("../images/cinemaimage.jpg")} style={Styles.cardImage} />
            </TouchableOpacity>
          )}
          numColumns={3} 
          contentContainerStyle={Styles.flatListContent} 
        />
      </View> 
      </ScrollView>
    </View>
   
  );
};

const Styles = StyleSheet.create({
  comman: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: "black",
    borderStyle: 'solid',
    height: 60,
    top: 0,
  },
  img1: {
    height: 55,
    width: 100,
    backgroundColor: "black"
  },
  img2: {
    height: 30,
    width: 30,
    tintColor: "white",
    marginLeft: 20,
  },
  img3: {
    height: 30,
    width: 30,
    marginLeft: 20,
  },
  headerText: {
    color: 'white',
    marginLeft: 25,
    fontSize: 20,
  },
  childrentext: {
    paddingLeft: 20,
    fontSize: 17,
  },
  trendingContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  trendingTitle: {
    fontSize: 40,
    color: 'white',
    marginBottom: 10,
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    margin: 10,
    flex: 1,
    borderColor: "pink",
  },
  cardImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 6,
  },
});

export default Main;
