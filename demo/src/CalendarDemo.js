import React from 'react'
import {Calendar, CalendarHeaderControl, CalendarDays, CalendarDayLabels} from '../../src'
import {Button, H2, H3} from '../../src'

export class CalendarDemo extends React.Component {
  render(){
    return (
      <div id="calendars">
        <H2 size="large">Calendar</H2>
        <div>
          <H3 size="medium">Calendar (controlled)</H3>
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