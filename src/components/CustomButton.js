import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ProgressViewIOSComponent } from 'react-native';

const CustomButton = (props) => {
    return (
        <TouchableOpacity style= {{...styles.btn, ...props.style}}
            onPress={props.onPress} >
            <Text style={styles.text}>
                {props.number}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        borderRadius: 30,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        padding: 15,
        margin: 10,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CustomButton;