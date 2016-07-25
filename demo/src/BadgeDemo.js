import React from 'react'
import {Badge} from '../../src'
import {H2, H3} from '../../src'

export class BadgeDemo extends React.Component {
  render(){
    return (
      <div id="badges">
        <H2 size="large">Badges</H2>
        <div>
          <H3 size="medium">Normal</H3>
          <Badge>Default</Badge>{" "}
          <Badge bStyle="primary">Primary</Badge>{" "}
          <Badge bStyle="secondary">Secondary</Badge>{" "}
          <Badge bStyle="success">Success</Badge>{" "}
          <Badge bStyle="error">Error</Badge>
        </div>
        <div>
          <H3 size="medium">Rounded</H3>
          <Badge rounded>Default</Badge>{" "}
          <Badge bStyle="primary" rounded>Primary</Badge>{" "}
          <Badge bStyle="secondary" rounded>Secondary</Badge>{" "}
          <Badge bStyle="success" rounded>Success</Badge>{" "}
          <Badge bStyle="error" rounded>Error</Badge>
        </div>
      </div>
    )
  }
}