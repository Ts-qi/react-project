const defaultState = {
    focused: false,
}
// reducer 可以接受 state ； 但是不能去改变 state ；只能进行一个深拷贝进行操作； 早 return newState
export default (state = defaultState,action)=> {
    if (action.type === 'search_focus') {
        return {
            focused: true,
        }
    }
    if (action.type === 'search_blur') {
        return {
            focused: false
        }
    }


    return state; 
    // state  就是 vuex  里面的 state ;状态初始化
}

/*
改变 state 的数据； 

1 利用 action 定义数据； 
    const  action = {  
        type:'change_value'
}   
    store.dispatch(action)  提交到 reducer 中去做业务逻辑操作；
2 




总结：  

    1  store  是唯一的； 
    2 store 中的数据 ； 是在 reducer 中去处理逻辑；并且深拷贝一个state 的值； 最后在 return newState 中的值，store 在自己进行值的更新； 
    3 reducer  是一个纯函数；纯函数： 给定固定的输入，就有固定的输出；而且不会有任何的副作用；不能有异步 时间等操作；

    4  核心 API： 
            createStore （）；  创建一个 store；
            store.dispatch(action); 进行 action 的派发； 
            store.getState();可以获取到store中的值；
            store.subscrible();订阅 store 的改变；只要 store 的数据改变； 就可以回调响应的方法；

    5 redux-thunk中间件

*/