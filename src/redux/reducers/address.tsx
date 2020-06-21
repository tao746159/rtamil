import { MoAddress } from '../action/address'
import { GETADDRESS_LIST, ADDADDRESS_LIST, DELADDRESS_LIST, CHECKADDRESS_LIST } from './../constants'


let storeAddress = [
  {
    name: '',
    phone: '',
    isCheck: false,
    id: ''
  }
]

export const reducerAddress = (state = [], action: MoAddress) => {
  console.log(action)
  switch (action.type) {
    case GETADDRESS_LIST:
      return state.filter((item: any) => item.isCheck)
    case ADDADDRESS_LIST:
      return [...state, action.payload]
    case CHECKADDRESS_LIST:
      return state.filter((item: any) => { item.isCheck = false; if (action.id === item.id) { return item.isCheck = true } })
    case DELADDRESS_LIST:
      return state.filter((item: any) => { return item.id !== action.id })
    default:
      return state
  }
}