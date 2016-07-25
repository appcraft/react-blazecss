import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class ButtonDemo extends React.Component {
  render(){
    return (
      <div id="buttons">
        <H2 size="large">Buttons</H2>
        <H3 size="medium">Normal</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Button>Default</Button>{" "}\n\
    <Button bStyle="primary">Primary</Button>{" "}\n\
    <Button bStyle="secondary">Secondary</Button>{" "}\n\
    <Button bStyle="success">Success</Button>{" "}\n\
    <Button bStyle="error">Error</Button>{" "}\n\
    <Button bStyle="error" rounded ghost>Rounded Ghost Error</Button>{" "}\n\
    <Button disabled>Disabled</Button>\n\
  </div>\n\
)\
`} />
        <H3 size="medium">ButtonGroup</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <ButtonGroup>\n\
    <Button>Button</Button>\n\
    <Button bStyle="primary">Button</Button>\n\
    <Button bStyle="secondary">Button</Button>\n\
    <Button bStyle="success">Button</Button>\n\
    <Button bStyle="error">Button</Button>\n\
  </ButtonGroup>\n\
)\
`} />
        <H3 size="medium">Rounded</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <ButtonGroup rounded>\n\
    <Button>Button</Button>\n\
    <Button bStyle="primary">Button</Button>\n\
    <Button bStyle="secondary">Button</Button>\n\
    <Button bStyle="success">Button</Button>\n\
    <Button bStyle="error">Button</Button>\n\
  </ButtonGroup>\n\
)\
`} />
        <H3 size="medium">ButtonGroup xsmall and ghost</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <ButtonGroup size="xsmall" ghost>\n\
    <Button>Button</Button>\n\
    <Button bStyle="primary">Button</Button>\n\
    <Button bStyle="secondary">Button</Button>\n\
    <Button bStyle="success">Button</Button>\n\
    <Button bStyle="error">Button</Button>\n\
  </ButtonGroup>\n\
)\
`} />
        <H3 size="medium">Sizes</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Button size="xsmall">xsmall</Button>{" "}\n\
    <Button size="small">small</Button>{" "}\n\
    <Button size="medium">medium</Button>{" "}\n\
    <Button size="large">large</Button>{" "}\n\
    <Button size="xlarge">xlarge</Button>{" "}\n\
    <Button size="super">super</Button>\n\
  </div>\n\
)\
`} />
        <H3 size="medium">Block</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Button block>Block</Button>\n\
  </div>\n\
)\
`} />
      </div>
    )
  }
}