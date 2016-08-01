import React from 'react'
import { bem, makeClass }  from './utils'

export class Drawer extends React.Component {
  render(){
    const { children, className, shadow, position="bottom", animate, visible, ...props } = this.props
    
    var classNames = bem("c-drawer", {
      [position]: true,
      [shadow]: true,
      visible
    }, {
      "a-drawer": animate,
      "a-drawer--slow": animate === "slow",
      "a-drawer--fast": animate === "fast",
    }, className)
    
    return <div {...props} className={classNames}>{children}</div>
  }
}

export const DrawerBody = makeClass("div", "c-drawer__body")

export const DrawerFooter = ({ children, className, block, ...props }) => {
  const classNames = bem("c-drawer__footer", {
    block
  }, className)
  
  return <div {...props} className={classNames}>{children}</div>
}