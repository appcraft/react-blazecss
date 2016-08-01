import React from 'react'
import { bem, makeClass }  from './utils'

export const Card = ({ children, bStyle, className, shadow, grouped, ...props }) => {
  const classNames = bem("c-card", {
    [shadow]: true,
    [bStyle]: true,
    grouped,
  }, className)
  
  return <div {...props} className={classNames}>{children}</div>
}

export const CardContent = ({ children, className, divider, ...props }) => {
  const classNames = bem("c-card__content", {
    divider
  }, className)
  
  return <div {...props} className={classNames}>{children}</div>
}

export const CardItem = ({ children, className, divider, disabled, active, ...props }) => {
  const classNames = bem("c-card__item", {
    divider, disabled, active
  }, className)
  
  return <div {...props} className={classNames}>{children}</div>
}

export const CardGroupDivider = makeClass("div", "c-card__group-divider")
