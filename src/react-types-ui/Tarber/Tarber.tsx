import React, { ReactElement, useEffect } from 'react'

import './index.styl'
import { withRouter } from 'react-router'
import { slash } from './../../utils/RegExp/Slash'




function Tarber(props: any): ReactElement<any> {
  useEffect(() => {

    const name = props.location.pathname === '/' ? 'home' : slash(props.location.pathname)
    props.onClick(name)
  }, [])

  let { unselectedTintColor, tintColor, tabBarPosition } = props
  return (
    <div className="tab-bar" style={{ background: `${unselectedTintColor ? unselectedTintColor : '#1A1E27'}` }}>
      {props.children}
    </div >
  )
}
export default withRouter(Tarber)