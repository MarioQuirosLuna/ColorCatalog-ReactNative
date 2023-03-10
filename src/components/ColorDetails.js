import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Color from 'color'


const ColorDetails = ({ route }) => {
    const { color: name } = route.params;
    const color = Color(name);
    const textColor = { fontSize: 25, padding: 10, color: color.negate().toString() }
    return (
        <View style={[styles.container, { backgroundColor: name }]}>
            <Text style={textColor}>Color Name: {name}</Text>
            <Text style={textColor}>RGB:</Text>
            <Text style={textColor}>{color.rgb().toString()}</Text>
            <Text style={textColor}>HSL:</Text>
            <Text style={textColor}>{color.hsl().toString()}</Text>
            <Text style={textColor}>Luminosity:</Text>
            <Text style={textColor}>{color.luminosity()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});


export default ColorDetails;