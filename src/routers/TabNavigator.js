import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import DiscoverScreen from '../screens/DiscoverScreen';
import MineScreen from '../screens/MineScreen';
const { Navigator, Screen } = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                const routeName = route.name;
                let iconName = '';
                if (routeName === 'HomeScreen') {
                    iconName = 'home'
                } else if (routeName === 'VideoScreen') {
                    iconName = 'vimeo'
                } else if (routeName === 'DiscoverScreen') {
                    iconName = 'compass'
                } else if (routeName === 'MineScreen') {
                    iconName = 'user'
                }
                return <Icon name={iconName} size={size} color={color} />
            },
        })}>
            <Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: '首页' }} />
            <Screen name="VideoScreen" component={HomeScreen} options={{ tabBarLabel: '视频' }} />
            <Screen name="DiscoverScreen" component={DiscoverScreen} options={{ tabBarLabel: '发现' }} />
            <Screen name="MineScreen" component={MineScreen} options={{ tabBarLabel: '我的' }} />
        </Navigator>
    )
}
