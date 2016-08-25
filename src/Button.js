import React from 'react'
import { bem }  from './utils'

export class ButtonGroup extends React.Component {
  render(){
    const { children, rounded, size, ghost, ...props } = this.props
    var className = bem("c-button-group", {
      rounded
    })
    
    if (size || ghost){
      return (
        <span {...props} className={className}>
          {React.Children.map(children, el => el && React.cloneElement(el, {
            size, ghost
          }))}
        </span>
      )
    } else {
      return (
        <span {...props} className={className}>
          {children}
        </span>
      )
    }
  }
}

export class Button extends React.Component {
  render(){
    const { componentClass="button", children, bStyle, className, rounded, ghost, size, block, href, ...props } = this.props
    

    var classNames = bem("c-button", {
      ghost: ghost && !bStyle,
      [!ghost && bStyle]: true,
      [ghost && bStyle && ("ghost-" + bStyle)]: true,
      [size]: true,
      rounded,
      block,
    }, {
      [className]: true
    })
    
    if (href){
      return <a {...props} href={href} className={classNames}>{children}</a>
    }
    const Component = componentClass
    return <Component type="button" {...props} className={classNames}>{children}</Component>
  }
}
