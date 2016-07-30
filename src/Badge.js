import React from 'react'
import { bem }  from './utils'

export const Badge = ({ children, className, bStyle, rounded, ...props }) => (
  <span {...props} 
        className={bem("c-badge", {
          [bStyle]: true,
          rounded,
        }, className)}>
    {children}
  </span>
)
