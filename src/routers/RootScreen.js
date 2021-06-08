import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../utils/navigationService';
import MainStackNavigator from './MainStackNavigator';

function RootScreen() {
    return (
        <NavigationContainer ref={navigationRef}>
            <MainStackNavigator />
        </NavigationContainer>
    )
}

export default RootScreen;