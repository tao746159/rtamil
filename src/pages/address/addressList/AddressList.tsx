import React, { ReactElement, useState } from 'react'

interface Props {
  addressList: object[],
  onCheckAddress?: Function,
  oncheckDel: Function
}

export default function AddressList(props: Props): ReactElement {
  console.log(props.addressList)
  let [address, setAddress] = useState()
  const handleDelAddress = () => {

  }
  const handleEditAddress = () => { }
  return (
    <div className="address-list">
      <ul>
        {
          props.addressList.map((item: any, index) => {
            return <li key={index}>
              <div className="address-list-div">
                <a className={item.isCheck ? 'house_active house' : 'house'}></a>
                <div className="address-list-con">
                  <p><span>收货人：</span><span>{item.name}</span></p>
                  <p><span>电话：</span><span>{item.phone}</span></p>
                  <p><span>收货地址：</span><span>{item.address}</span></p>
                </div>
                <div className="operate">
                  <a className="address-edit">编辑</a>
                  <a className="address-del" onClick={() => { props.oncheckDel(item.id) }}>删除</a>
                </div>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}
