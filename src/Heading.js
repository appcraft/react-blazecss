import React from 'react'
import { bem } from './utils'

function makeHeading(Component, defaultSize){
  return ({ size=defaultSize, className, children, ...props }) => {
    const classNames = bem("c-heading", {
      [size]: true
    }, {
      [className]: true
    })
    return <Component {...props} className={classNames}>{children}</Component>
  }
}

export const H1 = makeHeading("h1", "super")
export const H2 = makeHeading("h2", "xlarge")
export const H3 = makeHeading("h3", "large")
export const H4 = makeHeading("h4", "medium")
export const H5 = makeHeading("h5", "small")
export const H6 = makeHeading("h6", "xsmall") 

export const SubHeading = ({ className, children, ...props }) => {
  var classNames = "c-heading c-heading__sub"
  if (className) classNames += " " + className
  return <span {...props} className={classNames}>{children}</span>
}
