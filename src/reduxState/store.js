import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import * as reducers from './reducers';

/* 添加中间件 */
const middlewares = [];

/* 将多个reducer作为对象整合到一起 */
export const combinedReducers = combineReducers({
    /* persistReducer实现数据持久化存储 */
    userState: persistReducer(
        {
            key: 'userState',/* 键 */
            storage: AsyncStorage,/* 存储方式 */
            blacklist: [],/* 黑名单 */
        },
        reducers.userStateReducer
    ),
})

export const store = createStore(
    combinedReducers,
    applyMiddleware(...middlewares)
)

export const persistor = persistStore(store)