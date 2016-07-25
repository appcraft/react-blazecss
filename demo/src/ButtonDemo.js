import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class ButtonDemo extends React.Component {
  render(){
    return (
      <div id="buttons">
        <H2 size="large">Buttons</H2>
        <H3 size="medium">Styling</H3>
        <p className="p-class">
          Use any of the available blaze styles to quickly create a styled button. Just modify the <code>bStyle</code> prop.
        </p>
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

        <H3 size="medium">Props</H3>
        <table className="c-table c-table--striped c-table--condensed">
          <caption className="c-table__caption">Button props</caption>
          <thead className="c-table__head">
          <tr className="c-table__row c-table__row--heading">
            <th className="c-table__cell" style={{maxWidth: 90}}>Name</th>
            <th className="c-table__cell">Type</th>
            <th className="c-table__cell" style={{maxWidth: 90}}>Default</th>
            <th className="c-table__cell">Description</th>
          </tr>
          </thead>
          <tbody className="c-table__body">
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 90}}>block</td>
              <td className="c-table__cell">boolean</td>
              <td className="c-table__cell" style={{maxWidth: 90}}>false</td>
              <td className="c-table__cell">Set to true to draw a button at full width</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 90}}>bStyle</td>
              <td className="c-table__cell"><span>empty or one of <code>"primary"</code>, <code>"secondary"</code>, <code>"success"</code>, <code>"error"</code></span></td>
              <td className="c-table__cell" style={{maxWidth: 90}}></td>
              <td className="c-table__cell">BlazeCSS style</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 90}}>ghost</td>
              <td className="c-table__cell">boolean</td>
              <td className="c-table__cell" style={{maxWidth: 90}}>false</td>
              <td className="c-table__cell">Set to true to draw a button with inverted colors (white background and colored border)</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 90}}>rounded</td>
              <td className="c-table__cell">boolean</td>
              <td className="c-table__cell" style={{maxWidth: 90}}>false</td>
              <td className="c-table__cell">Set to true to draw with rounded corners</td>
            </tr>
            <tr className="c-table__row">
              <td className="c-table__cell" style={{maxWidth: 90}}>size</td>
              <td className="c-table__cell"><span>empty or one of <code>"xsmall"</code>, <code>"small"</code>, <code>"medium"</code>, <code>"large"</code>, <code>"xlarge"</code>, <code>"super"</code></span></td>
              <td className="c-table__cell" style={{maxWidth: 90}}>medium</td>
              <td className="c-table__cell">BlazeCSS size</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}