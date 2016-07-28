import React from 'react'
import { bem, makeClass } from './utils'

export class Table extends React.Component {
  render(){
    const { children, striped, clickable, condensed, className, ...props } = this.props
    
    var classNames = bem("c-table", {
      striped, clickable, condensed
    }, className)
    
    return <table {...props} className={classNames}>{children}</table>
  }
}

export class TR extends React.Component {
  render(){
    const { children, className, heading, clickable, inactive, ...props } = this.props
    
    var classNames = bem("c-table__row", {
      heading, clickable, inactive
    }, className)
    
    return <tr {...props} className={classNames}>{children}</tr>
  }
}

export const THead = makeClass("thead", "c-table__head")
export const TBody = makeClass("tbody", "c-table__body")
export const TD = makeClass("td", "c-table__cell")
export const TH = makeClass("th", "c-table__cell")
export const TCaption = makeClass("caption", "c-table__caption")
