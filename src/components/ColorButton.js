import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, } from 'react-native';

const ColorButton = ({ backgroundColor, onPress = f => f }) => {
    return (
        <TouchableHighlight style={styles.button}
            onPress={() => onPress(backgroundColor)}
            underlayColor="orange"
        >
            <View style={styles.row}>
                <View style={[styles.sample, { backgroundColor }]}></View>
                <Text style={styles.buttonText}>{backgroundColor}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: "rgba(255,255,255,0.8)"
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sample: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center',
        margin: 5,
    },
});

export default ColorButton;