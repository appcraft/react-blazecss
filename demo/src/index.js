import React from 'react'
import {render} from 'react-dom'

import { ButtonDemo } from './ButtonDemo'
import { CalendarDemo } from './CalendarDemo'
import { NavDemo } from './NavDemo'
import { TabDemo } from './TabDemo'
import { BadgeDemo } from './BadgeDemo'
import {Badge} from '../../src'
import {H1, H2, H3, H4, H5, H6, Button} from '../../src'

require('blaze/dist/blaze.min.css')
require('blaze/dist/blaze.animations.min.css')
require('./css/demo.css')

let Demo = React.createClass({
  render() {
    return <div className="c-text">
      <div className="o-container o-container--xlarge o-grid o-grid--wrap o-grid--top o-grid--small-full o-grid--medium-full">
        <H1 size="xlarge">ReactBlazeCSS Demo</H1>
        <main className="o-grid__cell o-grid__cell--width-75">
          <BadgeDemo />
          <ButtonDemo />
          <CalendarDemo />
          <NavDemo />
          <TabDemo />
        </main>
        <nav className="o-grid__cell o-grid__cell--width-25 nav fixed@large">
          <H3 size="medium">Components</H3>
          <ul className="c-list c-list--unstyled">
            <li className="c-list__item "><a className="c-link" href="#badges">Badges</a></li>
            <li className="c-list__item "><a className="c-link" href="#buttons">Buttons</a></li>
            <li className="c-list__item "><a className="c-link" href="#calendars">Calendars</a></li>
            <li className="c-list__item "><a className="c-link" href="#navs">Navs</a></li>
            <li className="c-list__item "><a className="c-link" href="#tabs">Tabs</a></li>
          </ul>
        </nav>
      </div>
      
    </div>
  }
})


render(<Demo/>, document.querySelector('#demo'))
