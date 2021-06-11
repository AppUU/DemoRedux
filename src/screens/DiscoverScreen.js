import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { TabView, SceneMap } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DiscoverTabScreen from './Discover/DiscoverTabScreen';

export default function DiscoverScreen() {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={{ flex: 1 }}>
            <Header
                centerComponent={{ text: '发现', style: { fontSize: 18, color: '#fff' } }}
                barStyle="light-content"
            />
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ height: 250, backgroundColor: 'blue' }} />
                <Tab.Navigator>
                    <Tab.Screen
                        name="Tab1"
                        component={DiscoverTabScreen}
                    />
                    <Tab.Screen
                        name="Tab2"
                        component={DiscoverTabScreen}
                    />
                    <Tab.Screen
                        name="Tab3"
                        component={DiscoverTabScreen}
                    />
                </Tab.Navigator>
            </ScrollView>
        </View>
    )
}