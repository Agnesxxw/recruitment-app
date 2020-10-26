import ajax from './ajax'

export const reRegister = (user) => ajax('/register', user, 'POST')
export const reLogin = (user) => ajax('/login', user, 'POST')