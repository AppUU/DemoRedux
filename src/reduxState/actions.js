import {
    createAction,
    createActions
} from 'redux-type-actions';

const actions = createActions({
    setUser: createAction()
});

export default actions;