/**
 * 包含了n个请求函数的模块
 */
import ajax from './ajax'

export const reRegister = (user) => ajax('/register', user, 'POST')
export const reLogin = (user) => ajax('/login', user, 'POST')