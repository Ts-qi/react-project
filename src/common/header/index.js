import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'
// 只有 render 的组件就是无状态组件； 可以写成一个函数； 性能大大提升；
// 用 class 的方式创建，叫做有状态组件，也可以 ，但是性能不好。class 创建的组件 具备完整的生命周期及实例化过程、支持this及ref指向；

const Header = (props) => {
    const { focused, handleInputonfocus, handleInputBlur } = props;
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载 APP</NavItem>
                <NavItem className="right"> 登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames='slide'>
                        <NavSearch
                            className={focused ? 'focused' : ''}
                            onFocus={handleInputonfocus}
                            onBlur={handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6dd;</i>

                </SearchWrapper>

            </Nav>
            <Addition>
                <Button className="write">
                    <i className="iconfont">&#xe608;</i>写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

// 组件获取到 store 中的数据
const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
//组件在改变 store 的内容 就需要改变 dispatch 方法
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputonfocus() {
            const action= {
                type:'search_focus'
            }
            dispatch(action)
        },
        handleInputBlur() {
            const action = {
                type:'search_blur'
            }
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header) ;