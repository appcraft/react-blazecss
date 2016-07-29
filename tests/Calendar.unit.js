import React from 'react'
import {createRenderer} from 'react-addons-test-utils';
import expect from 'expect'

import {Calendar, CalendarContainer, CalendarDayLabels, CalendarHeaderControl, CalendarDays} from '../src/Calendar'

function expectJSX(element){
  let renderer = createRenderer();
  renderer.render(element);
  return expect(renderer.getRenderOutput());
}

describe('Calendar', () => {

  it("renders", () => {
    expectJSX(<Calendar>Text</Calendar>).toEqualJSX(
      <div className="c-calendar">Text</div>
    )
    expectJSX(<Calendar shadow="high">Text</Calendar>).toEqualJSX(
      <div className="c-calendar c-calendar--high">Text</div>
    )
  })
})

describe('CalendarContainer', () => {

  it("renders", () => {
    expectJSX(<CalendarContainer>Text</CalendarContainer>).toEqualJSX(
      <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>Text</div>
    )
  })
})

describe('CalendarDayLabels', () => {

  it("renders", () => {
    expectJSX(<CalendarDayLabels dayLabels={["1", "2", "3"]} />).toEqualJSX(
      <CalendarContainer>
        <div key={0} className="c-calendar__day">1</div>
        <div key={1} className="c-calendar__day">2</div>
        <div key={2} className="c-calendar__day">3</div>
      </CalendarContainer>
    )
  })
})

describe('CalendarHeaderControl', () => {

  it("renders", () => {
    expectJSX(
      <CalendarHeaderControl>Text</CalendarHeaderControl>
    ).toEqualJSX(
      <CalendarContainer>
        <button className="c-calendar__control" onClick={() => {}}>‹</button>
        <div className="c-calendar__header">Text</div>
        <button className="c-calendar__control" onClick={() => {}}>›</button>
      </CalendarContainer>
    )
  })
})

describe('CalendarDays', () => {

  it("renders", () => {
    expectJSX(
      <CalendarDays firstDayIndex={5}
              dayCount={31}
              previousDayCount={31}
              today={14}
              selected={21} />
    ).toEqualJSX(
      <CalendarContainer>
        <button className="c-calendar__date">27</button><button className="c-calendar__date">28</button><button className="c-calendar__date">29</button><button className="c-calendar__date">30</button><button className="c-calendar__date">31</button><button className="c-calendar__date c-calendar__date--in-month">01</button><button className="c-calendar__date c-calendar__date--in-month">02</button><button className="c-calendar__date c-calendar__date--in-month">03</button><button className="c-calendar__date c-calendar__date--in-month">04</button><button className="c-calendar__date c-calendar__date--in-month">05</button><button className="c-calendar__date c-calendar__date--in-month">06</button><button className="c-calendar__date c-calendar__date--in-month">07</button><button className="c-calendar__date c-calendar__date--in-month">08</button><button className="c-calendar__date c-calendar__date--in-month">09</button><button className="c-calendar__date c-calendar__date--in-month">10</button><button className="c-calendar__date c-calendar__date--in-month">11</button><button className="c-calendar__date c-calendar__date--in-month">12</button><button className="c-calendar__date c-calendar__date--in-month">13</button><button className="c-calendar__date c-calendar__date--in-month c-calendar__date--today">14</button><button className="c-calendar__date c-calendar__date--in-month">15</button><button className="c-calendar__date c-calendar__date--in-month">16</button><button className="c-calendar__date c-calendar__date--in-month">17</button><button className="c-calendar__date c-calendar__date--in-month">18</button><button className="c-calendar__date c-calendar__date--in-month">19</button><button className="c-calendar__date c-calendar__date--in-month">20</button><button className="c-calendar__date c-calendar__date--in-month c-calendar__date--selected">21</button><button className="c-calendar__date c-calendar__date--in-month">22</button><button className="c-calendar__date c-calendar__date--in-month">23</button><button className="c-calendar__date c-calendar__date--in-month">24</button><button className="c-calendar__date c-calendar__date--in-month">25</button><button className="c-calendar__date c-calendar__date--in-month">26</button><button className="c-calendar__date c-calendar__date--in-month">27</button><button className="c-calendar__date c-calendar__date--in-month">28</button><button className="c-calendar__date c-calendar__date--in-month">29</button><button className="c-calendar__date c-calendar__date--in-month">30</button><button className="c-calendar__date c-calendar__date--in-month">31</button><button className="c-calendar__date">01</button><button className="c-calendar__date">02</button><button className="c-calendar__date">03</button><button className="c-calendar__date">04</button><button className="c-calendar__date">05</button><button className="c-calendar__date">06</button>
      </CalendarContainer>
    )
  })
})
