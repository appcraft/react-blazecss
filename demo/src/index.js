import React from 'react'
import {render} from 'react-dom'

import {Badge, Button, ButtonGroup} from '../../src'
import {Calendar, CalendarHeaderControl, CalendarDays, CalendarDayLabels} from '../../src'
import {Nav, NavContent, NavItem} from '../../src'
import {Tabs, Tab} from '../../src'
import {H1, H2, H3, H4, H5, H6} from '../../src'

require('blaze/dist/blaze.min.css')
require('blaze/dist/blaze.animations.min.css')
require('./demo.css')

let Demo = React.createClass({
  render() {
    return <div className="c-text">
      <div className="o-container o-container--xlarge o-grid o-grid--wrap o-grid--top o-grid--small-full o-grid--medium-full">
        <H1>ReactBlazeCSS Demo</H1>
        <main className="o-grid__cell o-grid__cell--width-75">
          <BadgeDemo />
          <ButtonDemo />
          <NavDemo />
          <TabDemo />
          <CalendarDemo />
        </main>
        <nav className="o-grid__cell o-grid__cell--width-25 nav">
          <H4>Components</H4>
          <ul className="c-list c-list--unstyled">
            <li className="c-list__item "><a className="c-link" href="#badges">Badges</a></li>
            <li className="c-list__item "><a className="c-link" href="#buttons">Buttons</a></li>
            <li className="c-list__item "><a className="c-link" href="#calendars">Calendars</a></li>
            <li className="c-list__item "><a className="c-link" href="#navs">Navs</a></li>
          </ul>
        </nav>
      </div>
      
    </div>
  }
})

class CalendarDemo extends React.Component {
  render(){
    return (
      <div id="calendars">
        <H2>Calendar</H2>
        <div>
          <H3>Calendar (controlled)</H3>
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
      <div id="tabs">
        <H2>Tabs</H2>
        <div>
          <H3>Uncontrolled tab example</H3>
          <Tabs defaultActiveKey={1} animate bStyle="primary">
            <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
            <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
            <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
          </Tabs>
        </div>
        <div>
          <H3>Controlled tab example (activeKey={2})</H3>
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
      <div id="navs">
        <H2>Nav</H2>
        <div>
          <H3>Normal</H3>
          <Nav style={{width: 200}}>
            <NavContent centered>My APP</NavContent>
            <NavItem bStyle="success" active>Home</NavItem>
            <NavItem>Menu</NavItem>
            <NavItem bStyle="primary">Settings</NavItem>
          </Nav>
        </div>
        <div>
          <H3>Light</H3>
          <Nav style={{width: 200}} light>
            <NavContent centered>My APP</NavContent>
            <NavItem bStyle="success" active>Home</NavItem>
            <NavItem>Menu</NavItem>
            <NavItem bStyle="primary">Settings</NavItem>
          </Nav>
        </div>
        <div>
          <H3>Nav inline</H3>
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
      <div id="badges">
        <H2>Badges</H2>
        <div>
          <H3>Normal</H3>
          <Badge>Default</Badge>{" "}
          <Badge bStyle="primary">Primary</Badge>{" "}
          <Badge bStyle="secondary">Secondary</Badge>{" "}
          <Badge bStyle="success">Success</Badge>{" "}
          <Badge bStyle="error">Error</Badge>
        </div>
        <div>
          <H3>Rounded</H3>
          <Badge rounded>Default</Badge>{" "}
          <Badge bStyle="primary" rounded>Primary</Badge>{" "}
          <Badge bStyle="secondary" rounded>Secondary</Badge>{" "}
          <Badge bStyle="success" rounded>Success</Badge>{" "}
          <Badge bStyle="error" rounded>Error</Badge>
        </div>
      </div>
    )
  }
}

class ButtonDemo extends React.Component {
  render(){
    return (
      <div id="buttons">
        <H2>Buttons</H2>
        <div>
          <Button>Button</Button>{" "}
          <Button bStyle="primary">Button</Button>{" "}
          <Button bStyle="secondary">Button</Button>{" "}
          <Button bStyle="success">Button</Button>{" "}
          <Button bStyle="error">Button</Button>{" "}
          <Button bStyle="error" rounded ghost>Button</Button>{" "}
          <Button disabled>Disabled</Button>
        </div>
        <div>
          <H3>ButtonGroup</H3>
          <ButtonGroup>
            <Button>Button</Button>
            <Button bStyle="primary">Button</Button>
            <Button bStyle="secondary">Button</Button>
            <Button bStyle="success">Button</Button>
            <Button bStyle="error">Button</Button>
          </ButtonGroup>
        </div>
        <div>
          <H3>Rounded</H3>
          <ButtonGroup rounded>
            <Button>Button</Button>
            <Button bStyle="primary">Button</Button>
            <Button bStyle="secondary">Button</Button>
            <Button bStyle="success">Button</Button>
            <Button bStyle="error">Button</Button>
          </ButtonGroup>
        </div>
        <div>
          <H3>ButtonGroup xsmall and ghost</H3>
          <ButtonGroup size="xsmall" ghost>
            <Button>Button</Button>
            <Button bStyle="primary">Button</Button>
            <Button bStyle="secondary">Button</Button>
            <Button bStyle="success">Button</Button>
            <Button bStyle="error">Button</Button>
          </ButtonGroup>
        </div>
        <div>
          <H3>Sizes</H3>
          <Button size="xsmall">Button</Button>{" "}
          <Button size="small">Button</Button>{" "}
          <Button size="medium">Button</Button>{" "}
          <Button size="large">Button</Button>{" "}
          <Button size="xlarge">Button</Button>{" "}
          <Button size="super">Button</Button>
        </div>
        <div>
          <H3>Block</H3>
          <Button block>Button</Button>
        </div>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
