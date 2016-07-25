import React from 'react'
import {H2, H3} from '../../src'

import ReactPlayground from './LiveEditor'

export class BadgeDemo extends React.Component {
  render(){
    return (
      <div id="badges">
        <H2 size="large">Badges</H2>
        <H3 size="medium">Normal</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Badge>Default</Badge>{" "}\n\
    <Badge bStyle="primary">Primary</Badge>{" "}\n\
    <Badge bStyle="secondary">Secondary</Badge>{" "}\n\
    <Badge bStyle="success">Success</Badge>{" "}\n\
    <Badge bStyle="error">Error</Badge>\n\
  </div>\n\
)\
`} />
        <H3 size="medium">Rounded</H3>
        <ReactPlayground codeText={`\
export default (\n\
  <div>\n\
    <Badge rounded>Default</Badge>{" "}\n\
    <Badge bStyle="primary" rounded>Primary</Badge>{" "}\n\
    <Badge bStyle="secondary" rounded>Secondary</Badge>{" "}\n\
    <Badge bStyle="success" rounded>Success</Badge>{" "}\n\
    <Badge bStyle="error" rounded>Error</Badge>\n\
  </div>\n\
)\
`} />
      </div>
    )
  }
}