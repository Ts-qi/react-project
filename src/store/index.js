import { createStore } from 'redux'
import reducer from './reducer'

//1 创建 store ;引入的是redux 的 createStore 方法
// 2  store 有了； 就将 reducer 引入进来 ;将其传给创建好的 store 中；
const store = createStore(reducer);

export default store;