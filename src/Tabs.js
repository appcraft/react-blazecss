import React from 'react'
import { bem }  from './utils'

import { TabHeading }  from './TabHeading'
import { TabPane }  from './TabPane'

export class Tabs extends React.Component {
  render(){
    const { children, animate, bStyle, ...props } = this.props
    
    var className = bem("c-tabs", {
      [bStyle]: true,
    }, {
      "a-tabs": animate
    })
    
    return (
      <div {...props} className={className}>
        <div className="c-tabs__headings">
          {this.renderTabHeadings()}
        </div>
        {this.renderTabPanes()}
      </div>
    )
  }
  
  renderTabHeadings(){
    const { activeKey, children } = this.props
    
    return React.Children.map(children, el => {
      const { title, disabled, eventKey } = el.props
      return <TabHeading disabled={disabled} eventKey={eventKey} active={eventKey === activeKey}>{title}</TabHeading>
    })
  }
  
  renderTabPanes(){
    const { children, activeKey } = this.props
    
    return React.Children.map(children, el => {
      const { title, disabled, children, ...props } = el.props
      return <TabPane {...props} active={props.eventKey === activeKey}>{children}</TabPane>
    })
  }
}


// <div class="c-tabs">
//   <div class="c-tabs__headings">
//     <div class="c-tab-heading c-tab-heading--active">One</div>
//     <div class="c-tab-heading c-tab-heading--disabled">Disabled</div>
//     <div class="c-tab-heading">Inactive</div>
//   </div>
//   <div class="c-tabs__tab c-tabs__tab--active">This is tab one</div>
//   <div class="c-tabs__tab">This is tab two</div>
// </div>