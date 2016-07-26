import React from 'react'
import { bem }  from './utils'

export class Button extends React.Component {
  render(){
    const { children, bStyle, className, rounded, ghost, size, block, href, ...props } = this.props
    

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
    return <button type="button" {...props} className={classNames}>{children}</button>
  }
}
