import React from 'react'
import { bem } from './utils'

export class Container extends React.Component {
  render(){
    const { size="medium", className, componentClass, children, ...props } = this.props
    
    let classNames = bem("o-container", {
      [size]: true
    })
    if (className) classNames += " " + className

    const Component = componentClass || "div"
    
    return (
      <Component {...props} className={classNames}>
        {children}
      </Component>
    )
  }
}
