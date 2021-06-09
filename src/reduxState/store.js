import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import * as reducers from './reducers';

const middlewares = [];

export const reducer = combineReducers({
    userState: persistReducer({
        key: 'userState',
        storage: AsyncStorage,
        blacklist: [],
    }, reducers.userStateReducer),
})

const persistedReducer = persistReducer({
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['userState'],
}, reducer);

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)

export const persistor = persistStore(store)