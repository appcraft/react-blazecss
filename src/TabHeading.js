import React from 'react'
import { bem }  from './utils'

export class TabHeading extends React.Component {
  render(){
    const { children, active, disabled, ...props } = this.props
    
    var className = bem("c-tab-heading", {
      active, disabled
    })
    
    return <div {...props} className={className}>{children}</div>
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