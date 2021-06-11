import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default function DiscoverTabScreen() {

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                nestedScrollEnabled={true}
                data={[
                    { id: 1, title: '123' },
                    { id: 2, title: '123' },
                    { id: 3, title: '123' },
                    { id: 4, title: '123' },
                    { id: 5, title: '123' },
                    { id: 6, title: '123' },
                    { id: 7, title: '123' },
                    { id: 8, title: '123' },
                    { id: 9, title: '123' },
                ]}
                renderItem={({ item }) => <View style={{ height: 80, backgroundColor: 'red', marginVertical: 4, alignItems: 'center', justifyContent: 'center', }}>
                    <Text>{item.title}</Text>
                </View>}
            />
        </View>
    )
}