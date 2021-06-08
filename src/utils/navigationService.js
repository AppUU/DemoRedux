import * as React from 'react';
import { DeviceEventEmitter } from 'react-native';
export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();
import { CommonActions, StackActions } from '@react-navigation/native';

export function navigate(name, params) {
    if (isReadyRef.current && navigationRef.current) {
        // Perform navigation if the app has mounted
        if (name === 'login') {
            DeviceEventEmitter.emit('EMIT_LOGOUT')
            const resetAction = CommonActions.reset({
                index: 1,
                routes: [{ name: "main" },]
            });
            navigationRef.current.dispatch(resetAction);
        } else {
            navigationRef.current.navigate(name, params);
        }
    } else {
        // You can decide what to do if the app hasn't mounted
        // You can ignore this, or add these actions to a queue you can call later
    }
}