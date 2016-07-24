import React from 'react'
import { bem }  from './utils'

export class NavItem extends React.Component {
  render(){
    const { children, right, active, bStyle, ...props } = this.props
    
    var className = bem("c-nav__item", {
      right, active,
      [bStyle]: true,
    })
    
    return <li {...props} className={className}>{children}</li>
  }
}
