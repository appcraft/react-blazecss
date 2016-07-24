import React from 'react'
import { bem }  from './utils'

export class NavContent extends React.Component {
  render(){
    const { children, right, active, centered, bStyle, ...props } = this.props
    
    var className = bem("c-nav__content", {
      right, active,
      [bStyle]: true,
    }, {
      "u-centered": centered
    })
    
    return <li {...props} className={className}>{children}</li>
  }
}
