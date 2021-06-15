import React, { useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DiscoverTabScreen from './Discover/DiscoverTabScreen';

export default function DiscoverScreen() {

    const Tab = createMaterialTopTabNavigator();
    const scrollViewRef = useRef().current
    const [scrollEnabled, setScrollEnabled] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <Header
                centerComponent={{ text: '发现', style: { fontSize: 18, color: '#fff' } }}
                barStyle="light-content"
            />
            {/* <ScrollView
                style={{ flex: 1 }}
                ref={scrollViewRef}
                contentContainerStyle={{ flexGrow: 1 }}
                scrollEnabled={scrollEnabled}
                nestedScrollEnabled={true}
            > */}
            {/* <View style={{ height: 250, backgroundColor: 'blue' }} /> */}
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
            {/* </ScrollView> */}
        </View>
    )
}