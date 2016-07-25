import React from 'react'
import {Button, ButtonGroup, H2, H3} from '../../src'

export class ButtonDemo extends React.Component {
  render(){
    return (
      <div id="buttons">
        <H2 size="large">Buttons</H2>
        <div>
          <Button>Default</Button>{" "}
          <Button bStyle="primary">Primary</Button>{" "}
          <Button bStyle="secondary">Secondary</Button>{" "}
          <Button bStyle="success">Success</Button>{" "}
          <Button bStyle="error">Error</Button>{" "}
          <Button bStyle="error" rounded ghost>Rounded Ghost Error</Button>{" "}
          <Button disabled>Disabled</Button>
        </div>
        <div>
          <H3 size="medium">ButtonGroup</H3>
          <ButtonGroup>
            <Button>Button</Button>
            <Button bStyle="primary">Button</Button>
            <Button bStyle="secondary">Button</Button>
            <Button bStyle="success">Button</Button>
            <Button bStyle="error">Button</Button>
          </ButtonGroup>
        </div>
        <div>
          <H3 size="medium">Rounded</H3>
          <ButtonGroup rounded>
            <Button>Default</Button>
            <Button bStyle="primary">Primary</Button>
            <Button bStyle="secondary">Secondary</Button>
            <Button bStyle="success">Success</Button>
            <Button bStyle="error">Error</Button>
          </ButtonGroup>
        </div>
        <div>
          <H3 size="medium">ButtonGroup xsmall and ghost</H3>
          <ButtonGroup size="xsmall" ghost>
            <Button>Default</Button>
            <Button bStyle="primary">Primary</Button>
            <Button bStyle="secondary">Secondary</Button>
            <Button bStyle="success">Success</Button>
            <Button bStyle="error">Error</Button>
          </ButtonGroup>
        </div>
        <div>
          <H3 size="medium">Sizes</H3>
          <Button size="xsmall">xsmall</Button>{" "}
          <Button size="small">small</Button>{" "}
          <Button size="medium">medium</Button>{" "}
          <Button size="large">large</Button>{" "}
          <Button size="xlarge">xlarge</Button>{" "}
          <Button size="super">super</Button>
        </div>
        <div>
          <H3 size="medium">Block</H3>
          <Button block>Block</Button>
        </div>
      </div>
    )
  }
}