import produce from 'immer';

const initialState = {
    user: null
}

export default (originalState = initialState, action) =>
    produce(originalState, (state) => {
        console.log(action);
        console.log(state)
        switch (action.type) {
            case 'setUser':
                state.user = action.user
            case 'deleteUser':
                state.user = null    
        }
    });