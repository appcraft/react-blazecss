import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'

export class TabDemo extends React.Component {
  render(){
    return (
      <div id="tabs">
        <H2 size="large">Tabs</H2>
        <H3 size="medium">Uncontrolled tab example</H3>
        <P>
          Uncontrolled components have internal state and udpate automatically.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Tabs defaultActiveKey={1} animate bStyle="primary">
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
  </Tabs>
)\
`} />

        <H3 size="medium">Controlled tab example (activeKey={2})</H3>
        <P>
          Controlled tabs are pure UI components and rely on external code to update.
          This component has activeKey set to 2 and won't change on clicks.
        </P>
        <ReactPlayground codeText={`\
export default (
  <Tabs activeKey={2} animate bStyle="primary">
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
  </Tabs>
)\
`} />
      </div>
    )
  }
}
