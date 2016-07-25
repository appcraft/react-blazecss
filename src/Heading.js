import React from 'react'
import { bem } from './utils'

export class Heading extends React.Component {
  render(){
    const { Component, size, className, children, ...props } = this.props

    const classNames = bem("c-heading", {
      [size]: true
    }, {
      [className]: true
    })
    return <Component {...props} className={classNames}>{children}</Component>
  }
}

export class H1 extends React.Component {
  render(){
    return <Heading Component="h1" size="super" {...this.props} >{this.props.children}</Heading>
  }
}

export class H2 extends React.Component {
  render(){
    return <Heading Component="h2" size="xlarge" {...this.props} >{this.props.children}</Heading>
  }
}

export class H3 extends React.Component {
  render(){
    return <Heading Component="h3" size="large" {...this.props} >{this.props.children}</Heading>
  }
}

export class H4 extends React.Component {
  render(){
    return <Heading Component="h4" size="medium" {...this.props} >{this.props.children}</Heading>
  }
}

export class H5 extends React.Component {
  render(){
    return <Heading Component="h5" size="small" {...this.props} >{this.props.children}</Heading>
  }
}

export class H6 extends React.Component {
  render(){
    return <Heading Component="h6" size="xsmall" {...this.props} >{this.props.children}</Heading>
  }
}