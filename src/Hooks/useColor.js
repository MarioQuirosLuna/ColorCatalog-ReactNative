import { useEffect, useState } from 'react';
import { generate } from 'shortid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import defaultColors from '../../data/defaultColors.json';

const useColor = () => {
    const [colors, setColors] = useState([]);

    const loadColors = async () => {
        try {
            const colorData = await AsyncStorage.getItem('@ColorListStore:Colors');
            if (colorData) {
                const colors = JSON.parse(colorData);
                setColors(colors);
            }
        } catch (e) {
            console.log(e);
        }
    };

    //Load colors
    useEffect(() => {
        if (colors.length) return;
        loadColors();
    }, []);

    //Save colors
    useEffect(() => {
        const storeColors = async () => {
            try {
                await AsyncStorage.setItem('@ColorListStore:Colors', JSON.stringify(colors));
            } catch (e) {
                console.log(e);
            }
        }
        storeColors();
    }, [colors]);

    const addColor = (color) => {
        const newColor = { id: generate(), color };
        setColors([...colors, newColor]);
    };
    return { colors, addColor };
}

export default useColor;