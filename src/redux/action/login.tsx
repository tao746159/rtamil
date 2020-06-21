import * as action from './../constants'
import { Dispatch } from 'redux'
import axios from 'axios'


const authSuccess = (obj:object) => {
  return {
    type: action.LOGIN_LIST,
    payload: obj
  }
}

const errorMsg = (msg: string) => {
  return {
    type: action.ERROR_MSG,
    payload: msg
  }
}

interface login{
  code: number,
  data: object
}

export const login = (obj: any) => (dispatch:any) => {
     axios.post('/users/login', obj).then((res:any) =>{
       if (res.code === 200) {
        dispatch(authSuccess(res.data))
      } else {
        dispatch(errorMsg(res.message))
      }
    } )
  
}