import React from 'react'
import { bem }  from './utils'

export class Nav extends React.Component {
  render(){
    const { children, inline, shadow, animate, light, position, fixed, ...props } = this.props
    
    var className = bem("c-nav", {
      inline, fixed, light,
      [shadow]: true,
      [position]: true,
    }, {
      "a-nav": animate,
    })
    
    return <ul {...props} className={className}>{children}</ul>
  }
}

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
