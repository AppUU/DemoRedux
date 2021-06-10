import {
    createAction,
    createActions
} from 'redux-type-actions';

const actions = createActions({
    setUser: createAction(),
    clearUser: createAction(),
});

export default actions;