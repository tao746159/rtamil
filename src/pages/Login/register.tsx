import React, { ReactElement, useState } from 'react'

import './index.styl'
import RTinput from '../../react-types-ui/form/RTinput/RTinput'
import RTbtton from '../../react-types-ui/form/button/RTbtton'
import { Link } from 'react-router-dom'
const loginImg = require('../../image/other/weixiao.png')
const loginpassImg = require('../../image/other/qinzui.png')

interface Props {

}

export default function Login(props: Props): ReactElement {
  let [active, setActive] = useState('phone')
  let [phone, setPhone] = useState('')
  let [password, setPassword] = useState('phone')
  return (
    <div className="login">
      <p className="loing-register">已有账号，<Link to="/login">立即登录</Link></p>
      <div className="login-top">
        <img src={loginImg} alt="" />
      </div>
      <div className="login-content">
        <div className="login-tab">
          <a className={active === 'phone' ? 'active' : ''} onClick={() => { setActive(active = 'phone') }}>手机号注册</a>
          <a className={active === 'email' ? 'active' : ''} onClick={() => { setActive(active = 'email') }}>邮箱注册</a>
        </div>
        <div className="login-tab-cont">
          <div className={active === 'phone' ? 'login-tab-phone' : 'login-tab-phone hide'}>
            <form>
              <ul>
                <li>
                  <RTinput leftText="手机号：" handleNameChange={() => { }}></RTinput>
                </li>
                <li>
                  <RTinput leftText="密码：" handleNameChange={() => { }}></RTinput>
                </li>
                <li>
                  <RTinput leftText="确认密码" handleNameChange={() => { }}></RTinput>
                </li>
                <li>
                  <RTbtton type="green" onNickBtn={() => { }}>注 册</RTbtton>
                </li>
              </ul>
            </form>
          </div>
          <div className={active === 'email' ? 'login-tab-email' : 'login-tab-email hide'}>
            <li>
              <RTinput leftText="邮箱：" handleNameChange={() => { }}></RTinput>
            </li>
            <li>
              <RTinput leftText="密码：" handleNameChange={() => { }}></RTinput>
            </li>
            <li>
              <RTinput leftText="确认密码" handleNameChange={() => { }}></RTinput>
            </li>
            <li>
              <RTbtton type="green" onNickBtn={() => { }}>注 册</RTbtton>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}
