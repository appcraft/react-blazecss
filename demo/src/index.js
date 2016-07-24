import React from 'react'
import {render} from 'react-dom'

import {Badge, Button, ButtonGroup, Nav, NavContent, NavItem} from '../../src'
require('blaze/dist/blaze.min.css')
require('blaze/dist/blaze.animations.min.css')


let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-blazecss Demo</h1>
      <div className="c-text">
        <div>
          <h2>Nav</h2>
          <div>
            <h3>Normal</h3>
            <Nav style={{width: 200}}>
              <NavContent centered>My APP</NavContent>
              <NavItem bStyle="success" active>Home</NavItem>
              <NavItem>Menu</NavItem>
              <NavItem bStyle="primary">Settings</NavItem>
            </Nav>
          </div>
          <div>
            <h3>Nav inline</h3>
            <Nav inline shadow="higher" animate>
              <NavItem bStyle="success" active>Home</NavItem>
              <NavItem>Menu</NavItem>
              <NavItem right bStyle="primary">Settings</NavItem>
            </Nav>
          </div>
        </div>
        <div>
          <h2>Badges</h2>
          <div>
            <Badge>Badge</Badge>
            <Badge bStyle="primary">Primary</Badge>
            <Badge bStyle="secondary">Secondary</Badge>
            <Badge bStyle="success">Success</Badge>
            <Badge bStyle="error">Error</Badge>
            <Badge bStyle="error" rounded>Rounded</Badge>
          </div>
        </div>
        <div>
          <h2>Buttons</h2>
          <div>
            <Button>Button</Button>
            <Button bStyle="primary">Button</Button>
            <Button bStyle="secondary">Button</Button>
            <Button bStyle="success">Button</Button>
            <Button bStyle="error">Button</Button>
            <Button bStyle="error" rounded ghost>Button</Button>
            <Button disabled>Disabled</Button>
          </div>
          <ButtonGroup>
            <Button>Button</Button>
            <Button bStyle="primary">Button</Button>
            <Button bStyle="secondary">Button</Button>
            <Button bStyle="success">Button</Button>
            <Button bStyle="error">Button</Button>
          </ButtonGroup>
          <br />
          <div>
            <h3>Rounded</h3>
            <ButtonGroup rounded>
              <Button>Button</Button>
              <Button bStyle="primary">Button</Button>
              <Button bStyle="secondary">Button</Button>
              <Button bStyle="success">Button</Button>
              <Button bStyle="error">Button</Button>
            </ButtonGroup>
          </div>
          <div>
            <h3>ButtonGroup xsmall and ghost</h3>
            <ButtonGroup size="xsmall" ghost>
              <Button>Button</Button>
              <Button bStyle="primary">Button</Button>
              <Button bStyle="secondary">Button</Button>
              <Button bStyle="success">Button</Button>
              <Button bStyle="error">Button</Button>
            </ButtonGroup>
          </div>
          <div>
            <h3>Sizes</h3>
            <Button size="xsmall">Button</Button>
            <Button size="small">Button</Button>
            <Button size="medium">Button</Button>
            <Button size="large">Button</Button>
            <Button size="super">Button</Button>
          </div>
          <div>
            <h3>Block</h3>
            <Button block>Button</Button>
          </div>
          <br />
        </div>
      </div>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
