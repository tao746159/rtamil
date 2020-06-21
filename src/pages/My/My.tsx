import React, { ReactElement } from 'react'
import MyTop from './my-top/MyTop'
import './index.styl'
import Mycontainer from './MyContainer/Mycontainer'

interface Props {

}

export default function My({ }: Props): ReactElement {
  return (
    <div className="my">
      <MyTop></MyTop>
      <Mycontainer></Mycontainer>
    </div>
  )
}
