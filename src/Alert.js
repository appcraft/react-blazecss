import React from 'react'
import { bem }  from './utils'

export class Alerts extends React.Component {
  render(){
    return (
      <div className="c-alerts">
        {this.props.children}
      </div>
    )
  }
}

export class Alert extends React.Component {
  render(){
    const { bStyle, onClose, children, ...props } = this.props
    return (
      <div {...props} className={bem("c-alerts__alert", {
        [bStyle]: true
      })}>
        <button className="c-button c-button--close" onClick={onClose}>×</button>
        {children}
      </div>
    )
  }
}