import React from 'react'
import { bem } from './bem'

export function makeClass(Component, bemName){
  return class extends React.Component {
    render(){
      const { children, className, ...props } = this.props
      
      var classNames = bem(bemName, {
      }, {
        [className]: true
      })
      
      return <Component {...props} className={classNames}>{children}</Component>
    }
  }
}