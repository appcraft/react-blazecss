import React from 'react'
import { bem } from './bem'

export function makeClass(Component, bemName){
  return ({ children, className, ...props }) => {
      let classNames = bemName
      if (className) classNames += " " + className
      
      return <Component {...props} className={classNames}>{children}</Component>
  }
}