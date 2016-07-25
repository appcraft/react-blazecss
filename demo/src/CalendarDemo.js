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

export default (\n\

  <Calendar shadow="higher">\n\
    <CalendarHeaderControl label="2016" 
                           onPrev={() => setYear(2015)} 
                           onNext={() => setYear(2017)} />\n\
    <CalendarHeaderControl label="January" />\n\
    <CalendarDayLabels dayLabels={["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]} />\n\
    <CalendarDays firstDayIndex={5}\n\
                  dayCount={31}\n\
                  previousDayCount={31}\n\
                  today={14}\n\
                  selected={21} />\n\
    <Button bStyle="primary" block>Today</Button>\n\
  </Calendar>\n\
)\
`} />
      </div>
    )
  }
}