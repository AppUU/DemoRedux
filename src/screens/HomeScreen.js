import React, { useEffect } from 'react';
import { Button, SafeAreaView, Text } from "react-native"
import { RouteProp, useRoute, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../reduxState/actions';
import { selectUser } from '../reduxState/selectors';

function HomeScreen() {

    let userData = { name: '123', age: 18 }
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const user = useSelector(selectUser)

    useEffect(() => {
        if (isFocused) {
        }
    }, [isFocused])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>{JSON.stringify(user)}</Text>
            <Button
                title={'存储数据'}
                color="#841584"
                onPress={() => {
                    dispatch(actions.setUser(userData))
                }}
            />
            <Button
                title={'清除数据'}
                color="#841584"
            />
        </SafeAreaView>
    )
}

export default HomeScreen