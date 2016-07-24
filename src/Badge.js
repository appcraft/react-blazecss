import React from 'react'
import { bem }  from './utils'

export class Badge extends React.Component {
  render(){
    const { children, bStyle, rounded, ...props } = this.props
    
    var className = bem("c-badge", {
      [bStyle]: true,
      rounded,
    })
    
    return <span type="button" {...props} className={className}>{children}</span>
  }
}
