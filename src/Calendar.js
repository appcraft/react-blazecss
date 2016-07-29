import React from 'react'
import { bem }  from './utils'

export const CalendarContainer = ({children}) => (
  <div style={{width: '100%', display: 'flex', flexWrap: 'wrap'}}>
    {children}
  </div>
)

export class CalendarHeaderControl extends React.Component {

  constructor(props){
    super(props)

    this.onPrev = (e) => {
      e.preventDefault()
      const { onPrev } = this.props
      if (onPrev) onPrev()
    }

    this.onNext = (e) => {
      e.preventDefault()
      const { onNext } = this.props
      if (onNext) onNext()
    }
  }

  render(){
    const { onPrev, onNext, children } = this.props
    return (
      <CalendarContainer>
        <button className="c-calendar__control" onClick={this.onPrev}>‹</button>
        <div className="c-calendar__header">{children}</div>
        <button className="c-calendar__control" onClick={this.onNext}>›</button>
      </CalendarContainer>
    )
  }
}

export const CalendarDayLabels = ({dayLabels}) => (
  <CalendarContainer>
    {dayLabels.map((day, idx) => <div key={idx} className="c-calendar__day">{day}</div>)}
  </CalendarContainer>
)

function padDay(value){
  if (value < 10) return "0" + value
  else return "" + value
}

export class CalendarDays extends React.Component {
  render(){
    const { firstDayIndex, dayCount, previousDayCount, today, selected } = this.props
    
    const name = "c-calendar__date"
    const width = 7
    const buttons = []

    // Add previous days
    for(var i=1; i<=firstDayIndex; i++){
      buttons.push(<button key={"prev-" + i} className={name}>{padDay(previousDayCount-(firstDayIndex-i))}</button>)
    }

    // Add current days
    for(var i=1; i<=dayCount; i++){
      const className = bem(name, {
        "in-month": true,
        "today": i === today,
        "selected": i === selected,
      })
      buttons.push(<button key={"cur-" + i} className={className}>{padDay(i)}</button>)
    }
    
    // Add next days
    for(var i=0; ((firstDayIndex + dayCount + i)%7) != 0; i++){
      buttons.push(<button key={"next-" + (i+1)} className={name}>{padDay(i+1)}</button>)
    }

    return (
      <CalendarContainer>
        {buttons}
      </CalendarContainer>
    )
  }
}

export const Calendar = ({shadow, children}) => {
  const className = bem("c-calendar", {
    [shadow]: true,
  })
  return (
    <div className={className}>
      {children}
    </div>
  )
}