import React from 'react'
import { bem }  from './utils'

import { Button } from './Button'
import { Menu } from './Menu'
import { Overlay } from './Overlay'
import shallowCompare from 'react-addons-shallow-compare'

function wrapClick(element, clickHandler){
  if (element.props && element.props.onClick){
    return React.cloneElement(element, {
      onClick: (e) => {
        element.props.onClick(e)
        clickHandler(e)
      }
    })
  }
  return element
}

export class DropdownMenu extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Important to be lazy here as the children will be cloned with new props
    return shallowCompare(this, nextProps, nextState);
  }

  render(){
    const { children, handleToggle } = this.props
    return (
      <Menu grouped 
            shadow="higher"
            style={{zIndex: 10, position: 'absolute', minWidth: 200, maxWidth: 300}}>
        {React.Children.map(children, c => wrapClick(c, handleToggle))}
      </Menu>
    )
  }
}

export class DropdownButton extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      open: false
    }

    this.handleToggle = () => {
      this.setState({ open: !this.state.open })
    }
  }

  render(){
    const { children, label, ...props } = this.props
    const { open } = this.state

    return (
      <div style={{position: 'relative'}}>
        <Button {...props} 
                active={open}
                onClick={this.handleToggle}>
          {label} <span className="caret" />
        </Button>
        {open && <Overlay dismissable fullpage transparent onClick={this.handleToggle} />}
        {open && <DropdownMenu handleToggle={this.handleToggle}>{children}</DropdownMenu>}
      </div>
    )
  }
}
