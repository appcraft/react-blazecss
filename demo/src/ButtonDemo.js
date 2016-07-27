import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class ButtonDemo extends React.Component {
  render(){
    return (
      <div>
        <H2 size="large">Buttons</H2>
        <H3 size="medium">Styling</H3>
        <P>
          Use any of the available blaze styles to quickly create a styled button. Just modify the <code>bStyle</code> prop.
        </P>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Button>Default</Button>{" "}
    <Button bStyle="primary">Primary</Button>{" "}
    <Button bStyle="secondary">Secondary</Button>{" "}
    <Button bStyle="success">Success</Button>{" "}
    <Button bStyle="error">Error</Button>{" "}
    <Button bStyle="error" rounded ghost>Rounded Ghost Error</Button>{" "}
    <Button href="#buttons">Link</Button>{" "}
    <Button disabled>Disabled</Button>
  </div>
)\
`} />
        <H3 size="medium">ButtonGroup</H3>
        <ReactPlayground codeText={`\
export default (
  <ButtonGroup>
    <Button>Default</Button>
    <Button bStyle="primary">Primary</Button>
    <Button bStyle="secondary">Secondary</Button>
    <Button bStyle="success">Success</Button>
    <Button bStyle="error">Error</Button>
  </ButtonGroup>
)\
`} />
        <H3 size="medium">Rounded</H3>
        <ReactPlayground codeText={`\
export default (
  <ButtonGroup rounded>
    <Button>Default</Button>
    <Button bStyle="primary">Primary</Button>
    <Button bStyle="secondary">Secondary</Button>
    <Button bStyle="success">Success</Button>
    <Button bStyle="error">Error</Button>
  </ButtonGroup>
)\
`} />
        <H3 size="medium">ButtonGroup xsmall and ghost</H3>
        <ReactPlayground codeText={`\
export default (
  <ButtonGroup size="xsmall" ghost>
    <Button>Default</Button>
    <Button bStyle="primary">Primary</Button>
    <Button bStyle="secondary">Secondary</Button>
    <Button bStyle="success">Success</Button>
    <Button bStyle="error">Error</Button>
  </ButtonGroup>
)\
`} />
        <H3 size="medium">Sizes</H3>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Button size="xsmall">xsmall</Button>{" "}
    <Button size="small">small</Button>{" "}
    <Button size="medium">medium</Button>{" "}
    <Button size="large">large</Button>{" "}
    <Button size="xlarge">xlarge</Button>{" "}
    <Button size="super">super</Button>
  </div>
)\
`} />
        <H3 size="medium">Block</H3>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Button block>Block</Button>
  </div>
)\
`} />

        <H3 size="medium">Props</H3>
        <PropsTable caption="Button props" data={[
          Props.block,
          Props.bStyle,
          Props.ghost,
          Props.href,
          Props.rounded,
          Props.size
        ]} />

        <PropsTable caption="ButtonGroup props" data={[
          Props.ghost,
          Props.rounded,
          Props.size
        ]} />
      </div>
    )
  }
}