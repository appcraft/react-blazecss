import React from 'react'
import { bem }  from './utils'

export const Overlay = ({ 
    children, className, 
    dismissable, transparent, fullpage, animate, 
    ...props }) => (
  <span {...props} 
        className={bem("c-overlay", {
          dismissable, transparent, fullpage
        }, {
          "a-overlay": animate,
          "a-overlay--slow": animate === "slow",
          "a-overlay--fast": animate === "fast",
        }, className)}>
    {children}
  </span>
)
