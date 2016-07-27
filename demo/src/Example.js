import React from 'react'
import {H2, H3, P} from '../../src'

import ReactPlayground from './components/LiveEditor'
import { PropsTable, Props } from './components/PropsTable'

export class Example extends React.Component {
  render(){
    return (
      <div>
        <P>Note that this is just a quick UI rendering example, so you can't really close the notifications...</P>
        <ReactPlayground showSideCode={false} codeText={`\
export default (
  <div>
    <Nav inline>
      <NavContent centered>My APP</NavContent>
      <NavItem bStyle="success" active>Home</NavItem>
      <NavItem right>Menu</NavItem>
      <NavItem right bStyle="primary">Settings</NavItem>
    </Nav>
    <div style={{width: "50%", float: "left", padding: 16}}>
      <Tabs defaultActiveKey={1} animate bStyle="primary">
        <Tab eventKey={1} title="Tab 1">
        	Tab 1 content, with useless buttons :<br />
            <ButtonGroup rounded>
            	<Button bStyle="success">Action 1</Button>
            	<Button bStyle="success" ghost>Action 2</Button>
            </ButtonGroup>
        </Tab>
        <Tab eventKey={2} title={<span>Tab 2 <Badge>click me</Badge></span>}>
        	Tab 2, pretty much empty
        </Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    </div>
    <div style={{paddingLeft: "50%"}}>
      <H3 size="medium">
      	<Toggle bStyle="primary" style={{float: 'right'}} />
        Notifications
      </H3>
      <Alerts>
        <Alert bStyle="primary">Primary alert</Alert>
        <Alert bStyle="secondary">Secondary alert</Alert>
        <Alert bStyle="error">Error !</Alert>
      </Alerts>
    </div>
  </div>
)
`} />
      </div>
    )
  }
}
