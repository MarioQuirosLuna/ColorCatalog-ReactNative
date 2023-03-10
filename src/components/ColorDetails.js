import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const ColorDetails = ({ route }) => {
    return (
        <View style={styles.container}>
            <Text>Color Details:{route.params.color}</Text>
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