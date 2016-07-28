import React from 'react'
import { bem }  from './utils'

import { Button } from './Button'

export class Tags extends React.Component {
  render(){
    const { children, className, ...props } = this.props
    
    let classNames = "c-tags"
    if (className) classNames += " " + className
    
    return (
      <div {...props} className={classNames}>
        {children}
      </div>
    )
  }
}

export class Tag extends React.Component {
  render(){
    const { children, onClose, ...props } = this.props
    return (
      <Button {...props} className="c-tag">
        {children}
        <span className="c-tag__close" onClick={onClose}>×</span>
      </Button>
    )
  }
}