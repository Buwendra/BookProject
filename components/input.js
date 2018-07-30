import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const input = (label, value, onChangeText, placeholder, secureTextEntry) => {
    retrun (
        <View style={styles.container}>
            <Text style = {styles.label}> {label}</Text>
             <TextInput
             autocorrect = {false}
             onChangeText = {onChangeText}
             placeholder = {placeholder}
             style = {styles.input}
             secureTextEntry = {secureTextEntry}
             value = {value}
             
             /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        width: '100%',
        borderColor = '#eee',
        borderBottomWidth: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        padding : 5,
        paddingBottom : 0,
        color: '#333',
        fontSize : 17,
        fontWeight :'700',
        width: '100%',
    },
    input: {
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        color: '#333',
        fontSize: 18,
        width: '100%',
    }
});

export  { Input };
