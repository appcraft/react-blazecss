import React from 'react'
import {render} from 'react-dom'

import { AlertDemo } from './AlertDemo'
import { BadgeDemo } from './BadgeDemo'
import { ButtonDemo } from './ButtonDemo'
import { CalendarDemo } from './CalendarDemo'
import { NavDemo } from './NavDemo'
import { TabDemo } from './TabDemo'
import { ToggleDemo } from './ToggleDemo'
import { TreeDemo } from './TreeDemo'

import {H1, H2, H3, H4, H5, H6, Button, Nav, NavContent, NavItem} from '../../src'

require('blaze/dist/blaze.min.css')
require('blaze/dist/blaze.animations.min.css')
require('./css/demo.css')

let Demo = React.createClass({
  render() {
    return <div className="c-text">
      <Nav position="top" fixed inline shadow="higher">
        <NavContent>ReactBlazeCSS</NavContent>
        <NavItem right bStyle="primary" href="https://github.com/appcraft/react-blazecss">github</NavItem>
      </Nav>
      <div className="o-container o-container--xlarge o-grid o-grid--wrap o-grid--top o-grid--small-full o-grid--medium-full">
        <main className="o-grid__cell o-grid__cell--width-80"  style={{paddingTop: 70}}>
          <H2 size="large">Introduction</H2>
          <p className="c-paragraph">
            ReactBlazeCSS is a set of React components using <a className="c-link" href="http://blazecss.com/">BlazeCSS</a> styles
            and heavily inspired by <a className="c-link" href="https://react-bootstrap.github.io">ReactBoostrap</a>.<br />
            Support is pretty limited and expiramental for now, more components will be added soon.
          </p>
          <AlertDemo />
          <BadgeDemo />
          <ButtonDemo />
          <CalendarDemo />
          <NavDemo />
          <TabDemo />
          <ToggleDemo />
          <TreeDemo />
          <br />
          <br />
        </main>
        <nav className="o-grid__cell o-grid__cell--width-20 nav fixed@large" style={{paddingTop: 50}}>
          <H3 size="medium">Components</H3>
          <ul className="c-list c-list--unstyled">
            <li className="c-list__item "><a className="c-link" href="#alerts">Alerts</a></li>
            <li className="c-list__item "><a className="c-link" href="#badges">Badges</a></li>
            <li className="c-list__item "><a className="c-link" href="#buttons">Buttons</a></li>
            <li className="c-list__item "><a className="c-link" href="#calendars">Calendars</a></li>
            <li className="c-list__item "><a className="c-link" href="#navs">Navs</a></li>
            <li className="c-list__item "><a className="c-link" href="#tabs">Tabs</a></li>
            <li className="c-list__item "><a className="c-link" href="#toggles">Toggles</a></li>
            <li className="c-list__item "><a className="c-link" href="#trees">Trees</a></li>
          </ul>
        </nav>
      </div>
      
    </div>
  }
})


render(<Demo/>, document.querySelector('#demo'))
