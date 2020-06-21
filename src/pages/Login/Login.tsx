import React, { ReactElement, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { login } from'./../../redux/action/login'
import './index.styl'
import RTinput from '../../react-types-ui/form/RTinput/RTinput'
import RTbtton from '../../react-types-ui/form/button/RTbtton'
import { Link } from 'react-router-dom'
const loginImg = require('../../image/other/weixiao.png')
const loginpassImg = require('../../image/other/qinzui.png')

interface Props {
  login: Function
}

function Login(props: Props): ReactElement {
  let [username, setActive] = useState('')
  let [password, setPassword] = useState('')
  console.log()
  const handleOnsumit = () => {
    if (username !== '' && password !== '') {
      props.login({username: username, password: password})
    }
  }
  const handleVlaue = (value: any) => {

  }

  return (
    <div className="login">
      <p className="loing-register">还没有账号，<Link to="/register">立即注册</Link></p>
      <div className="login-top">
        <img src={loginImg} alt="" />
      </div>
      <div className="login-content">
        <div className="login-tab-cont">
          <div className='login-tab-phone'>
            <form>
              <ul>
                <li>
                  <RTinput placeholder="请输入手机号或邮箱" value={username}  handleNameChange={(value:any) => { setActive(username = value)}} rule={['username', {require: true, message:'用户名不能为空'}]}></RTinput>
                </li>
                <li>
                  <RTinput type="password" value={password} rule={['password', {require: true, message:'密码不能为空'}]}  placeholder="请输入密码" handleNameChange={(value:any) => {setPassword(password = value) }}></RTinput>
                </li>
                <li>
                  <RTbtton type="green" onNickBtn={() => {handleOnsumit() }}>登 录</RTbtton>
                </li>
              </ul>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    state
  }
}
const mapDispatchProps = (dispatch: any) => {
  
  return {
    login: (obj: object) => { dispatch(login(obj))  }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Login)