import React from 'react'
import { bem, makeClass }  from './utils'

export const ModalHeader = makeClass("header", "c-modal__header")
export const ModalBody = makeClass("div", "c-modal__body")
export const ModalFooter = makeClass("footer", "c-modal__footer")

export const Modal = ({ children, className, shadow, ...props }) => {
  const classNames = bem("c-modal", {
    [shadow]: true,
  }, className)
  
  return <div {...props} className={classNames}>{children}</div>
}