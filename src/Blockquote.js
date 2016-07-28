import React from 'react'
import { bem }  from './utils'

export class Blockquote extends React.Component {
  render(){
    const { children, bStyle, className, cite, ...props } = this.props
    
    let classNames = bem("c-blockquote", {
      [bStyle]: true
    })
    if (className) classNames += " " + className
    
    return (
      <blockquote {...props} className={classNames}>
        <p className="c-blockquote__body">
          {children}
        </p>
        {cite && <footer className="c-blockquote__footer">- {cite}</footer>}
      </blockquote>
    )
  }
}
