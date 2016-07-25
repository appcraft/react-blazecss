import React from 'react'
import { bem }  from './utils'

export class NavItem extends React.Component {
  render(){
    const { children, right, active, bStyle, href, ...props } = this.props
    
    var className = bem("c-nav__item", {
      right, active,
      [bStyle]: true,
    })

    var finalChidren = children
    
    if (href){
      return <a {...props} href={href} className={className}>{finalChidren}</a>
    }

    return <li {...props} className={className}>{finalChidren}</li>
  }
}
