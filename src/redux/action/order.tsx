import * as action from '../constants'

export interface order{
  type: action.ALLORDER_LISt
  orderList: object[]
}



export function addOrder(list:[]) {
  return {
    type: action.ALLORDER_LISt,
    orderList: list
  }
}

export function unpaidOrder() {
  return {
    type: action.UNPAIDORDER_LIST
  }
}

export function completedOrder() {
  return {
    type: action.COMPLETEDORDER_LIST
  }
}

export function showORder() {
  return {
    type: action.SHOWORDER_LIST
  }
}