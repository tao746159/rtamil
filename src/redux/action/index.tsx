import * as action from '../constants'

export interface SetStateIsShow {
  type: action.SETSTATE_ISSHOW,
  text: string,
  name: string,
  isShow?: boolean
}

export function setStateShow(text: string, name: string, isShow?:boolean): SetStateIsShow {
  return {
    type: action.SETSTATE_ISSHOW,
    text: text,
    name: name
   
  }
}


export type ModifKeep = SetKeep | DelKeep

export interface SetKeep {
  type: action.SETKEEP_LIST,
  list: []
}

export function SetKeepList(list:[]):SetKeep {
  return {
    type: action.SETKEEP_LIST,
    list: list
  }
}



export interface DelKeep {
  type: action.DELKEEP_LIST,
  num: number
}

export function DelKeepList(num: number): DelKeep {
  return {
    type: action.DELKEEP_LIST,
    num: num
  }
}