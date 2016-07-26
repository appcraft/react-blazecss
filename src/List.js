import React from 'react'
import { bem }  from './utils'

export class UL extends React.Component {
  render(){
    const { children, unstyled, inline, className, ...props } = this.props
    
    var classNames = bem("c-list", {
      unstyled, inline
    }, {
      [className]: true
    })
    
    return <ul {...props} className={classNames}>{children}</ul>
  }
}

export class OL extends React.Component {
  render(){
    const { children, unstyled, inline, className, ...props } = this.props
    
    var classNames = bem("c-list", {
      unstyled, inline,
      ordered: true
    }, {
      [className]: true
    })
    
    return <ol {...props} className={classNames}>{children}</ol>
  }
}

export class LI extends React.Component {
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
