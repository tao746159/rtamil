import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducerSetSHow, reducerSetKeepList, reducerOrderList } from './reducers'
import { reducerAddress } from './reducers/address'
import {loginReducer} from'./reducers/userReducer'
import { StoreState } from './types'
import { initState, initKeep } from './initState'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducer = combineReducers({
  stateShow: reducerSetSHow,
  keepList: reducerSetKeepList,
  orderList: reducerOrderList,
  addressList: reducerAddress,
  loginList: loginReducer
})

export default function () {
  const store = createStore(reducer, applyMiddleware(thunk, logger));
  return store
}