import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class BadgeDemo extends React.Component {
  render(){
    return (
      <div id="badges">
        <H2 size="large">Badges</H2>
        <p className="c-paragraph">
          Badges are useful when you want to add additional info. Like a version number of a project or for status messages for individual items.
        </p>
        <H3 size="medium">Styling</H3>
        <p className="c-paragraph">
          Use any of the available blaze styles to quickly create a styled badge. Just modify the <code>bStyle</code> prop.
        </p>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Badge>Default</Badge>{" "}
    <Badge bStyle="primary">Primary</Badge>{" "}
    <Badge bStyle="secondary">Secondary</Badge>{" "}
    <Badge bStyle="success">Success</Badge>{" "}
    <Badge bStyle="error">Error</Badge>
  </div>
)\
`} />
        <H3 size="medium">Rounded</H3>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Badge rounded>Default</Badge>{" "}
    <Badge bStyle="primary" rounded>Primary</Badge>{" "}
    <Badge bStyle="secondary" rounded>Secondary</Badge>{" "}
    <Badge bStyle="success" rounded>Success</Badge>{" "}
    <Badge bStyle="error" rounded>Error</Badge>
  </div>
)\
`} />
        <H3 size="medium">Props</H3>
        <PropsTable caption="Badge props" data={[
          Props.bStyle,
          Props.rounded
        ]} />
      </div>
    )
  }
}