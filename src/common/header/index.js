import React, { Component } from 'react'
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
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        }
    }
    handleInputonfocus = ()=> {
        this.setState ({
            focused:true,
        })
    }
    handleInputBlur = ()=> {
        this.setState({
            focused: false,
        })
    }
    render () {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载 APP</NavItem>
                    <NavItem className="right"> 登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            classNames='slide'>
                            <NavSearch 
                                className={ this.state.focused ? 'focused': ''}
                                onFocus={this.handleInputonfocus}
                                onBlur={this.handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe6dd;</i>
                        
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
}
export default Header ;