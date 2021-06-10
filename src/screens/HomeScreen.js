import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from "react-native"
import { RouteProp, useRoute, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../reduxState/actions';
import { selectUser } from '../reduxState/selectors';
import { Header, Button, Text } from 'react-native-elements';

function HomeScreen({ navigation }) {

    let userData = { name: 'zs' }
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const user = useSelector(selectUser)

    return (
        <View style={{ flex: 1 }}>
            <Header
                centerComponent={{ text: '首页', style: { fontSize: 18, color: '#fff' } }}
                barStyle="light-content"
            />
            <Button
                title={`存储数据${user?.name}`}
                style={styles.buttonContainer}
                onPress={() => {
                    dispatch(actions.setUser(userData))
                }}
            />
            <Button
                title={'清除数据'}
                style={styles.buttonContainer}
                onPress={() => dispatch(actions.clearUser())}
            />
            <Button
                title='测试web'
                style={styles.buttonContainer}
                onPress={() => {
                    navigation.navigate({
                        name: 'WebScreen',
                        params: {
                            source: {
                                uri: 'http://image.jinshunyc.com/APP/html.html'
                            }
                        }
                    })
                }}
            />
            <Button
                title='测试视频'
                style={styles.buttonContainer}
                onPress={() => {
                    navigation.push('VideoScreen')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginHorizontal: 15,
        marginTop: 12
    }
});

export default HomeScreen