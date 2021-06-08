import React, { useEffect } from 'react';
import { View } from "react-native"
import { RouteProp, useRoute, useIsFocused } from '@react-navigation/native';

function HomeScreen() {

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            console.log('123');
        }
    }, [isFocused])

    return (
        <View>

        </View>
    )
}

export default HomeScreen