import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
const { Navigator, Screen } = createStackNavigator()

export default function MainStackNavigator() {

    return (
        <Navigator screenOptions={{ headerBackTitle: '返回' }}>
            <Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
            
        </Navigator>
    )

}