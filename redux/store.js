import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {
    count: 0,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'add':
            return {
                count: state.count + 1,
            }
            break

        default:
            return state
    }
}

// 这里暴露出的是创建store的工厂方法
// 每次渲染都需要重新创建一个store实例
// 防止服务端一直复用旧实例 无法和客户端状态同步
export default function initializeStore() {
    const store = createStore(reducer, initialState, applyMiddleware(ReduxThunk))
    return store
}