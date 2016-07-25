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
