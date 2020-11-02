/**
 * 包含n个action creator
 * 异步action
 * 同步action
 */
import {reqRegister, reqLogin} from '../api'
 
// 注册异步action
export const register = (user) => {
    // 发送注册请求
    return async dispatch => {
        const response = await reqRegister(user)
        const result = response.data
        if(SpeechRecognitionResultList.code === 0){ // 成功

        } else { // 失败
        }
    }
}

// 登陆异步action
export const login = (user) => {
    // 发送注册请求
    return async dispatch => {
        const response = await reqLogin(user)
        const result = response.data
        if(result.code === 0){ // 成功

        } else { // 失败
        }
    }
}

