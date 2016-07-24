import React from 'react'
import { bem }  from './utils'

export class Button extends React.Component {
  render(){
    const { children, bStyle, rounded, ghost, size, block, ...props } = this.props
    
    var className = bem("c-button", {
      ghost: ghost && !bStyle,
      [!ghost && bStyle]: true,
      [ghost && bStyle && ("ghost-" + bStyle)]: true,
      [size]: true,
      rounded,
      block,
    })
    
    return <button type="button" {...props} className={className}>{children}</button>
  }
}
