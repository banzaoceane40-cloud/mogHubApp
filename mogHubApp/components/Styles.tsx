import {ScrollView, View, Text, TextInput, StyleSheet, Image} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";


const styles =StyleSheet.create({
    mainTxt:{
        paddingTop: 50,
        color: "green",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center"
    },
    
    slogan:{
        color: "orange",
        fontSize: 20,
        textAlign: "center"
    },

    mogHubLogo:{
        height: 350,
        width: 350,
        paddingTop: 25,
        justifyContent: "center",
        alignItems: "center"
    },

    inputFlex:{
        flexDirection: "row",
        marginTop: 25,
        justifyContent: "space-evenly"
    },

    enterTxt:{
        fontWeight: "bold",
    },

    userInputTxt:{
        borderBottomWidth: 1
    },
})

export default styles;