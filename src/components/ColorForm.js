import React, { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';

const ColorForm = ({ onNewColor = f => f }) => {
    const [inputValue, setInputValue] = useState("");
    const input = useRef();

    return (
        <View style={styles.container}>
            <TextInput
                ref={input}
                style={styles.textInput}
                value={inputValue}
                onChangeText={setInputValue}
                autoCapitalize="none"
                placeholder='Enter a color...'
            />
            <Button
                title="Add"
                onPress={() => {
                    input.current.blur();
                    onNewColor(inputValue);
                    setInputValue("");
                }}
            />
            {/* <Text style={styles.label}>Color Name:</Text>
            <Text style={styles.label}>Hex Code:</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
    },
    textInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 18,
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ColorForm;