import React from 'react'
import { bem }  from './utils'

export class Toggle extends React.Component {
  render(){
    const { checked, bStyle, animate, onChange, defaultChecked, children, right, ...props } = this.props
    const name = "c-toggle"

    const toggleComponent = (
      <div className={name + "__track"}>
        <div className={name + "__handle"}></div>
      </div>
    )
    return (
      <label {...props} className={bem(name, {[bStyle]: true}, {
        "a-toggle": animate,
        "a-toggle--slow": animate === "slow",
        "a-toggle--fast": animate === "fast",
      })}>
        <input type="checkbox" 
               checked={checked} 
               defaultChecked={defaultChecked}
               onChange={onChange} />
        {!right && toggleComponent}
        {children}
        {right && toggleComponent}
      </label>
    )
  }
}