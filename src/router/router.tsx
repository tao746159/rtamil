import React, { ReactElement } from 'react'

import Home from '../pages/Home'
import Sort from '../pages/Sort'
import Syouq from '../pages/Shiyouq/Shiyouq'
import My from '../pages/My/My'
import Login from '../pages/Login/Login'
import Register from '../pages/Login/register'

import Address from '../pages/address/Address';

export default [
  { path: '/', name: 'Home', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/sort', name: 'sort', component: Sort, auth: true },
  { path: '/shiyouq', name: 'shiyouq', component: Syouq, auth: true },
  { path: '/my', name: 'my', component: My, auth: true },
  { path: '/address', name: 'address', component: Address, auth: true },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
]