/*
    register 路由组件
*/
import React, {Component} from 'react'
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button} from 'antd-mobile'
import Logo from '../../components/logo/logo'
const ListItem = List.Item

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        confPassword: '', // 确认密码
        userType: 'qiuzhi', // 用户类型, 只有qiuzhi和laoban两种
    }
    
    handleRegister = () => {
        console.log(this.state)
    }

    handleChange = (stateName, val) => {
        this.setState({
            [stateName]: val // jsx语法，stateName传进来是字符串，需要改编成state name 变量
        })
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
                        <InputItem onChange={val => {this.handleChange('username', val)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val => {this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" onChange={val => {this.handleChange('confPassword', val)}}>确认密码：</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>用户类型：</span>
                            <Radio checked={userType === 'qiuzhi'? true : false } onChange={() => {this.handleChange('userType', 'qiuzhi')}}>&nbsp;&nbsp;求职</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={userType === 'laoban'? true : false } onChange={() => {this.handleChange('userType', 'laoban')}}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.handleRegister}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}