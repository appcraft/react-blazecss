import React from 'react'
import { bem }  from './utils'

export class Nav extends React.Component {
  render(){
    const { children, className, inline, shadow, animate, light, position, fixed, ...props } = this.props
    
    let classNames = bem("c-nav", {
      inline, fixed, light,
      [shadow]: true,
      [position]: true,
    }, {
      "a-nav": animate,
      "a-nav--slow": animate === "slow",
      "a-nav--fast": animate === "fast",
    }, className)
    
    return <div {...props} className={classNames}>{children}</div>
  }
}

export class NavContent extends React.Component {
  render(){
    const { children, className, right, centered, ...props } = this.props
    
    const classNames = bem("c-nav__content", {
      right,
    }, {
      "u-centered": centered
    }, className)
    
    return <span {...props} className={classNames}>{children}</span>
  }
}

export class NavItem extends React.Component {
  render(){
    const { children, className, right, active, centered, bStyle, ...props } = this.props
    
    const classNames = bem("c-nav__item", {
      right, active,
      [bStyle]: true,
    }, {
      "u-centered": centered
    }, className)

    const Component = props.href ? "a" : "span"

    return <Component {...props} className={classNames}>{children}</Component>
  }
}
