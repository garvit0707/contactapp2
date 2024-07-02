import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Practise = () => {
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={Styles.listitem}>
      <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={Styles.container}>
      <Text style={Styles.text1}>
        This is the flatList implementation of the code!!!
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
        style={Styles.flat}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingTop: '2%',
    borderTopWidth: 3,
    borderTopColor: 'gray',
  },
  text1: {
    fontSize: 30,
    color: 'black',
    padding: '1%',
  },

  listitem: {
    borderWidth: 3,
    width: 200,
    borderColor: 'pink',
    marginLeft: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'grey',
  },

  flat: {
    paddingHorizontal: 10,
    borderColor: "maroon",
    borderWidth: 2,
    height: 500,
    // flexDirection: "row",
    flexWrap: "wrap"
  },
});

export default Practise;

