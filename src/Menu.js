import React from 'react'
import { bem }  from './utils'

export const Menu = ({ children, className, shadow, grouped, ...props }) => {
  const classNames = bem("c-menu", {
    [shadow]: true,
    grouped,
  }, className)
  
  return <ul {...props} className={classNames}>{children}</ul>
}

export const MenuItem = ({ children, className, divider, disabled, active, ...props }) => {
    const classNames = bem("c-menu__item", {
      divider, disabled, active
    }, className)
    
    return <li {...props} className={classNames}>{children}</li>
}

export const MenuGroupDivider  = ({ children, className, ...props }) => {
  const classNames = bem("c-menu__group-divider", {
  }, className)
  
  return <li {...props} className={classNames}>{children}</li>
}
