import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import WebScreen from '../screens/WebScreen';
import VideoScreen from '../screens/VideoScreen';
const { Navigator, Screen } = createStackNavigator()

export default function MainStackNavigator() {

    return (
        <Navigator screenOptions={{ headerBackTitle: '返回' }}>
            <Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
            <Screen name="WebScreen" component={WebScreen} />
            <Screen name="VideoScreen" component={VideoScreen} />
        </Navigator>
    )

}