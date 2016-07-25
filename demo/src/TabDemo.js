import React from 'react'
import {Tabs, Tab} from '../../src'
import {H2, H3} from '../../src'

export class TabDemo extends React.Component {
  render(){
    return (
      <div id="tabs">
        <H2 size="large">Tabs</H2>
        <div>
          <H3>Uncontrolled tab example</H3>
          <Tabs defaultActiveKey={1} animate bStyle="primary">
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
          </Tabs>
        </div>
        <div>
          <H3 size="medium">Controlled tab example (activeKey={2})</H3>
          <Tabs activeKey={2} animate bStyle="primary">
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}
