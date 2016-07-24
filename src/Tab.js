import React from 'react'
import { bem }  from './utils'
import { TabPane } from './TabPane'

export class Tab extends React.Component {
  render() {
    const props = { ...this.props };

    // These props are for the parent `<Tabs>` rather than the `<TabPane>`.
    delete props.title;
    delete props.disabled;
    delete props.tabClassName;

    return <TabPane {...props} />;
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