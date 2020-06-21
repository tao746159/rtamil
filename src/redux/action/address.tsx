import * as action from './../constants'

export interface addAddress {
  type: action.ADDADDRESS_LIST,
  payload: any
}

export interface delAddress {
  type: action.DELADDRESS_LIST,
  id: string
}

export interface getAddress {
  type: action.GETADDRESS_LIST
}

export interface checkAddress {
  type: action.CHECKADDRESS_LIST,
  id: string
}

export type MoAddress = addAddress | delAddress | getAddress | checkAddress

export const addAddressAction = (obj: object) => {
  return {
    type: action.ADDADDRESS_LIST,
    payload: obj
  }
}

export const delAddressAction = (id: string) => {
  return {
    type: action.DELADDRESS_LIST,
    id: id
  }
}

export const getAddressAction = () => {
  return {
    type: action.GETADDRESS_LIST
  }
}

export const checkAddressAction = (id: string) => {
  return {
    type: action.CHECKADDRESS_LIST,
    id: id
  }
}