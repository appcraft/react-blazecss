import React from 'react'
import { bem }  from './utils'

export class List extends React.Component {
  render(){
    const { children, unstyled, inline, ordered, className, ...props } = this.props
    
    var classNames = bem("c-list", {
      unstyled, inline, ordered
    }, {
      [className]: true
    })

    const Component = ordered ? "ol" : "ul"
    
    return <Component {...props} className={classNames}>{children}</Component>
  }
}

export class ListItem extends React.Component {
  render(){
    const { children, unstyled, className, ...props } = this.props
    
    var classNames = bem("c-list__item", {
      unstyled
    }, {
      [className]: true
    })
    
    return <li {...props} className={classNames}>{children}</li>
  }
}
