import React from 'react'
import { bem } from './utils'

export class Container extends React.Component {
  render(){
    const { size="medium", children, ...props } = this.props
    return (
      <div {...props} className={bem("o-container", {
        [size]: true
      })}>
        {children}
      </div>
    )
  }
}
