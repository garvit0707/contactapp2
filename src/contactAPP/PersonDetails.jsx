import React from 'react'
import { View,Text, Image, StyleSheet, ViewComponent, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; 

const PersonDetails = ({navigation,route}) => {
    // const {name,number,index,deleteContact} = route.params;
    const handleback=()=>{
        navigation.navigate("CONTACT-APP")
    }

    const handledelete = () => {
        deleteContact(index)
        navigation.navigate("CONTACT-APP");
    }
    
  return (
    <View style = {Styles.profileimage}>
        <View style = {{flexDirection:"row",justifyContent: "space-between",borderBottomWidth:0.4}}>
            <TouchableOpacity onPress={handleback}>
                <Image source={require("../../images/back.png")} style = {Styles.img4}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={handledelete}>
                <Image source={require("../../images/delete.png")} style = {Styles.img4}></Image>
            </TouchableOpacity>
        </View>
        
        <Image source={require("../../images/user2.png")} style = {Styles.img2}></Image>
        <Text style ={{marginTop: hp("4%"),textAlign: "center",fontSize: hp("3.3%"),fontWeight: "800"}}>{name}</Text>
        <View style = {Styles.requiredimage}>
            <Image source={require("../../images/telephone.png")} style = {Styles.img3}></Image>
            <Image source={require("../../images/message.png")} style = {Styles.img3}></Image>
            <Image source={require("../../images/cam-recorder.png")} style = {Styles.img3}></Image>
        </View>
        <View style ={{marginTop: hp("12%")}}>
            <Text style ={{fontSize: hp("3%"),marginLeft: wp("9%"),fontWeight: "500"}}>Contact Info</Text>
            <View style = {{marginTop: hp("4%"),flexDirection: "row",alignItems: "center",gap: wp("4%")}}>
                <Image source={require("../../images/telephone.png")} style = {{marginLeft: wp("9%"),height: wp("8%"), width: wp("8%")}}></Image>
                <Text style ={{fontSize: hp("2.2%"),fontWeight: "600"}}>+91{number}</Text>
            </View>
            <Text style ={{width: wp("100%"),borderBottomWidth: 1,marginTop: wp("2%"),borderColor: "grey"}}></Text>
            <Text style = {{fontSize: hp("3%"),marginLeft: wp("5%"),fontWeight: "500",marginTop: hp("2%")}}>Contact Settings</Text>
            <View style = {{flexDirection: "row",alignItems: "center"}}>
                <Image source={require("../../images/blocked.png")} style = {{marginLeft: wp("5%"),height: wp("6%"), width: wp("6%"),marginTop: hp("3%")}}></Image>
                <Text style = {{marginLeft: wp("4%"),marginTop: hp("2.5%"),fontSize: wp("4.8%"),fontWeight: "500"}}>Block numbers</Text>
            </View>
            <Text style = {{height: hp("20%")}}></Text>
        </View>
    
    </View>
  )
}

const Styles = StyleSheet.create({
    profileimage:{
        backgroundColor: "white"
    },
    img4:{
        height: hp("4%"),
        width: wp("8%"),
        marginLeft: wp("8%"),
        marginTop: hp("2%"),
        marginRight: wp("8%"),
        marginBottom: wp("3%"),
        
    },
    img2: {
        height: 150,
        width: 150,
        borderWidth:1,
        // borderColor: "brown",
        alignSelf: "center",
        marginTop: hp("1%"),
    },
    requiredimage:{
        flex: 1,
        flexDirection: "row",
        marginTop: hp("4%"),
        justifyContent: "space-evenly",
        gap: 10
    },
    img3:{
        height: wp("12%"),
        width: wp("12%")
    }
})
export default PersonDetails;