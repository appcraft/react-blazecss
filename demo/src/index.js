import React from 'react'
import {render} from 'react-dom'

import { AlertDemo } from './AlertDemo'
import { BadgeDemo } from './BadgeDemo'
import { ButtonDemo } from './ButtonDemo'
import { CalendarDemo } from './CalendarDemo'
import { ListDemo } from './ListDemo'
import { NavDemo } from './NavDemo'
import { TabDemo } from './TabDemo'
import { TableDemo } from './TableDemo'
import { TagDemo } from './TagDemo'
import { ToggleDemo } from './ToggleDemo'
import { TreeDemo } from './TreeDemo'

import {H1, H2, H3, H4, H5, H6, UL, LI, P, Button, Nav, NavContent, NavItem} from '../../src'

import Waypoint from 'react-waypoint'

require('blaze/dist/blaze.min.css')
require('blaze/dist/blaze.animations.min.css')
require('./css/demo.css')

class Section extends React.Component {
  constructor(props){
    super(props)

    this.handleEnter = (e) => {
      if (e.currentPosition === "inside" && e.previousPosition === "above"){
        const { id, onEnter } = this.props
        onEnter(id)
      }
    }
    this.handleLeave = (e) => {
      if (e.currentPosition === "above" && e.previousPosition === "inside"){
        const { id, onEnter } = this.props
        onEnter(id)
      }
    }
  }

  render(){
    const { id } = this.props
    return (
      <div id={id}>
        <Waypoint
          topOffset={50}
          onLeave={this.handleLeave} />
        {this.props.children}
        <Waypoint
          topOffset={50}
          onEnter={this.handleEnter} />
      </div>
    )
  }
}

class Demo extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      selected: ""
    }
    this.onEnter = (selected) => {
      console.log("onEnter", selected)
      this.setState({selected})
    }
  }

  render() {
    return <div className="c-text">
      <Nav position="top" fixed inline shadow="higher">
        <NavContent>ReactBlazeCSS</NavContent>
        <NavItem right bStyle="primary" href="https://github.com/appcraft/react-blazecss">github</NavItem>
      </Nav>
      <div className="o-container o-container--xlarge o-grid o-grid--wrap o-grid--top o-grid--small-full o-grid--medium-full">
        <main className="o-grid__cell o-grid__cell--width-80"  style={{paddingTop: 50}}>
          <H2 size="large">Introduction</H2>
          <P>
            ReactBlazeCSS is a set of React components using <a className="c-link" href="http://blazecss.com/">BlazeCSS</a> styles
            and heavily inspired by <a className="c-link" href="https://react-bootstrap.github.io">ReactBoostrap</a>.<br />
            Support is pretty limited and expiramental for now, more components will be added soon.
          </P>
          <Section id="alerts" onEnter={this.onEnter}>
            <AlertDemo />
          </Section>
          <Section id="badges" onEnter={this.onEnter}>
            <BadgeDemo />
          </Section>
          <Section id="buttons" onEnter={this.onEnter}>
            <ButtonDemo />
          </Section>
          <Section id="calendars" onEnter={this.onEnter}>
            <CalendarDemo />
          </Section>
          <Section id="lists" onEnter={this.onEnter}>
            <ListDemo />
          </Section>
          <Section id="navs" onEnter={this.onEnter}>
            <NavDemo />
          </Section>
          <Section id="tables" onEnter={this.onEnter}>
            <TableDemo />
          </Section>
          <Section id="tabs" onEnter={this.onEnter}>
            <TabDemo />
          </Section>
          <Section id="tags" onEnter={this.onEnter}>
            <TagDemo />
          </Section>
          <Section id="toggles" onEnter={this.onEnter}>
            <ToggleDemo />
          </Section>
          <Section id="trees" onEnter={this.onEnter}>
            <TreeDemo />
          </Section>
          <br />
          <br />
        </main>
        <nav className="o-grid__cell o-grid__cell--width-20 nav fixed@large" style={{paddingTop: 50}}>
          <H3 size="medium">Components</H3>
          <UL unstyled className="nav-menu">
            {this.renderLink("alerts", "Alerts")}
            {this.renderLink("badges", "Badges")}
            {this.renderLink("buttons", "Buttons")}
            {this.renderLink("calendars", "Calendars")}
            {this.renderLink("lists", "Lists")}
            {this.renderLink("navs", "Navs")}
            {this.renderLink("tables", "Tables")}
            {this.renderLink("tabs", "Tabs")}
            {this.renderLink("tags", "Tags")}
            {this.renderLink("toggles", "Toggles")}
            {this.renderLink("trees", "Trees")}
          </UL>
        </nav>
      </div>
    </div>
  }

  renderLink(id, name){
    const active = id == this.state.selected
    // Force selection in 50ms, used because trusting waypoints leaving doesn't work well on scroll jumps
    return (
      <LI className={active ? "active" : undefined}>
        <a className="c-link" 
           href={"#" + id} 
           onClick={() => setTimeout(() => this.setState({selected: id}), 50)}>
          {name}
        </a>
      </LI>
    )
  }
}


render(<Demo/>, document.querySelector('#demo'))
