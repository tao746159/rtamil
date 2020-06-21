import { LOGIN_LIST, ERROR_MSG, OUTLOGIN_LIST, REGISTER_LIST } from '../constants'

const initState = {
  isAuth: false,
  msg: '',
  usernmae: '',
  redirectTo: ''
}

export const loginReducer = (state = initState, action:any) => {
  switch (action.type) {
    case LOGIN_LIST:
      return { ...state, msg: '', redirectTo: action, ...action.payload }
     default:
    return state
 }
}