import * as React from 'react';
import { connect } from 'react-redux'

import Nothing from '../../components/nothing/Nothing';
import RHeader from '../../components/RHeader/RHeader';
import * as actions from '../../redux/action/address'
import AddressList from './addressList/AddressList';
import RTbtton from '../../react-types-ui/form/button/RTbtton';
import { Dispatch } from 'redux';
import './index.styl'
import AddPop from './addressList/AddPop';

export interface Props {
  addAddress: Function,
  addressList: object[],
  checkAddress: Function,
  delAddress: Function
}

export interface State {
  addressList: object[],
  addIsTrue: boolean,
}

class Address extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      addressList: [],
      addIsTrue: false
    }
  }

  componentDidMount() {
    this.setState({
      addressList: this.props.addressList
    })
  }

  handleCheckAddress = () => { }
  handleAddAddress = (obj: object) => {
    this.props.addAddress(obj)
  }
  handleTabClick = () => {
    this.setState({
      addIsTrue: !this.state.addIsTrue
    })
  }
  render() {
    return (
      <div className="address">
        <RHeader back="back" title="收获地址"></RHeader>
        {
          this.props.addressList.length > 0 ? <AddressList onCheckAddress={(id: string) => { this.props.checkAddress(id) }} oncheckDel={(id: string) => { this.props.delAddress(id) }} addressList={this.props.addressList}></AddressList> : <Nothing img="kulian" errText="您还没有收货地址哦，快去添加！"></Nothing>
        }
        {
          this.props.addressList.length < 6 ? <a className="add-address" onClick={this.handleTabClick}>添加收获地址</a> : ''
        }
        <AddPop addIsTrue={this.state.addIsTrue} onAddClick={this.handleAddAddress} handleTabClick={this.handleTabClick}></AddPop>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    addressList: state.addressList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addAddress: (obj: object) => { dispatch(actions.addAddressAction(obj)) },
    delAddress: (id: string) => { dispatch(actions.delAddressAction(id)) },
    getAddress: () => { dispatch(actions.getAddressAction()) },
    checkAddress: (id: string) => { actions.checkAddressAction(id) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)