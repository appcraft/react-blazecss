import React from 'react'
import { bem } from './bem'

export function makeClass(Component, bemName){
  return class extends React.Component {
    render(){
      const { children, className, ...props } = this.props
      
      let classNames = bemName
      if (className) classNames += " " + className
      
      return <Component {...props} className={classNames}>{children}</Component>
    }
  }
}