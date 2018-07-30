import React from 'react';
import {StyleSheet,Text, View} from 'react-native';


export default class home extends React.Component {


    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyCSOdMPsmijyKurThkueks7L-P97EEXMv4",
            authDomain: "bookapp-19925.firebaseapp.com",
            databaseURL: "https://bookapp-19925.firebaseio.com",
            projectId: "bookapp-19925",
            storageBucket: "",
            messagingSenderId: "994516693004"
        }
    }

    render() {
        return (
            <View style = {styles.container}>
            <Text> Welcome to Literally </Text> 
            <Text> Changes you make will automatically reload. </Text> 
            <Text> Testing project. </Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
