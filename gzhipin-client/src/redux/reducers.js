/**
 * 包含多个reducer函数，根据了得state和指定的action返回新的state
 * 
 */
import { combineReducers } from "redux"

const initUser = {
    username:'', // 用户名
    type:'', // 用户类型 qiuzhi/laoban
    msg:'' // 错误提示信息

}

// 产生user状态的reducer
function user(state=initUser, action){
    switch(action.type){
        case 
        
        default:
            return state
    }
}

export default combineReducers({
    user
})

// 向外暴露的状态结构： {xxx: 0, yyy: 0}