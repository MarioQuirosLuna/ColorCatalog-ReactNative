import { useState } from 'react';
import { FlatList, StyleSheet, } from 'react-native';
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';

import useColor from '../Hooks/useColor';

const ColorList = ({ navigation }) => {
    const { colors, addColor } = useColor();

    return (
        <>
            <ColorForm
                onNewColor={newColor => {
                    addColor(newColor);
                }}
            />
            <FlatList style={[styles.container]}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <ColorButton
                            backgroundColor={item.color}
                            onPress={() => navigation.navigate("ColorDetails", { color: item.color })}
                        />
                    );
                }}
                keyExtractor={item => item.id}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
});

export default ColorList;