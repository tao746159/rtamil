import { SetStateIsShow, ModifKeep } from '../action'
import { StoreState,StoreKeep } from '../types'
import { SETSTATE_ISSHOW, SETKEEP_LIST,SHOWORDER_LIST, DELKEEP_LIST, ALLORDER_LISt, UNPAIDORDER_LIST, COMPLETEDORDER_LIST } from '../constants'
import * as action from '../constants'

let storeState = {
  isShow: false,
  name: '',
  text: ''
}



export function reducerSetSHow(state = storeState, action: SetStateIsShow) {

  switch (action.type) {
    case SETSTATE_ISSHOW:
      return {...state, isShow: !state.isShow, text: action.text, name: action.name }   
    default:
      return state
  }
}

export function reducerSetKeepList(state = [], action: ModifKeep) {
  console.log(action)
  switch (action.type) {
    case SETKEEP_LIST:
      return  [...state, ...action.list]
    case DELKEEP_LIST:
      return state.filter( (item,index) => { return index !== action.num} )
    default:
      return state
  }
}

//我的订单reducer
export const reducerOrderList = (state = [], action: any) => {
  console.log(action)
  switch (action.type) {
    case ALLORDER_LISt:
      return [...state, ...action.orderList]
    case UNPAIDORDER_LIST:
      return state.filter((item:any) => item.paying === false)
    case COMPLETEDORDER_LIST:
      return state.filter((item: any) => item.paying === true)
    case SHOWORDER_LIST:
    default:
      return state
  }
}