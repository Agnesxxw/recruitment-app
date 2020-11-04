/**
 * 包含n个action creator
 * 异步action
 * 同步action
 */
import {reqRegister, reqLogin} from '../api'
 import { AUTH_SUCCESS, ERROR_MSG } from './action-types'
 // 授权成功的action
const authSuccess = (user) => ({
    type: AUTH_SUCCESS,
    data: user
})
// 错误提示信息的action
const errorMsg = (msg) => ({
    type: ERROR_MSG,
    data: msg
})

// 注册异步action
export const register = (user) => {
    const { username, password, password2, type } = user
    // 做表单的前台验证分发一个errorMsg的同步action
    if(!username){
        return errorMsg('请输入用户名')
    }else if(password !== password2){
        return errorMsg('两次密码输入不一致')
    }
    // 表单输入合法，发送异步请求ajax请求，注册请求
    return async dispatch => {
        const response = await reqRegister(username, password, type)
        const result = response.data
        if(SpeechRecognitionResultList.code === 0){ // 成功

        } else { // 失败
        }
    }
}

// 登陆异步action
export const login = (user) => {
    const { username, password } = user
    // 做表单的前台验证分发一个errorMsg的同步action
    if(!username){
        return errorMsg('请输入用户名')
    }else if(!password){
        return errorMsg('请输入密码')
    }
    // 发送注册请求
    return async dispatch => {
        const response = await reqLogin(user)
        const result = response.data
        if(result.code === 0){ // 成功
            // 分发成功的action
            dispatch(authSuccess(result.data))
        } else { // 失败
            // 分发失败的action
            dispatch(errorMsg(result.msg))
        }
    }
}

