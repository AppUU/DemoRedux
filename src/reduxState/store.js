import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import * as reducers from './reducers';

const middlewares = [];

export const combinedReducers = combineReducers({
    userState: persistReducer({
        key: 'userState',
        storage: AsyncStorage,
        blacklist: [],
    }, reducers.userStateReducer),
})

export const store = createStore(
    combinedReducers,
    applyMiddleware(...middlewares)
)

export const persistor = persistStore(store)