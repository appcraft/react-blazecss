import React from 'react'
import {render} from 'react-dom'

import {Badge, Button, ButtonGroup} from '../../src'
import {Calendar, CalendarHeaderControl, CalendarDays, CalendarDayLabels} from '../../src'
import {Nav, NavContent, NavItem} from '../../src'
import {Tabs, Tab} from '../../src'

require('blaze/dist/blaze.min.css')
require('blaze/dist/blaze.animations.min.css')


class CalendarDemo extends React.Component {
  render(){
    return (
      <div>
        <h2>Calendar</h2>
        <div>
          <h3>Calendar (controlled)</h3>
          <Calendar shadow="higher">
            <CalendarHeaderControl label="2016" />
            <CalendarHeaderControl label="January" />
            <CalendarDayLabels dayLabels={["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]} />
            <CalendarDays firstDayIndex={5}
                          dayCount={31}
                          previousDayCount={31}
                          today={14}
                          selected={21} />
            <Button bStyle="primary" block>Today</Button>
          </Calendar>
        </div>
      </div>
    )
  }
}

class TabDemo extends React.Component {
  render(){
    return (
      <div>
        <h2>Tabs</h2>
        <div>
          <h3>Uncontrolled tab example</h3>
          <Tabs defaultActiveKey={1} animate bStyle="primary">
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
          </Tabs>
        </div>
        <div>
          <h3>Controlled tab example (activeKey={2})</h3>
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

class NavDemo extends React.Component {
  render(){
    return (
      <div>
        <h2>Nav</h2>
        <div>
          <h3>Normal</h3>
          <Nav style={{width: 200}}>
            <NavContent centered>My APP</NavContent>
            <NavItem bStyle="success" active>Home</NavItem>
            <NavItem>Menu</NavItem>
            <NavItem bStyle="primary">Settings</NavItem>
          </Nav>
        </div>
        <div>
          <h3>Nav inline</h3>
          <Nav inline shadow="higher" animate>
          {/*<Nav inline shadow="higher" animate position="top" fixed>*/}
            <NavItem bStyle="success" active>Home</NavItem>
            <NavItem>Menu</NavItem>
            <NavItem right bStyle="primary">Settings</NavItem>
          </Nav>
        </div>
      </div>
    )
  }
}

class BadgeDemo extends React.Component {
  render(){
    return (
      <div>
        <h2>Badges</h2>
        <div>
          <h3>Badges</h3>
          <Badge>Badge</Badge>
          <Badge bStyle="primary">Primary</Badge>
          <Badge bStyle="secondary">Secondary</Badge>
          <Badge bStyle="success">Success</Badge>
          <Badge bStyle="error">Error</Badge>
        </div>
        <div>
          <h3>Rounded</h3>
          <Badge bStyle="error" rounded>Rounded</Badge>
        </div>
      </div>
    )
  }
}

class ButtonDemo extends React.Component {
  render(){
    return (
      <div>
        <h2>Buttons</h2>
        <div>
          <Button>Button</Button>
          <Button bStyle="primary">Button</Button>
          <Button bStyle="secondary">Button</Button>
          <Button bStyle="success">Button</Button>
          <Button bStyle="error">Button</Button>
          <Button bStyle="error" rounded ghost>Button</Button>
          <Button disabled>Disabled</Button>
        </div>
        <ButtonGroup>
          <Button>Button</Button>
          <Button bStyle="primary">Button</Button>
          <Button bStyle="secondary">Button</Button>
          <Button bStyle="success">Button</Button>
          <Button bStyle="error">Button</Button>
        </ButtonGroup>
        <br />
        <div>
          <h3>Rounded</h3>
          <ButtonGroup rounded>
            <Button>Button</Button>
            <Button bStyle="primary">Button</Button>
            <Button bStyle="secondary">Button</Button>
            <Button bStyle="success">Button</Button>
            <Button bStyle="error">Button</Button>
          </ButtonGroup>
        </div>
        <div>
          <h3>ButtonGroup xsmall and ghost</h3>
          <ButtonGroup size="xsmall" ghost>
            <Button>Button</Button>
            <Button bStyle="primary">Button</Button>
            <Button bStyle="secondary">Button</Button>
            <Button bStyle="success">Button</Button>
            <Button bStyle="error">Button</Button>
          </ButtonGroup>
        </div>
        <div>
          <h3>Sizes</h3>
          <Button size="xsmall">Button</Button>
          <Button size="small">Button</Button>
          <Button size="medium">Button</Button>
          <Button size="large">Button</Button>
          <Button size="super">Button</Button>
        </div>
        <div>
          <h3>Block</h3>
          <Button block>Button</Button>
        </div>
      </div>
    )
  }
}

let Demo = React.createClass({
  render() {
    return <div>
      <h1>ReactBlazeCSS Demo</h1>
      <div className="c-text">
        <CalendarDemo />
        <TabDemo />
        <NavDemo />
        <BadgeDemo />
        <ButtonDemo />
      </div>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
