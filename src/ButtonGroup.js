import React from 'react'
import { bem }  from './utils'

export class ButtonGroup extends React.Component {
  render(){
    const { children, rounded, size, ghost } = this.props
    var className = bem("c-button-group", {
      rounded
    })
    
    if (size || ghost){
      return (
        <span className={className}>
          {React.Children.map(children, el => React.cloneElement(el, {
            size, ghost
          }))}
        </span>
      )
    } else {
      return (
        <span className={className}>
          {children}
        </span>
      )
    }
  }
}
