import React from 'react'
import { bem }  from './utils'

export class Nav extends React.Component {
  render(){
    const { children, inline, shadow, animate, position, fixed, ...props } = this.props
    
    var className = bem("c-nav", {
      inline,
      [shadow]: true,
      [position]: true,
      fixed,
    }, {
      "a-nav": animate,
    })
    
    return <ul {...props} className={className}>{children}</ul>
  }
}
