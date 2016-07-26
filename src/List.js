import React from 'react'
import { bem }  from './utils'

export class UL extends React.Component {
  render(){
    const { children, unstyled, inline, ...props } = this.props
    
    var className = bem("c-list", {
      unstyled, inline
    })
    
    return <ul {...props} className={className}>{children}</ul>
  }
}

export class OL extends React.Component {
  render(){
    const { children, unstyled, inline, ...props } = this.props
    
    var className = bem("c-list", {
      unstyled, inline,
      ordered: true
    })
    
    return <ol {...props} className={className}>{children}</ol>
  }
}

export class LI extends React.Component {
  render(){
    const { children, unstyled, inline, ...props } = this.props
    
    var className = bem("c-list__item", {
      unstyled, inline
    })
    
    return <li {...props} className={className}>{children}</li>
  }
}
