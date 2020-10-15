/*
    login 路由组件
*/
import React, {Component} from 'react'
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'
const ListItem = List.Item

export default class Register extends Component {
    state = {
        username: '',
        password: '',
    }
    
    handleLogin = () => {
        console.log(this.state)
    }

    handleChange = (stateName, val) => {
        this.setState({
            [stateName]: val // jsx语法，stateName传进来是字符串，需要改编成state name 变量
        })
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render() {
        const {userType} = this.state
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入用户名'  onChange={val => {this.handleChange('username', val)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入密码' type="password" onChange={val => {this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.handleLogin}>登&nbsp;&nbsp;&nbsp;陆</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>注册账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}