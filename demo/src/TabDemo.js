import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class TabDemo extends React.Component {
  render(){
    return (
      <div id="tabs">
        <H2 size="large">Tabs</H2>
        <H3 size="medium">Uncontrolled tab example</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <Tabs defaultActiveKey={1} animate bStyle="primary">\n\
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>\n\
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>\n\
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>\n\
  </Tabs>\n\
)\
`} />

        <H3 size="medium">Controlled tab example (activeKey={2})</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <Tabs activeKey={2} animate bStyle="primary">\n\
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>\n\
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>\n\
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>\n\
  </Tabs>\n\
)\
`} />
      </div>
    )
  }
}
