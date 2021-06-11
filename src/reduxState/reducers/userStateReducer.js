import produce from 'immer';

/**初始化state */
const initialState = {
    user: null,
    token: '',
}

/**reducer接收两个参数：1、state；2、action ，并且返回一个新的state */
export default (originalState = initialState, action) =>
    /**
     * produce高性能数据处理框架，
     * 接收两个参数：1、将要修改的对象，2、临时对象回调；
     * produce返回的是一个新的对象，而参数1始终保持不变
     */
    produce(originalState, (state) => {
        switch (action.type) {
            case 'setUser':
                state.user = action.payload;
                state.token = state.user.token;
                //别忘记return了，否则接收不了改变的值
                return;
            case 'clearUser':
                state.user = undefined;
                state.token = '';
                return;
        }
    });
/**
 * 备注：
 * immer原理：
 * 1)将所需改变的对象Current;
 * 2)复制到临时代理对象中进行更改Draft;
 * 3)完成更改时生产新的对象Next.
 * 可以简单的修改数据来与数据进行交互，同时保留初始数据。
 */
