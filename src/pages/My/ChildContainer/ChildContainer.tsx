import React, { ReactElement } from 'react'
import { connect } from 'react-redux'

import RHeader from '../../../components/RHeader/RHeader'
import Account from './components/Account'
import Keep from './components/Keep'
import { StoreKeep } from '../../../redux/types'
import * as actions from '../../../redux/action'
import * as actionOrder from '../../../redux/action/order'
import { Dispatch } from 'redux'
import Order from './components/Order'

interface Props {
  text: string,
  isShow: boolean,
  name: string,
  handleSetText: Function,
  handleDelKeep: Function,
  handleAddKeep: Function,
  handleAddOrder: Function,
  handleUnpaidOrder: Function,
  handleCompletedOrder: Function,
  handleShowOrder: Function,
  list: object[],
  orderList: object[]
}

let list = [
  {
    src: "ms_01",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    price: 88
  },
  {
    src: "ms_02",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    price: 18
  }
];
let topList = [
  {
    name: 'all',
    text: '全部订单',
    index: 0,
  },
  {
    name: 'unpaid',
    text: '未付款订单',
    index: 1
  },
  {
    name: 'completed',
    text: '已完成订单',
    index: 2
  }
]

let orderList = [
  {
    src: "ms_01",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    num: 1,
    price: 88,
    paying: true
  },
  {
    src: "ms_02",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    num: 2,
    price: 58,
    paying: false
  }
]
class ChildContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)

  }
  componentDidMount() {
    console.log(this.props)
    this.props.handleAddKeep(list)
    this.props.handleAddOrder(orderList)
    list = []
  }
  handleOrderTab = (name: string) => {
    console.log(this.props)
    switch (name) {
      case 'all':
        return this.props.handleShowOrder()
      case 'unpaid':
        return this.props.handleUnpaidOrder()
      case 'completed':
        return this.props.handleCompletedOrder()
    }
    console.log(name)
  }
  handleCompleted() {

  }
  render() {
    const { isShow, handleSetText, text, name, handleDelKeep } = this.props

    return (
      <div className={this.props.isShow ? 'child-container active' : 'child-container'}>
        <RHeader onBack={() => { handleSetText && handleSetText('') }} back="back" title={text}></RHeader>
        <Account isClass={name === 'account'}></Account>
        <Keep onDel={(num: number) => { handleDelKeep && handleDelKeep(num) }} isClass={name === 'keep'} list={this.props.list}></Keep>
        <Order isClass={name === 'order'} toplist={topList} orderList={this.props.orderList} handleOrderTab={this.handleOrderTab}></Order>
      </div>
    )
  }

}

const mapStateToProps = (state: any) => {
  return {
    list: state.keepList,
    orderList: state.orderList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleDelKeep: (num: number) => { dispatch(actions.DelKeepList(num)) },
    handleAddKeep: (list: []) => { dispatch(actions.SetKeepList(list)) },
    handleAddOrder: (orderList: []) => (dispatch(actionOrder.addOrder(orderList))),
    handleUnpaidOrder: () => { dispatch(actionOrder.unpaidOrder()) },
    handleCompletedOrder: () => { dispatch(actionOrder.completedOrder()) },
    handleShowOrder: () => { dispatch(actionOrder.showORder()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChildContainer)