import React from 'react'
import { bem }  from './utils'

export class Menu extends React.Component {
  render(){
    const { children, className, shadow, grouped, ...props } = this.props
    
    var classNames = bem("c-menu", {
      [shadow]: true,
      grouped,
    }, className)
    
    return <ul {...props} className={classNames}>{children}</ul>
  }
}

export class MenuItem extends React.Component {
  render(){
    const { children, className, divider, disabled, active, ...props } = this.props
    
    var classNames = bem("c-menu__item", {
      divider, disabled, active
    }, className)
    
    return <li {...props} className={classNames}>{children}</li>
  }
}

export class MenuGroupDivider extends React.Component {
  render(){
    const { children, className, ...props } = this.props
    
    var classNames = bem("c-menu__group-divider", {
    }, className)
    
    return <li {...props} className={classNames}>{children}</li>
  }
}
