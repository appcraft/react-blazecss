import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'

export class TabDemo extends React.Component {
  render(){
    return (
      <div>
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
        <H3 size="medium">Styling</H3>
        <P>
          Tabs can be styled using the classic `bStyle` prop
        </P>
        <ReactPlayground codeText={`\
export default (
  <div>
    <Tabs defaultActiveKey={1}>
      <Tab eventKey={1} title="Default 1"></Tab>
      <Tab eventKey={2} title="Default 2"></Tab>
    </Tabs>
    <Tabs defaultActiveKey={1} bStyle="secondary">
      <Tab eventKey={1} title="Secondary 1"></Tab>
      <Tab eventKey={2} title="Secondary 2"></Tab>
    </Tabs>
    <Tabs defaultActiveKey={1} bStyle="success">
      <Tab eventKey={1} title="Success 1"></Tab>
      <Tab eventKey={2} title="Success 2"></Tab>
    </Tabs>
    <Tabs defaultActiveKey={1} bStyle="error">
      <Tab eventKey={1} title="Error 1"></Tab>
      <Tab eventKey={2} title="Error 2"></Tab>
    </Tabs>
  </div>
)\
`} />
      </div>
    )
  }
}
