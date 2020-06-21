import React, { ReactElement, useState, useEffect } from 'react'
import RTinput from '../../../react-types-ui/form/RTinput/RTinput'
import RTbtton from '../../../react-types-ui/form/button/RTbtton'

interface Props {
  onAddClick: Function,
  addIsTrue: boolean,
  handleTabClick: Function
}

export default function AddPop(props: Props): ReactElement {
  let [name, setObj] = useState({ name: '' })
  let [phone, setPhone] = useState({ phone: '' })
  let [address, setAddress] = useState({ address: '' })
  const handleNameChange = (val: string) => {
    setObj({ name: val })
  }
  const handlePhoneChange = (val: string) => {
    setPhone({ phone: val })
  }
  const handleAddressChange = (val: string) => {
    setAddress({ address: val })
  }



  const handleObjAssin = () => {
    if (name.name !== '' || phone.phone !== '' || address.address !== '') {
      let obj = Object.assign({}, name, phone, address, { isCheck: false }, { id: new Date().getTime() })
      props.onAddClick(obj)
      props.handleTabClick()

    }


  }

  return (
    <div className={props.addIsTrue ? "address-pop active" : "address-pop"}>
      <div className="address-pop-top">
        <h4>添加收获地址</h4>
        <a onClick={() => { props.handleTabClick() }}> X </a>
      </div>
      <form>
        <ul>
          <li>
            <RTinput leftText="收货人：" reset={!props.addIsTrue} handleNameChange={handleNameChange}></RTinput>

          </li>
          <li>
            <RTinput leftText="电话：" reset={!props.addIsTrue} handleNameChange={handlePhoneChange}></RTinput>

          </li>
          <li>
            <RTinput leftText="收货地址：" reset={!props.addIsTrue} handleNameChange={handleAddressChange}></RTinput>

          </li>
          <li>
            <RTbtton onNickBtn={handleObjAssin} type="green">确定添加</RTbtton>
          </li>
        </ul>
      </form>
    </div>
  )
}
