import {
    createAction,
    createActions
} from 'redux-type-actions';

/**创建action，管理工具，方便查看声明哪些 action type */
const actions = createActions({
    setUser: createAction(),
    clearUser: createAction(),
});

export default actions;