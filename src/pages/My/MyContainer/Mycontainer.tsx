import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ChildContainer from '../ChildContainer/ChildContainer'
import { StoreState } from '../../../redux/types'
import * as actions from '../../../redux/action'
import { Dispatch } from 'redux'
import RTbtton from '../../../react-types-ui/form/button/RTbtton'

interface State {
  list: object[],
  state: string
}
interface Props {
  isShow: boolean,
  text: string,
  name: string,
  handleSetText: Function
}
let listArray = [
  {
    name: 'account',
    text: '账户安全',
    index: 0
  },
  {
    name: 'address',
    text: '我的收货地址',
    index: 1
  },
  {
    name: 'keep',
    text: '我的收藏',
    index: 2
  },
  {
    name: 'order',
    text: '我的订单',
    index: 3
  }
  // },
  // {
  //   name: 'site',
  //   text: '设置',
  //   index: 4
  // }
]
class Mycontainer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      list: listArray,
      state: ''
    }
  }
  handleOnOut = () => {
    console.log('out')
  }
  render() {
    const { list } = this.state
    const { handleSetText } = this.props
    return (
      <div className="my-container">
        <ul>
          {
            list.map((item: any, index: number) => {
              return <li key={index}>
                {
                  item.name === 'address' ? <Link to={item.name}><div><span>{item.text}</span><span> &gt; </span></div></Link> : <a onClick={() => { handleSetText(item.text, item.name) }}>
                    <div>
                      <span>{item.text}</span>
                      <span> &gt; </span>
                    </div>
                  </a>
                }
              </li>
            })
          }
        </ul>
        <ChildContainer isShow={this.props.isShow} {...this.props} name={this.props.name} text={this.props.text}></ChildContainer>
        <RTbtton onNickBtn={this.handleOnOut} size="small" type="warning" >退出</RTbtton>
      </div>
    )
  }

}


const mapStateToProps = (state: any) => {

  return {
    isShow: state.stateShow.isShow,
    name: state.stateShow.name,
    text: state.stateShow.text
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleSetText: (text: string, name: string) => { dispatch(actions.setStateShow(text, name)) }
  }
}

// export default Mycontainer

export default connect(mapStateToProps, mapDispatchToProps)(Mycontainer)