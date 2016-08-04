import React from 'react'
import { bem }  from './utils'

export const Bubble = ({ children, className, position="top", animate, ...props }) => (
  <div {...props} 
        className={bem("c-bubble", {
          [position]: true,
        }, {
          "a-bubble": animate,
          "a-bubble--slow": animate === "slow",
          "a-bubble--fast": animate === "fast",
        }, className)}>
    {children}
  </div>
)
