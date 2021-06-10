import produce from 'immer';

const initialState = {
    user: null
}

export default (originalState = initialState, action) =>
    produce(originalState, (state) => {
        console.log(`actionlog=>${JSON.stringify(action)}`);
        console.log(`statelog=>${JSON.stringify(state)}`);
        switch (action.type) {
            case 'setUser':
                state.user = action.payload
                return;
            case 'clearUser':
                state.user = undefined
                return;
        }
    });