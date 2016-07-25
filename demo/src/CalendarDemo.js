import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class CalendarDemo extends React.Component {
  render(){
    return (
      <div id="calendars">
        <H2 size="large">Calendars</H2>
        <H3 size="medium">Calendar (controlled)</H3>
        <p className="c-paragraph">
          ReactBlazeCSS's calendar is a pure UI component. It won't manage any state, but stays 100% lightweight.
          An external component using moment.js to build the calendar will be provided soon as a plug'n'play component.
        </p>
        <ReactPlayground codeText={`\
function setYear(num) {
  alert("should set year to " + num)
}

export default (

  <Calendar shadow="higher">
    <CalendarHeaderControl label="2016" 
                           onPrev={() => setYear(2015)} 
                           onNext={() => setYear(2017)} />
    <CalendarHeaderControl label="January" />
    <CalendarDayLabels dayLabels={["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]} />
    <CalendarDays firstDayIndex={5}
                  dayCount={31}
                  previousDayCount={31}
                  today={14}
                  selected={21} />
    <Button bStyle="primary" block>Today</Button>
  </Calendar>
)\
`} />
      </div>
    )
  }
}